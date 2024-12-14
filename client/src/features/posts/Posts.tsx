import PostsContainerStyled from "../../styles/PostsStyle";
import PostImage from "./PostImage";
import PostMainInfo from "./PostMainInfo";
import PostSubInfo from "./PostSubInfo";

type PostCategory = "rent" | "sell" | "accessory";
type FuelType = "petrol" | "diesel" | "hybrid" | "electric";
type Transmission = "automatic" | "manual";
type Currency = "USD" | "EUR" | "DZD";

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

interface Price {
    newPrice: number | null;
    oldPrice: number;
}

interface PostsProps {
    posts: {
        postImage: string;
        postName: string;
        postCategory: PostCategory;
        PostMainDetails: PostMainDetails;
        price: Price;
        currency: Currency;
        saved: number;
        isSaved: boolean;
    }[];
}

interface PostProps {
    post: {
        postImage: string;
        postName: string;
        postCategory: PostCategory;
        PostMainDetails: PostMainDetails;
        price: Price;
        currency: Currency;
        saved: number;
        isSaved: boolean;
    };
}

function Posts({ posts }: PostsProps) {
    if (!posts.length) return null;

    return (
        <PostsContainerStyled>
            {posts.map((post, idx) => (
                <Post key={idx} post={post} />
            ))}
        </PostsContainerStyled>
    );
}

function Post({ post }: PostProps) {
    const {
        postImage,
        postName,
        postCategory,
        PostMainDetails,
        price,
        currency,
        isSaved,
        saved,
    } = post;

    return (
        <div className="post">
            <PostImage
                postImage={postImage}
                postName={postName}
                isSaved={isSaved}
                savedCount={saved}
            />

            <PostMainInfo
                details={PostMainDetails}
                postCategory={postCategory}
                postName={postName}
            />

            <hr className="post__separator" />

            <PostSubInfo currency={currency} price={price} />
        </div>
    );
}

export default Posts;
