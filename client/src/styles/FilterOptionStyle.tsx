import styled from "styled-components";

const FilterOptionsContainer = styled.div`
    position: relative;

    & .filter-options__list {
        padding: 12px 16px;
        text-transform: capitalize;
        font-size: var(--font-size-tiny);
        font-weight: 600;
        border: var(--border-gray-1);
        border-radius: var(--border-radius-large);
        display: flex;
        align-items: center;
        gap: var(--spacing-6);

        & .filter-options__item {
            cursor: pointer;
            transition: color 0.65s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        & .filter-options__item.active {
            color: #fff;
        }
    }

    & .bg-overlay {
        width: 0;
        height: calc(100% - 12px);
        background-color: var(--gray-40);
        border-radius: var(--border-radius-xl);
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: -1;
        transition: left 0.65s cubic-bezier(0.34, 1.56, 0.64, 1),
            width 0.65s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
`;

export default FilterOptionsContainer;
