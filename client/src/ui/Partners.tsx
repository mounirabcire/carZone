import PartnersContainerStyled from "../styles/PartnersStyle";
import LazyImg from "./LazyImg";

interface PartnersProps {
    partners: { fullName: string; profession: string; img: string }[];
}

interface PartnerProps {
    partner: { fullName: string; profession: string; img: string };
}

function Partners({ partners }: PartnersProps) {
    if (!partners.length) return null;

    return (
        <PartnersContainerStyled>
            <div className="slider">
                {partners.map((partner) => (
                    <Partner key={partner.fullName} partner={partner} />
                ))}
            </div>
            <div className="slider">
                {partners.map((partner) => (
                    <Partner key={partner.fullName} partner={partner} />
                ))}
            </div>
        </PartnersContainerStyled>
    );
}

function Partner({ partner }: PartnerProps) {
    const { fullName, profession, img } = partner;

    return (
        <div className="partner">
            <div className="partner__info">
                <h6 className="partner__fullName">{fullName}</h6>
                <p className="partner__profession">{profession}</p>
            </div>
            <LazyImg src={img} alt={profession} className="partner__pic" />
        </div>
    );
}

export default Partners;
