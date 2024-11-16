function PostCategory({ postCategory }) {
    return (
        <span className="post__category">
            {postCategory === "sell" || postCategory === "rent"
                ? `for ${postCategory}`
                : postCategory}
        </span>
    );
}

export default PostCategory;
