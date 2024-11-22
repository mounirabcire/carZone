import Button from "../../ui/Button";
import { currencyFormat } from "../../utils/utils";

function PostSubInfo({ currency, price }) {
    const newPrice = currencyFormat("en-US", currency, price.newPrice);
    const oldPrice = currencyFormat("en-US", currency, price.oldPrice);

    return (
        <div className="post__info--sub">
            <div className="post__price">
                <p className="post__price--new">{newPrice}</p>
                <p className="post__price--old">{oldPrice}</p>
            </div>

            <Button $size="small">
                Details
            </Button>
        </div>
    );
}

export default PostSubInfo;
