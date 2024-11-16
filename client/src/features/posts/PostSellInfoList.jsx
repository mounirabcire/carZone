function PostSellInfoList({ year, transmission, fuel, mileage }) {
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
