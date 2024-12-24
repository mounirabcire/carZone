import styled, { css } from "styled-components";

interface HeadingProps {
    as?: string;
    color?: `var(--${string})` | `#${string}`;
}

const Heading = styled.h1<HeadingProps>`
    ${({ as }) =>
        as === "h3" &&
        css`
            font-size: var(--font-size-xl);

            @media only screen and (max-width: 48em) {
                font-size: var(--font-size-lg);
            }
        `}

    ${({ as }) =>
        as === "h2" &&
        css`
            font-size: var(--font-size-3xl);

            @media only screen and (max-width: 37.5em) {
                font-size: var(--font-size-xxl);
            }

            @media only screen and (max-width: 25em) {
                font-size: var(--font-size-xl);
            }
        `}

    ${({ as }) =>
        as === "h1" &&
        css`
            font-size: var(--font-size-4xl);

            @media only screen and (max-width: 37.5em) {
                font-size: var(--font-size-3xl);
            }

            @media only screen and (max-width: 25em) {
                font-size: var(--font-size-xxl);
            }
        `}

    color: ${({ color }) => color};
`;

Heading.defaultProps = {
    as: "h1",
    color: "var(--gray-40)",
};

export default Heading;
