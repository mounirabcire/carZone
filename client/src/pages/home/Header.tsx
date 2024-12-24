import { useEffect, useState, useRef } from "react";
import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { sliderContent } from "../../data/data";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import styled from "styled-components";

const HeaderStyle = styled.header`
    position: relative;
    height: calc(100vh + 270px);
    margin-bottom: var(--spacing-32);
    border-bottom-left-radius: var(--border-radius-large);
    border-bottom-right-radius: var(--border-radius-medium);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .header__text-box {
        padding: 0 4rem;
        text-align: center;
        transform: translateY(-115px);

        @media only screen and (max-width: 25em) {
            padding: 0 1rem;
        }
    }

    .header__para {
        margin: var(--spacing-3) 0 var(--spacing-6);
        color: #fff;
        font-weight: 500;
    }

    .header__img-container,
    .header__overlay-bg {
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    .header__overlay-bg {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .header__img {
        width: 100%;
        height: 100%;
        display: inline-block;
        object-fit: cover;
    }

    .header__progress-bar {
        width: 100%;
        height: 4px;
        background-color: var(--gray-40);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;
    }
`;

// Animation durations and easing functions
const ANIMATION_DURATION = 0.6;
const EASE_1 = [0.25, 1, 0.5, 1];
const EASE_2 = [0.7, 0, 0.84, 0];

// Motion variants for the text box
const textBoxVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: ANIMATION_DURATION } },
    exit: { opacity: 0, transition: { duration: ANIMATION_DURATION } },
};

// Motion variants for the image
const imageVariants = {
    initial: { scale: 1.15, filter: "blur(20px)" },
    animate: {
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: ANIMATION_DURATION, ease: EASE_1 },
    },
    exit: {
        scale: 1.3,
        filter: "blur(20px)",
        transition: { duration: ANIMATION_DURATION, ease: EASE_2 },
    },
};

// Motion variants for the progress bar
const progressBarVariants = {
    initial: { width: "0%" },
    animate: {
        width: "100%",
        transition: { duration: 10, ease: "linear", repeat: Infinity },
    },
};

function Header() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>(
        []
    );
    const intervalRef = useRef<number | null>(null);
    const headerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["start start", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [-115, 300]);

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setCurrentSlide((prev) =>
                prev === sliderContent.length - 1 ? 0 : prev + 1
            );
        }, 10000);

        return () => clearInterval(intervalRef.current as number);
    }, [sliderContent.length]);

    const { title, paragraph, button, image } = sliderContent[currentSlide];

    return (
        <HeaderStyle ref={headerRef}>
            <AnimatePresence mode="wait" initial={false}>
                {/* Text Box Animation */}
                <motion.div
                    key={`slide-${currentSlide}`}
                    style={{ y: translateY }}
                    variants={textBoxVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="header__text-box"
                >
                    <Heading
                        color="#fff"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p className="header__para">{paragraph}</p>
                    <Button $variation="blured">
                        {button}
                        <span className="icon-container">
                            <i className="ri-arrow-right-up-line"></i>
                        </span>
                    </Button>
                </motion.div>

                {/* Image Animation */}
                <motion.div
                    key={`image-${currentSlide}`}
                    className="header__img-container"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <img src={image} alt="Car" className="header__img" />
                </motion.div>
            </AnimatePresence>

            <div className="header__overlay-bg" />

            {/* Progress Bar Animation */}
            <motion.div
                className="header__progress-bar"
                variants={progressBarVariants}
                initial="initial"
                animate="animate"
            />
        </HeaderStyle>
    );
}

export default Header;
