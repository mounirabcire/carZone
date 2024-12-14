import styled from "styled-components";
import Button from "../../ui/Button";
import { currencyFormat } from "../../utils/utils";

type Price = {
    newPrice: number | null;
    oldPrice: number;
};
type Currency = "USD" | "EUR" | "DZD";

interface PostSubInfoProps {
    currency: Currency;
    price: Price;
}

const PostSubInfoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .post__price {
        display: flex;
        align-items: end;
        gap: var(--spacing-2);

        &--new {
            color: var(--gray-40);
            font-size: var(--font-size-md);
            font-weight: bold;
        }

        &--old {
            font-size: var(--font-size-base);
            position: relative;
            font-weight: 500;

            &::after {
                content: "";
                background-color: var(--gray-35);
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 100%;
                height: 1px;
            }
        }
    }
`;

function PostSubInfo({ currency, price }: PostSubInfoProps) {
    const oldPrice = currencyFormat("en-US", currency, price.oldPrice);
    const newPrice = currencyFormat("en-US", currency, price.newPrice);
    return (
        <PostSubInfoStyle>
            <div className="post__price">
                {newPrice ? (
                    <>
                        <p className="post__price--new">
                            {currencyFormat("en-US", currency, price.newPrice)}
                        </p>
                        <p className="post__price--old">{oldPrice}</p>
                    </>
                ) : (
                    <p className="post__price--new">{oldPrice}</p>
                )}
            </div>

            <Button $size="small">Details</Button>
        </PostSubInfoStyle>
    );
}

export default PostSubInfo;
