import styled from "styled-components";

const PostsStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
    justify-content: center;
    gap: var(--spacing-8);

    & .post {
        background-color: var(--gray-5);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4);
        justify-content: space-between;
        padding: var(--spacing-1);
        border: var(--border-gray-2);
        border-radius: var(--border-radius-medium);

        & .post__separator {
            height: 1px;
            background-color: var(--gray-15);
            border: none;
        }
    }
`;

export default PostsStyled;
