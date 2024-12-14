import styled from "styled-components";

interface PostCategoryProps {
    postCategory: string;
}

const PostCategoryStyle = styled.div`
    padding: var(--spacing-1);
    text-transform: capitalize;
    background-color: var(--blue-0);
    color: var(--blue-25);
    font-size: var(--font-size-tiny);
    font-weight: 500;
    border: 1px solid var(--blue-20);
    border-radius: var(--border-radius-xxl);
    display: inline-block;
`;

function PostCategory({ postCategory }: PostCategoryProps) {
    return (
        <PostCategoryStyle>
            {postCategory === "sell" || postCategory === "rent"
                ? `for ${postCategory}`
                : postCategory}
        </PostCategoryStyle>
    );
}

export default PostCategory;
