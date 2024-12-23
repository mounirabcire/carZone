import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    @media (min-width: 40em) {
        max-width: 720px;
    }

    @media (min-width: 48em) {
        max-width: 864px;
    }

    @media (min-width: 64em) {
        max-width: 1152px;
    }

    @media (min-width: 80em) {
        max-width: 1440px;
    }

    @media (min-width: 96em) {
        max-width: 1728px;
    }
`;

export default Container;
