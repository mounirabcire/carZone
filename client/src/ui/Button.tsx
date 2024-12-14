import styled, { css } from "styled-components";

const sharedMainStyle = css`
    color: #fff;
    background-color: var(--blue-25);
    border-color: transparent;

    &:hover {
        background-color: var(--blue-30);
    }

    &:active {
        background-color: var(--blue-35);
    }
`;
const shareGhostWhiteStyle = css`
    color: #fff;
    background-color: transparent;
`;
const shareGhostGrayStyle = css`
    color: var(--gray-35);
    background-color: transparent;
`;
const sharedBlackStyle = css`
    color: var(--gray-40);
    background-color: transparent;
    border-color: transparent;
`;

const sizes = {
    normal: css`
        padding: 0.8rem 1.2rem;
        font-size: var(--font-size-base);
        font-weight: 500;
    `,

    small: css`
        padding: 0.8rem 1.6rem;
        font-size: var(--font-size-tiny);
        font-weight: 600;
    `,

    equal: css`
        width: 3.5rem;
        height: 3.5rem;
        padding: 1.6rem;
        font-size: var(--font-size-base);
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    none: css`
        padding: 0;
        font-size: var(--font-size-base);
        font-weight: 500;
    `,
};

const variations = {
    main: css`
        border-radius: var(--border-radius-small);
        transition: background 0.2s;
        ${sharedMainStyle}
    `,

    mainRounded: css`
        border-radius: var(--border-radius-full);
        ${sharedMainStyle}
    `,

    mainLinear: css`
        color: #fff;
        background-image: linear-gradient(
            to right,
            var(--blue-25),
            var(--gray-40)
        );
        border: none;
        border-radius: var(--border-radius-small);
    `,

    secondary: css`
        color: #fff;
        background-color: var(--gray-40);
        border-color: transparent;
        border-radius: var(--border-radius-small);
    `,

    tertiary: css`
        color: var(--gray-40);
        background-color: #fff;
        border-color: transparent;
        border-radius: var(--border-radius-small);
    `,

    ghostWhite: css`
        border-color: transparent;
        ${shareGhostWhiteStyle}
    `,

    ghostWhiteBordered: css`
        border-color: #fff;
        border-radius: var(--border-radius-small);
        ${shareGhostWhiteStyle}
    `,

    ghostBlack: css`
        ${sharedBlackStyle}
    `,

    ghostGray: css`
        border-color: transparent;
        ${shareGhostGrayStyle}
    `,

    ghostGrayBordered: css`
        border-color: var(--gray-35);
        border-radius: var(--border-radius-xl);
        ${shareGhostGrayStyle}
    `,

    ghostLinked: css`
        ${sharedBlackStyle}
        text-decoration: underline;
    `,

    blured: css`
        color: #fff;
        border-color: transparent;
        background-color: rgba(32, 32, 32, 0.3);
        backdrop-filter: blur(15px);
    `,
};

interface ButtonProps {
    $size?: keyof typeof sizes;
    $variation?: keyof typeof variations;
}

const Button = styled.button<ButtonProps>`
    border: 2px solid;
    cursor: pointer;

    ${({ $size }) => $size && sizes[$size]}
    ${({ $variation }) => $variation && variations[$variation]}
    ${({ as }) =>
        as === "a" &&
        css`
            font-family: "Montserrat", sans-serif;
        `}
`;

Button.defaultProps = {
    $size: "normal",
    $variation: "main",
};

export default Button;
