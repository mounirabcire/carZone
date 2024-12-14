type FuelType = "petrol" | "diesel" | "hybrid" | "electric";
type Transmission = "automatic" | "manual";

interface SellDetails {
    details: {
        year: string;
        transmission: Transmission;
        fuel: FuelType;
        mileage: string;
    };
}

function PostSellInfoList({ details }: SellDetails) {
    const { year, transmission, fuel, mileage } = details;

    return (
        <ul className="post__info-list">
            <li className="post__info-item">
                <span>
                    <i className="ri-calendar-line"></i>
                </span>
                <span>{year}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-sound-module-line"></i>
                </span>
                <span>{transmission}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-charging-pile-2-line"></i>
                </span>
                <span>{fuel}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-speed-up-line"></i>
                </span>
                <span>{mileage}</span>
            </li>
        </ul>
    );
}

export default PostSellInfoList;
