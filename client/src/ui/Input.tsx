import styled, { css } from "styled-components";

const variations = {
    normal: css`
        padding: 12px 10px;
        border-radius: var(--border-radius-small);
        transition: border-color 0.1s linear;
        border: var(--border-gray-1);

        &:focus {
            border-color: var(--gray-35);
        }
    `,
    ghost: css`
        padding-bottom: 12px;
        border: none;
        border-bottom: 2px solid var(--gray-35);
    `,
};

type VariationType = keyof typeof variations;
type ColorType = `#${string}` | `var(--${string})`;

interface InputProps {
    $variation: VariationType;
    $bgColor?: ColorType;
    $textColor?: ColorType;
    $borderColor?: ColorType;
    $borderFocuseColor?: ColorType;
}

const Input = styled.input<InputProps>`
    width: inherit;

    &::placeholder {
        color: var(--gray-25);
    }

    color: ${({ $textColor }) => ($textColor ? $textColor : "var(--gray-40)")};

    background-color: ${({ $bgColor }) =>
        $bgColor ? $bgColor : "transparent"};

    /* border-color: ${({ $borderColor }) =>
        $borderColor ? $borderColor : "var(--border-gray-1)"};

    &:focus {
        border-color: ${({ $borderFocuseColor }) =>
        $borderFocuseColor ? $borderFocuseColor : "var(--gray-30)"};
    } */

    ${({ $variation }) => variations[$variation]}

    ${({ as }) =>
        as === "textarea" &&
        css`
            height: 100%;
        `}
`;

Input.defaultProps = {
    $variation: "normal",
};

export default Input;
