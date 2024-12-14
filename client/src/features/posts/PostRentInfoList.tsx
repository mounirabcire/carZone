type FuelType = "petrol" | "diesel" | "hybrid" | "electric";
type Transmission = "automatic" | "manual";

interface RentDetails {
    details: {
        transmission: Transmission;
        fuel: FuelType;
        rentalPeriod: "per day" | "per month" | "per week" | "per hour";
        seatingCapacity: string;
    };
}

function PostRentInfoList({ details }: RentDetails) {
    const { rentalPeriod, seatingCapacity, fuel, transmission } = details;

    return (
        <ul className="post__info-list">
            <li className="post__info-item">
                <span>
                    <i className="ri-timer-line"></i>
                </span>
                <span>{rentalPeriod}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-user-3-line"></i>
                </span>
                <span>{seatingCapacity}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-charging-pile-2-line"></i>
                </span>
                <span>{fuel}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-settings-2-line"></i>
                </span>
                <span>{transmission}</span>
            </li>
        </ul>
    );
}

export default PostRentInfoList;
