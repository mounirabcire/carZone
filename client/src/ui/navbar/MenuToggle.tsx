import { motion } from "framer-motion";
import styled from "styled-components";

interface MenuToggleProps {
    isOpened: boolean;
    onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuToggleStyle = styled.div`
    padding: 0.8rem 1.2rem;
    color: var(--gray-40);
    border: 1px solid var(--gray-40);
    border-radius: var(--border-radius-small);
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    cursor: pointer;
    z-index: 10;
    transition: color 1s linear, border-color 1s linear;

    &.active {
        border-color: var(--gray-0);
        color: var(--gray-0);

        & .nav__toggle {
            background-color: var(--gray-0);

            &:first-child {
                transform: translateY(4px) rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:last-child {
                transform: translateY(-4px) rotate(-45deg);
            }
        }

        .nav__toggle-text > span:first-child {
            transform: translate(-50%, calc(-50% - 20px));
        }

        .nav__toggle-text > span:last-child {
            transform: translate(-50%, -50%) rotateX(0deg);
        }
    }

    .nav__toggle-custom-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2px;
    }

    .nav__toggle {
        width: 15px;
        height: 2px;
        background-color: var(--gray-40);
        border-radius: var(--border-radius-small);
        display: inline-block;

        &:first-child,
        &:last-child {
            transition: background-color 1s linear,
                transform 1s cubic-bezier(0.87, 0, 0.13, 1);
        }

        &:nth-child(2) {
            transition: opacity 1s cubic-bezier(0.87, 0, 0.13, 1),
                background-color 1s linear;
        }
    }

    .nav__toggle-text {
        width: 45px;
        height: 20px;
        font-weight: 500;
        perspective: 150px;
        position: relative;
        overflow: hidden;

        & > span {
            display: inline-block;
            position: absolute;
            left: 50%;
            top: 50%;
            transition: transform 0.7s cubic-bezier(0.65, 0, 0.35, 1);
        }

        &--vis {
            transform: translate(-50%, -50%);
        }

        &--hid {
            transform: translate(-50%, -50%) rotateX(-90deg);
            transform-origin: center bottom;
        }
    }
`;

function MenuToggle({ isOpened, onOpen }: MenuToggleProps) {
    return (
        <MenuToggleStyle
            className={`${isOpened ? "active" : ""}`}
            onClick={() => onOpen((bool) => !bool)}
        >
            <div className="nav__toggle-custom-icon">
                <span className="nav__toggle nav__toggle--2" />
                <span className="nav__toggle nav__toggle--3" />
                <span className="nav__toggle nav__toggle--1" />
            </div>
            <p className="nav__toggle-text">
                <motion.span className="nav__toggle-text--vis">
                    menu
                </motion.span>
                <motion.span className="nav__toggle-text--hid">
                    close
                </motion.span>
            </p>
        </MenuToggleStyle>
    );
}

export default MenuToggle;
