import styled from "styled-components";

const LogoStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--gray-40);
    z-index: 10;

    .nav__car-box {
        color: var(--gray-40);
        display: inline-block;
    }
`;

const logoCharacters = [
    { path: "/assets/images/logo/c.svg", char: "c" },
    { path: "/assets/images/logo/a.svg", char: "a" },
    { path: "/assets/images/logo/r.svg", char: "r" },
    { path: "/assets/images/logo/Z.svg", char: "Z" },
    { path: "/assets/images/logo/o.svg", char: "o" },
    { path: "/assets/images/logo/n.svg", char: "n" },
    { path: "/assets/images/logo/e.svg", char: "e" },
];

function Logo() {
    return (
        <LogoStyle>
            {logoCharacters.map(({ char, path }, idx) => (
                <span key={idx} className="nav__char-box">
                    <img
                        src={path}
                        alt="Logo Character"
                        className={`nav__char nav__char__${char}`}
                    />
                </span>
            ))}
        </LogoStyle>
    );
}

export default Logo;
