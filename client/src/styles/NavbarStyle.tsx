import styled from "styled-components";

const NavStyle = styled.nav`
    width: 100%;
    padding: var(--spacing-4) 0;
    background-color: var(--gray-0);
    box-shadow: 0px 10px 13px -3px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    z-index: 99;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > button {
            @media only screen and (max-width: 37.5em) {
                display: none;
            }
        }
    }
`;

export default NavStyle;
