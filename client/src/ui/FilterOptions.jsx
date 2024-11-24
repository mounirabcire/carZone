import { useEffect, useRef, useState } from "react";
import FilterOptionsContainer from "../styles/FilterOptionStyle";

function FilterOptions({ options = [] }) {
    const [activeOption, setActiveOption] = useState(0);

    const filterContainer = useRef(null);
    const bgOverlay = useRef(null);

    const updateOverlayPosition = (childElement) => {
        if (!filterContainer.current || !bgOverlay.current || !childElement)
            return;

        const { left: parentLeftPos } =
            filterContainer.current.getBoundingClientRect();
        const { left: childLeftPos, width: childWidth } =
            childElement.getBoundingClientRect();

        const leftPosition = childLeftPos - parentLeftPos;

        bgOverlay.current.style.left = `${leftPosition - 8}px`;
        bgOverlay.current.style.width = `${childWidth + 16}px`;
    };

    const handleActiveOption = (event, id) => {
        setActiveOption(id);
        updateOverlayPosition(event.target);
    };

    useEffect(() => {
        const firstChild = filterContainer.current?.querySelector(
            ".filter-options__item"
        );
        updateOverlayPosition(firstChild);
    }, []);

    if (!options.length) return null;

    return (
        <FilterOptionsContainer ref={filterContainer}>
            <ul className="filter-options__list">
                {options.map((opt, idx) => (
                    <li
                        key={idx}
                        className={`filter-options__item ${
                            activeOption === idx ? "active" : ""
                        }`}
                        onClick={(e) => handleActiveOption(e, idx)}
                    >
                        {opt}
                    </li>
                ))}
            </ul>
            <div className="bg-overlay" ref={bgOverlay} />
        </FilterOptionsContainer>
    );
}

export default FilterOptions;
