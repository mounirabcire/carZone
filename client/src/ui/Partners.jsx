import { PartnersContainerStyled, PartnerStyled } from "../styles/PartnerStyle";

// FIXME: The carousel is not working properly

function Partners({ partners }) {
    if (!partners) return;

    return (
        <PartnersContainerStyled>
            <div className="slider">
                {partners.map((partner, idx) => (
                    <Partner key={idx} partner={partner} />
                ))}
            </div>
            <div className="slider">
                {partners.map((partner, idx) => (
                    <Partner key={idx} partner={partner} />
                ))}
            </div>
        </PartnersContainerStyled>
    );
}

function Partner({ partner: { fullName, profession, img } }) {
    return (
        <PartnerStyled>
            <div className="partner__info">
                <h6 className="partner__fullName">{fullName}</h6>
                <p className="partner__profession">{profession}</p>
            </div>
            <img src={img} alt={profession} className="partner__pic" />
        </PartnerStyled>
    );
}

export default Partners;
