import styled from "styled-components";

const HomeStyle = styled.div`
    overflow: hidden;
    
    .main {
        margin-bottom: var(--spacing-32);

        & > section:not(:last-of-type) {
            margin-bottom: var(--spacing-24);
            /* margin-bottom: var(--spacing-32); */
        }
    }

    .partners > div > h3 {
        margin-bottom: var(--spacing-6);
    }

    .posts--latest {
        .posts__heading-container {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: var(--spacing-6);
            justify-content: space-between;
            margin-bottom: var(--spacing-6);
        }

        .posts__btn {
            display: block;
            width: max-content;
            margin: var(--spacing-6) auto 0;
        }
    }

    .cta {
        height: 80vh;
        text-align: center;
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.8),
                rgba(0, 0, 0, 0.3)
            ),
            url("/assets/images/cars/car-12.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 100%;
        background-attachment: fixed;
        display: flex;
        gap: var(--spacing-6);
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__text-box {
            padding: 0 4rem;
            width: 100%;
            max-width: 700px;
            filter: none;

            & > h2 {
                font-weight: 400;
                margin-bottom: var(--spacing-3);
            }

            @media only screen and (max-width: 25em) {
                padding: 0 1rem;
            }
        }

        &__text {
            color: #fff;
        }
    }

    button > span.icon-container {
        display: inline-block;
        margin-left: var(--spacing-1);
        font-size: 1.9rem;
        transition: transform 0.2s ease-out;
    }

    button:hover span.icon-container {
        transform: translate(2px, -2px);
    }
`;

export default HomeStyle;
