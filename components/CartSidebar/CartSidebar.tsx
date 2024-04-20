import Image from 'next/image';

import { Button } from '../Button';

import crossIcon from '@/assets/icon/cross-icon.svg';

import style from './cartSidebar.module.scss';
import { CheckoutCart } from '../CheckoutCart';
const {
    cartSidebar,
    cartContainer,
    header,
    progressBar,
    progress,
    heading,
    checkoutBtnContainer,
    totalPrice,
    note,
    cartList,
    shippingPrice,
    crossBtn,
    icon
} = style;

const CartSidebar = () => {
    return(
        <div className={cartSidebar}>
            <div className={cartContainer}>
                <div className={header}>
                    <p className={shippingPrice}>Add 50$ for Free Shipping!</p>
                    <div className={progressBar}>
                        <span className={progress}></span>
                    </div>
                </div>
                <h3 className={heading}>your cart</h3>
                <div className={cartList}>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                    <CheckoutCart/>
                </div>
                <div className={checkoutBtnContainer}>
                    <h4 className={totalPrice}>Subtotal: 100$</h4>
                    <span className={note}>Shipping & Taxes will be calculated at Check-out.</span>
                    <Button primary>check out</Button>
                </div>
            </div>
            <button className={crossBtn}><Image className={icon} src={crossIcon} alt='cross icon' height={1000} width={1000} priority/></button>
        </div>
    );
};

export default CartSidebar;
