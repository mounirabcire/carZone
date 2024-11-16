function PostRentInfoList({
    rentalPeriod,
    seatingCapacity,
    fuel,
    transmission,
}) {
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
