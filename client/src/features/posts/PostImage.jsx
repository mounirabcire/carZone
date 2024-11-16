import PostSave from "./PostSave";

function PostImage({ postImage, postName, isSaved, savedCount }) {
    return (
        <div className="post__image-box">
            <img src={postImage} alt={postName} className="post__image" />

            <PostSave
                isSaved={isSaved}
                savedCount={savedCount}
                postName={postName}
            />
        </div>
    );
}

export default PostImage;
