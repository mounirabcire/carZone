import { motion } from "framer-motion";

import LinkList from "./LinkList";
import CurvedSvg from "./CurvedSvg";
import styled from "styled-components";

const parentVariant = {
    initial: { x: "-100%" },
    animate: {
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.67, 0, 0.24, 1],
            staggerChildren: 0.04,
        },
    },
    exit: {
        x: "-100%",
        transition: {
            duration: 0.8,
            ease: [0.67, 0, 0.24, 1],
            staggerChildren: 0.035,
        },
    },
};

const MenuStyled = styled(motion.div)`
    width: 25%;
    height: 100vh;
    background-color: #202020;
    color: var(--gray-0);
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    @media only screen and (max-width: 62em) {
        width: 45%;
    }

    @media only screen and (max-width: 37.5em) {
        width: 55%;
    }
`;

function Menu({ isOpened, onClose }) {
    return (
        <MenuStyled
            className="nav__menu"
            variants={parentVariant}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <LinkList isOpened={isOpened} onClose={onClose} />
            <CurvedSvg />
        </MenuStyled>
    );
}

export default Menu;
