import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function PostSave({
    isSaved: isSavedInit,
    savedCount: savedCountInit,
    postName,
}) {
    const [isSaved, setIsSaved] = useState(() => isSavedInit);
    const [savedCount, setSavedCount] = useState(() => savedCountInit);

    const notifySuccess = () =>
        toast.success(`"${postName}" post has been saved successfully!`, {
            icon: "📌",
        });

    const notifyWarning = () =>
        toast.warning(`"${postName}" post has been unsaved!`, {
            icon: "❌",
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
        <div className="post__icon-container">
            <span className="post__bookmark--icon-box" onClick={handleSave}>
                {isSaved ? (
                    <motion.i
                        key={isSaved}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="ri-bookmark-fill"
                    ></motion.i>
                ) : (
                    <motion.i
                        key={isSaved}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="ri-bookmark-line"
                    ></motion.i>
                )}
            </span>
            <span className="post__bookmark--count">{savedCount}</span>
        </div>
    );
}

export default PostSave;
