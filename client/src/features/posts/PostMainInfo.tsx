import PostCategory from "./PostCategory";
import PostSellInfoList from "./PostSellInfoList";
import PostAccessoryInfoList from "./PostAccessoryInfoList";
import PostRentInfoList from "./PostRentInfoList";
import styled from "styled-components";

type PostCategoryType = "rent" | "sell" | "accessories";
type FuelType = "petrol" | "diesel" | "hybrid" | "electric";
type Transmission = "automatic" | "manual";

interface RentDetails {
    transmission: Transmission;
    fuel: FuelType;
    rentalPeriod: "per day" | "per month" | "per week" | "per hour";
    seatingCapacity: string;
}

interface SellDetails {
    year: string;
    transmission: Transmission;
    fuel: FuelType;
    mileage: string;
}

interface AccessoryDetails {
    compatibility: string;
    colors: string[];
    material: string;
    condition: "new" | "used";
}

type PostMainDetails = RentDetails | SellDetails | AccessoryDetails;

interface PostMainInfoProps {
    postName: string;
    postCategory: PostCategoryType;
    details: PostMainDetails;
}

const PostMainInfoStyled = styled.div`
    & .post__info--top {
        margin-bottom: var(--spacing-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-2);
    }

    & .post__name {
        font-size: var(--font-size-base);
    }

    & .post__info-list {
        font-size: var(--font-size-base);
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        grid-template-rows: repeat(2, auto);
        gap: var(--spacing-1);
    }

    & .post__info-item {
        display: flex;
        align-items: start;
        gap: var(--spacing-2);

        & > span:first-child {
            color: var(--blue-25);
            font-weight: 500;
            font-size: 14px;
        }

        & > span:last-child {
            font-size: var(--font-size-tiny);
            font-weight: 600;
        }
    }
`;

function PostMainInfo({ postName, postCategory, details }: PostMainInfoProps) {
    return (
        <PostMainInfoStyled>
            <div className="post__info--top">
                <h4 className="post__name">{postName}</h4>
                <PostCategory postCategory={postCategory} />
            </div>
            <div className="post__info--bottom">
                {postCategory === "sell" && (
                    <PostSellInfoList details={details as SellDetails} />
                )}

                {postCategory === "accessories" && (
                    <PostAccessoryInfoList
                        details={details as AccessoryDetails}
                    />
                )}

                {postCategory === "rent" && (
                    <PostRentInfoList details={details as RentDetails} />
                )}
            </div>
        </PostMainInfoStyled>
    );
}

export default PostMainInfo;
