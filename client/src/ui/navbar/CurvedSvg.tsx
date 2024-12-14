import { motion } from "framer-motion";
import styled from "styled-components";

const CurvedSvgStyle = styled.svg`
    height: 100vh;
    width: 50px;
    fill: var(--gray-40);
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(calc(100% - 1px));
`;

function CurvedSvg() {
    const initialPath = `M0 0 L0 ${window.innerHeight} Q-100 ${
        window.innerHeight / 2
    } 0 0`;
    const targetPath = `M0 0 L0 ${window.innerHeight} Q100 ${
        window.innerHeight / 2
    } 0 0`;

    const childVariant = {
        initial: { d: initialPath },
        animate: {
            d: targetPath,
            transition: { duration: 0.35, ease: [0.67, 0, 0.24, 1] },
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.6, ease: [0.67, 0, 0.24, 1] },
        },
    };

    return (
        <CurvedSvgStyle>
            <motion.path variants={childVariant} d={initialPath}></motion.path>
        </CurvedSvgStyle>
    );
}

export default CurvedSvg;
