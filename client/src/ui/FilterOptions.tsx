import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import FilterOptionsContainer from "../styles/FilterOptionStyle";
import { setPostOption } from "../app/features/homePostOptionSlice";

type HomePostOptionState = "view all" | "cars" | "accessories";
interface FilterOptionProps {
    options: string[];
}

function FilterOptions({ options }: FilterOptionProps) {
    const [activeOption, setActiveOption] = useState(0);
    const dispatch = useAppDispatch();

    const filterContainer = useRef<HTMLDivElement | null>(null);
    const bgOverlay = useRef<HTMLDivElement | null>(null);

    const updateOverlayPosition = (childElement: HTMLLIElement) => {
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

    const handleActiveOption = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        id: number
    ) => {
        setActiveOption(id);
        updateOverlayPosition(event.target as HTMLLIElement);
        dispatch(
            setPostOption(
                event.currentTarget.textContent as HomePostOptionState
            )
        );
    };

    useEffect(() => {
        const firstChild = filterContainer.current?.querySelector(
            ".filter-options__item"
        ) as HTMLLIElement;
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
