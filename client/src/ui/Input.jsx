import styled, { css } from "styled-components";

const variations = {
    normal: css`
        padding: 12px 10px;
        border-radius: var(--border-radius-small);
        border: var(--border-gray-1);
        transition: border-color 0.1s linear;

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

const Input = styled.input`
    width: inherit;
    color: var(--gray-40);
    background-color: ${({ $bgColor }) =>
        $bgColor ? $bgColor : "transparent"};

    &::placeholder {
        color: var(--gray-25);
    }

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
