import styled from "styled-components";

const FooterStyle = styled.footer`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-10);
    overflow: hidden;
    background-color: var(--gray-0);
    position: relative;

    .footer--top {
        display: flex;
        flex-wrap: wrap;
        align-items: start;
        column-gap: var(--spacing-16);
        row-gap: var(--spacing-10);

        & .footer__info-heading {
            margin-bottom: var(--spacing-5);
        }

        & .footer__info-item {
            font-weight: 500;
        }

        & .footer__info-item:not(:last-of-type) {
            margin-bottom: var(--spacing-1);
        }

        @media only screen and (max-width: 37.5em) {
            column-gap: var(--spacing-14);
        }
    }

    .footer--bottom {
        & .footer__logo {
            font-size: 23.5vw;
            line-height: 100%;
            text-align: center;
            color: var(--gray-10);
            font-weight: bold;
            user-select: none;
        }

        & .footer__separator {
            background-color: var(--gray-10);
            color: transparent;
        }

        & .footer__copy-right-container {
            padding: 1.6rem 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: var(--spacing-4);
        }

        & .footer__social-media {
            display: flex;
            align-items: center;
            gap: var(--spacing-4);

            @media only screen and (max-width: 25em) {
                display: none;
            }
        }

        & .footer__copy-right--1,
        & .footer__copy-right--2 {
            font-size: var(--font-size-tiny);
            font-weight: 600;
        }
    }
`;

export default FooterStyle;
