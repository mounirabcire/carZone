import styled from "styled-components";

export const PostsContainerStyled = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, 300px);
justify-content: center;
gap: var(--spacing-8);
`;

export const PostStyle = styled.div`
    width: 300px;
    min-width: 300px;
    background-color: var(--gray-5);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    justify-content: space-between;
    padding: var(--spacing-1);
    border: var(--border-gray-2);
    border-radius: var(--border-radius-medium);

    & .post__image-box {
        height: 220px;
        border-radius: var(--border-radius-small);
        position: relative;
        overflow: hidden;
    }

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

    & .post__icon-container {
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
    }

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

    & .post__separator {
        height: 1px;
        background-color: var(--gray-15);
        border: none;
    }

    & .post__info--main {
        & .post__info--top {
            margin-bottom: var(--spacing-2);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--spacing-2);
        }

        & .post__name {
            font-size: var(--font-size-base);
        }

        & .post__category {
            padding: var(--spacing-1);
            text-transform: capitalize;
            background-color: var(--blue-0);
            color: var(--blue-25);
            font-size: var(--font-size-tiny);
            font-weight: 500;
            border: 1px solid var(--blue-20);
            border-radius: var(--border-radius-xxl);
            display: inline-block;
        }

        & .post__info-list {
            font-size: var(--font-size-base);
            display: grid;
            grid-template-columns: repeat(2, 2fr);
            grid-template-rows: repeat(2, auto);
            gap: var(--spacing-1);
        }

        & .post__info-item {
            display: flex;
            align-items: start;
            gap: var(--spacing-2);

            & > span:first-child {
                color: var(--blue-25);
                font-weight: 500;
                font-size: 14px;
            }

            & > span:last-child{
                font-size: var(--font-size-tiny);
                font-weight: 600;
            }
        }
    }

    & .post__info--sub {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .post__price {
            display: flex;
            align-items: end;
            gap: var(--spacing-2);

            &--new {
                color: var(--gray-40);
                font-size: var(--font-size-md);
                font-weight: bold;
            }

            &--old {
                font-size: var(--font-size-base);
                position: relative;
                font-weight: 500;

                &::after {
                    content: "";
                    background-color: var(--gray-35);
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 100%;
                    height: 1px;
                }
            }
        }
    }
`;
