import styled from "styled-components";
import PostSave from "./PostSave";

interface PostImageProps {
    postImage: string;
    postName: string;
    isSaved: boolean;
    savedCount: number;
}

const PostImageStyle = styled.div`
    height: 220px;
    border-radius: var(--border-radius-small);
    position: relative;
    overflow: hidden;

    & .post__image {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius-small);
        transform-origin: center;
        object-fit: cover;
        transition: transform 0.5s cubic-bezier(0.61, 1, 0.88, 1);
    }

    &:hover .post__image {
        transform: scale(1.05);
    }
`;

function PostImage({
    postImage,
    postName,
    isSaved,
    savedCount,
}: PostImageProps) {
    return (
        <PostImageStyle>
            <img src={postImage} alt={postName} className="post__image" />

            <PostSave
                isSaved={isSaved}
                savedCount={savedCount}
                postName={postName}
            />
        </PostImageStyle>
    );
}

export default PostImage;
