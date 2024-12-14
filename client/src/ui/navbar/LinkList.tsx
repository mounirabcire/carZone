import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinkListStyle = styled.ul`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .bg-overlay {
        border-radius: var(--border-radius-small);
        background-color: var(--blue-30);
        position: absolute;
        left: 12px;
        top: 0;
        width: 3px;
        transition: top 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            height 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 20;
    }

    .nav__item {
        padding-left: 2.4rem;
        transition: padding 0.2s linear;

        &:hover {
            padding-left: 3.2rem;
        }
    }

    .nav__link:visited,
    .nav__link:link {
        font-size: var(--font-size-xl);
        transition: color 0.65s cubic-bezier(0.16, 1, 0.3, 1);

        &.active {
            color: var(--blue-30);
        }

        @media only screen and (max-width: 37.5em) {
            font-size: var(--font-size-lg);
        }
    }
`;

const childVariant = {
    initial: { x: -80, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.9, ease: [0.67, 0, 0.24, 1] },
    },
    exit: {
        x: -80,
        opacity: 0,
        transition: { duration: 0.7, ease: [0.67, 0, 0.24, 1] },
    },
};

const links = [
    { path: "/", label: "Home" },
    { path: "marketplace", label: "Marketplace" },
    { path: "gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
];

interface LinkListProps {
    isOpened: boolean;
    onClose: () => void;
}

interface LinkItemProps {
    onClose: () => void;
    link: { path: string; label: string };
    onUpdateOverlayPos: (target: HTMLAnchorElement) => void;
}

function LinkList({ isOpened, onClose }: LinkListProps) {
    const listContainer = useRef<HTMLUListElement | null>(null);
    const bgOverlay = useRef<HTMLDivElement | null>(null);

    const updateOverlayPosition = (childElement: HTMLAnchorElement) => {
        if (!listContainer.current || !bgOverlay.current || !childElement)
            return;

        const { top: parentTopPos } =
            listContainer.current.getBoundingClientRect();
        const { top: childTopPos, height: childHeight } =
            childElement.getBoundingClientRect();

        const topPosition = childTopPos - parentTopPos;

        bgOverlay.current.style.top = `${topPosition}px`;
        bgOverlay.current.style.height = `${childHeight}px`;
    };

    useEffect(() => {
        let set: ReturnType<typeof setTimeout>;
        if (isOpened && listContainer.current) {
            // Find the active link element inside the list container
            const activeChild = Array.from(
                listContainer.current.querySelectorAll(".nav__link")
            ).find((element) =>
                element.classList.contains("active")
            ) as HTMLAnchorElement;

            set = setTimeout(() => {
                if (activeChild) updateOverlayPosition(activeChild);
            }, 0);
        }

        return () => clearTimeout(set);
    }, [isOpened]);

    return (
        <LinkListStyle ref={listContainer}>
            {links.map((link) => (
                <LinkItem
                    key={link.label}
                    link={link}
                    onClose={onClose}
                    onUpdateOverlayPos={updateOverlayPosition}
                />
            ))}
            <motion.div
                variants={childVariant}
                className="bg-overlay"
                ref={bgOverlay}
            />
        </LinkListStyle>
    );
}

function LinkItem({ link, onClose, onUpdateOverlayPos }: LinkItemProps) {
    const { path, label } = link;

    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        onUpdateOverlayPos(event.target as HTMLAnchorElement);
        setTimeout(() => {
            onClose();
        }, 350);
    };

    return (
        <motion.li className="nav__item" variants={childVariant}>
            <NavLink
                to={path}
                className="nav__link"
                onClick={(e) => handleClick(e)}
            >
                {label}
            </NavLink>
        </motion.li>
    );
}

export default LinkList;
