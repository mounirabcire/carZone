import styled from "styled-components";

const LogoStyle = styled.div`
    display: flex;
    align-items: center;
    gap: .5px;
    color: var(--gray-40);
    z-index: 10;

    .nav__char-box {
        display: inline-block;
        color: var(--gray-40);
        font-size: 30px;
        font-weight: bold;
    }
`;

const logoCharacters = ["c", "a", "r", "Z", "o", "n", "e"];

function Logo() {
    return (
        <LogoStyle>
            {logoCharacters.map((char, idx) => (
                <span key={idx} className="nav__char-box">
                    {char}
                </span>
            ))}
        </LogoStyle>
    );
}

export default Logo;
