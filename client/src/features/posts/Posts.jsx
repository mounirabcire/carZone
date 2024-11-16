import { PostStyle, PostsContainerStyled } from "../../styles/PostStyle";
import PostImage from "./PostImage";
import PostMainInfo from "./PostMainInfo";
import PostSubInfo from "./PostSubInfo";

// NOTE: WHY ADDING THE KYE ATTRIBUTE IN THE ICONS WILL TRIGGER THE ANIMATION TO REDO

function Posts({ posts }) {
    if (!posts) return;

    return (
        <PostsContainerStyled>
            {posts.map((post, idx) => (
                <Post key={idx} post={post} />
            ))}
        </PostsContainerStyled>
    );
}

function Post({
    post: {
        postImage,
        postName,
        postCategorie,
        PostMainDetails,
        price,
        currency,
        isSaved,
        saved,
    },
}) {
    return (
        <PostStyle>
            <PostImage
                postImage={postImage}
                postName={postName}
                isSaved={isSaved}
                savedCount={saved}
            />

            <PostMainInfo
                details={PostMainDetails}
                postCategorie={postCategorie}
                postName={postName}
            />

            <hr className="post__separator" />

            <PostSubInfo currency={currency} price={price} />
        </PostStyle>
    );
}

export default Posts;
