import styled, { keyframes } from "styled-components";

const infiniteCarousel = keyframes`
    to{
        transform: translateX(calc(-100% - var(--spacing-9)));
    }
`;

export const PartnersContainerStyled = styled.div`
    padding-block: var(--spacing-6);
    display: flex;
    gap: var(--spacing-9);
    user-select: none;
    overflow: hidden;

    &:hover > div {
        animation-play-state: paused;
    }

    &:hover > div > * {
        filter: grayscale(100%);
    }

    & .slider {
        display: flex;
        justify-content: space-between;
        gap: var(--spacing-9);
        animation: ${infiniteCarousel} 50s linear infinite;
    }
`;

export const PartnerStyled = styled.div`
    width: 25rem;
    height: 33rem;
    border: var(--border-gray-3);
    border-radius: var(--border-radius-xl);
    box-shadow: 4px 11px 13px 4px rgba(44, 44, 44, 0.29);
    position: relative;
    overflow: hidden;
    transition: filter 0.1s linear;

    &:hover {
        filter: grayscale(0%) !important;
    }

    &:hover .partner__pic {
        transform: scale(1.1);
    }

    & .partner__info {
        width: 100%;
        padding: 3.2rem 1.6rem 2.4rem 1.6rem;
        background-image: linear-gradient(
            to top,
            #000000d6,
            #000000c0,
            #000000a2,
            #0000007f,
            #00000055,
            #00000029,
            transparent
        );
        backdrop-filter: blur(1px);
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 5;

        & > * {
            color: #fff;
        }
    }

    & .partner__fullName {
        margin-bottom: var(--spacing-1);
        font-weight: 500;
    }

    & .partner__profession {
        font-size: var(--font-size-tiny);
        font-weight: 600;
    }

    & .partner__pic {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: center;
        transition: transform 0.7s cubic-bezier(0.61, 1, 0.88, 1);
    }
`;
