import PostCategory from "./PostCategory";
import PostSellInfoList from "./PostSellInfoList";
import PostAccessoryInfoList from "./PostAccessoryInfoList";
import PostRentInfoList from "./PostRentInfoList";

function PostMainInfo({ postName, postCategorie, details }) {
    return (
        <div className="post__info--main">
            <div className="post__info--top">
                <h4 className="post__name">{postName}</h4>
                <PostCategory postCategory={postCategorie} />
            </div>
            <div className="post__info--bottom">
                {postCategorie === "sell" && (
                    <PostSellInfoList
                        year={details.year}
                        transmission={details.transmission}
                        fuel={details.fuel}
                        mileage={details.mileage}
                    />
                )}

                {postCategorie === "accessory" && (
                    <PostAccessoryInfoList
                        compatibility={details.compatibility}
                        colors={details.colors}
                        material={details.material}
                        condition={details.condition}
                    />
                )}
                {postCategorie === "rent" && (
                    <PostRentInfoList
                        fuel={details.fuel}
                        rentalPeriod={details.rentalPeriod}
                        seatingCapacity={details.seatingCapacity}
                        transmission={details.transmission}
                    />
                )}
            </div>
        </div>
    );
}

export default PostMainInfo;
