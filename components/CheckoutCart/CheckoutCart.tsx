import Image from 'next/image';

import dummyImg from '@/assets/images/product-detail/img-1.png';
import deleteIcon from '@/assets/icon/delete-icon.svg';

import style from './checkoutCart.module.scss';
const {
    cart,
    imgContainer,
    img,
    contentContainer,
    content,
    title,
    price,
    colorSize,
    color,
    border,
    size,
    btnContainer,
    deleteBtn,
    icon,
    quantity,
    decrease,
    number,
    increase

} = style;

const CheckoutCart = () => {
    return(
        <div className={cart}>
            <div className={imgContainer}>
                <Image className={img} src={dummyImg} alt='product img' height={1000} width={1000} priority/>
            </div>
            <div className={contentContainer}>
                <div className={content}>
                    <h3 className={title}>MINT GREEN SET</h3>
                    <p className={price}>$49.99</p>
                    <p className={colorSize}>
                        <span className={color}>Olive</span>
                        <span className={border}>|</span>
                        <span className={size}>Size: L</span>
                    </p>
                </div>
                <div className={btnContainer}>
                    <button className={deleteBtn}><Image className={icon} src={deleteIcon} alt='delete icon' priority/></button>
                    <div className={quantity}>
                        <span className={decrease}>-</span>
                        <span className={number}>1000</span>
                        <span className={increase}>+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;
