import styled, { css } from "styled-components";

const sizes = {
    normal: css`
        padding: 0.8rem 2.4rem;
        font-size: var(--font-size-md);
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
        font-size: var(--font-size-md);
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    none: css`
        padding: 0;
        font-size: var(--font-size-md);
    `,
};

const variations = {
    main: css`
        color: #fff;
        background-color: var(--blue-25);
        border-color: transparent;
        border-radius: var(--border-radius-small);
        transition: background 0.2s;

        &:hover {
            background-color: var(--blue-30);
        }

        &:active {
            background-color: var(--blue-35);
        }
    `,

    mainRounded: css`
        color: #fff;
        background-color: var(--blue-25);
        border-color: transparent;
        border-radius: var(--border-radius-full);
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
        transition: background 0.2s;

        &:hover {
            background-color: var(--gray-35);
        }

        &:active {
            background-color: var(--gray-40);
        }
    `,

    tertiary: css`
        color: var(--gray-40);
        background-color: #fff;
        border-color: transparent;
        border-radius: var(--border-radius-small);
        transition: background 0.2s;

        &:hover {
            background-color: var(--gray-35);
        }

        &:active {
            background-color: var(--gray-40);
        }
    `,

    ghostWhite: css`
        color: #fff;
        background-color: transparent;
        border-color: transparent;
    `,

    ghostWhiteBordered: css`
        color: #fff;
        background-color: transparent;
        border-color: #fff;
        border-radius: var(--border-radius-small);
    `,

    ghostBlack: css`
        color: var(--gray-40);
        background-color: transparent;
        border-color: transparent;
    `,

    ghostGray: css`
        color: var(--gray-35);
        background-color: transparent;
        border-color: transparent;
    `,

    ghostGrayBordered: css`
        color: var(--gray-35);
        background-color: transparent;
        border-color: var(--gray-35);
        border-radius: var(--border-radius-xl);
    `,

    ghostLinked: css`
        color: var(--gray-40);
        background-color: transparent;
        border-color: transparent;
        text-decoration: underline;
    `,

    blured: css`
        color: #fff;
        border-color: transparent;
        background-color: rgba(32, 32, 32, 0.3);
        backdrop-filter: blur(15px);
    `,
};

const Button = styled.button`
    margin: 1.6rem;
    border: 2px solid;
    cursor: pointer;

    ${({ size }) => sizes[size]}
    ${({ variation }) => variations[variation]}
    ${({ as }) =>
        as === "a" &&
        css`
            font-family: "Montserrat", sans-serif;
        `}
`;

Button.defaultProps = {
    size: "normal",
    variation: "main",
};

export default Button;
