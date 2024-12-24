import { useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import NavStyle from "../../styles/NavbarStyle";
import Button from "../Button";
import Container from "../Container";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import Menu from "./Menu";

const navbarVariants = {
    visible: { y: 0 },
    hidden: {
        y: "-100%",
        transition: {
            duration: 0.45,
            ease: [0.37, 0, 0.63, 1],
        },
    },
};

function Navbar() {
    // check if the menu is opened
    const [isOpened, setIsOpened] = useState(false);
    // check if the navbar is visible
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() as number;
        if (latest > 50 && latest > previous) setIsVisible(false);
        else setIsVisible(true);
    });

    return (
        <NavStyle
            variants={navbarVariants}
            animate={isVisible ? "visible" : "hidden"}
        >
            <Container>
                <MenuToggle isOpened={isOpened} onOpen={setIsOpened} />
                <Logo />
                <Button>Get Access</Button>
            </Container>

            <AnimatePresence>
                {isOpened && (
                    <Menu
                        isOpened={isOpened}
                        onClose={() => setIsOpened(false)}
                    />
                )}
            </AnimatePresence>
        </NavStyle>
    );
}

export default Navbar;
