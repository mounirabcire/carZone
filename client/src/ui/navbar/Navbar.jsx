import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavStyle from "../../styles/NavbarStyle";
import Button from "../Button";
import Container from "../Container";
import Logo from "../Logo";
import MenuToggle from "./MenuToggle";
import Menu from "./Menu";

function Navbar() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <NavStyle>
                <Container>
                    <MenuToggle isOpened={isOpened} onOpen={setIsOpened} />
                    <Logo />
                    <Button>Get Access</Button>
                </Container>

                <AnimatePresence mode="wait">
                    {isOpened && (
                        <Menu
                            isOpened={isOpened}
                            onClose={() => setIsOpened(false)}
                        />
                    )}
                </AnimatePresence>
            </NavStyle>
        </>
    );
}

export default Navbar;
