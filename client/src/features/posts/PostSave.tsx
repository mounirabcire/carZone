import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import styled from "styled-components";

interface PostStyleProps {
    postName: string;
    isSaved: boolean;
    savedCount: number;
}

const PostSaveStyle = styled.div`
    padding: var(--spacing-2);
    background-color: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: var(--border-radius-large);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: var(--spacing-2);
    align-items: center;
    position: absolute;
    bottom: var(--spacing-1);
    right: var(--spacing-1);

    & .post__bookmark--icon-box {
        border-radius: 50%;
        font-weight: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        & > * {
            color: #fff;
            display: inline-block;
            font-size: var(--font-size-base);
        }
    }

    & .post__bookmark--count {
        font-size: var(--font-size-micro);
        font-weight: 700;
        color: #fff;
    }
`;

function PostSave({
    isSaved: isSavedInit,
    savedCount: savedCountInit,
    postName,
}: PostStyleProps) {
    const [isSaved, setIsSaved] = useState(() => isSavedInit);
    const [savedCount, setSavedCount] = useState(() => savedCountInit);

    const notifySuccess = () =>
        toast.success(`"${postName}" post has been saved successfully!`, {
            icon: <span>📌</span>,
        });

    const notifyWarning = () =>
        toast.warning(`"${postName}" post has been unsaved!`, {
            icon: <span>❌</span>,
        });

    const handleSave = () => {
        setIsSaved((prevBool) => !prevBool);

        // Update saved count based on isSaved status
        setSavedCount((prevCount) => {
            if (isSaved) {
                return prevCount - 1; // Unsaving the post
            } else {
                return prevCount + 1; // Saving the post
            }
        });

        // Show notifications
        if (isSaved) {
            notifyWarning();
        } else {
            notifySuccess();
        }
    };

    return (
        <PostSaveStyle>
            <span className="post__bookmark--icon-box" onClick={handleSave}>
                {isSaved ? (
                    <motion.i
                        className="ri-bookmark-fill"
                        whileTap={{
                            scale: 0.95,
                        }}
                    ></motion.i>
                ) : (
                    <motion.i
                        className="ri-bookmark-line"
                        whileTap={{
                            scale: 0.95,
                        }}
                    ></motion.i>
                )}
            </span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={isSaved.toString()}
                    className="post__bookmark--count"
                    initial={{ y: isSaved ? -10 : 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: isSaved ? -10 : 10, opacity: 0 }}
                    transition={{ ease: [0.34, 1.56, 0.64, 1], duration: .2 }}
                >
                    {savedCount}
                </motion.span>
            </AnimatePresence>
        </PostSaveStyle>
    );
}

export default PostSave;
