import { CheckoutCart } from '@/components/CheckoutCart';
import style from './cartInfoSection.module.scss';
import { Button } from '@/components/Button';
const {
    cartInfo,
    cartListContainer,
    cartList,
    heading,
    cartSummary,
    summaryHeading,
    list,
    item,
    itemName,
    price,
    btnContainer
} = style;

const CartInfoSection = () => {
    return(
        <section className={cartInfo}>
            <div className={cartListContainer}>
                <h1 className={heading}>your cart</h1>
                <div className={cartList}>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                </div>
            </div>
            <div className={cartSummary}>
                <h1 className={summaryHeading}>order summary</h1>
                <ul className={list}>
                    <li className={item}>
                        <span className={itemName}>item quantity</span>
                        <span className={price}>3</span>
                    </li>
                    <li className={item}>
                        <span className={itemName}>item price(s)</span>
                        <span className={price}>150$</span>
                    </li>
                    <li className={item}>
                        <span className={itemName}>delivery fee</span>
                        <span className={price}>00.00$</span>
                    </li>
                    <li className={item}>
                        <span className={itemName}>sales tax</span>
                        <span className={price}>-</span>
                    </li>
                    <li className={item}>
                        <span className={itemName}>total</span>
                        <span className={price}>150$</span>
                    </li>
                </ul>
                <div className={btnContainer}>
                    <Button primary>check out</Button>
                </div>
            </div>
        </section>
    );
};

export default CartInfoSection;
