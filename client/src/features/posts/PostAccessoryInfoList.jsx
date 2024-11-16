function PostAccessoryInfoList({ compatibility, colors, material, condition }) {
    return (
        <ul className="post__info-list">
            <li className="post__info-item">
                <span>
                    <i className="ri-car-line"></i>
                </span>
                <span>{compatibility}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-palette-line"></i>
                </span>
                <span>{colors.join(",")}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-shape-line"></i>
                </span>
                <span>{material}</span>
            </li>
            <li className="post__info-item">
                <span>
                    <i className="ri-tools-line"></i>
                </span>
                <span>{condition}</span>
            </li>
        </ul>
    );
}

export default PostAccessoryInfoList;
