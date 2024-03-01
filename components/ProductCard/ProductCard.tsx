import Image from 'next/image';

import imgOne from '@/assets/images/Mask Group 12.png';
import imgTwo from '@/assets/images/Mask Group 4.png';
import imgThree from '@/assets/images/Mask Group 5.png';
import imgFour from '@/assets/images/Mask Group 6.png';

import style from './productCard.module.scss';

const {
    productCard,
    imgContainer,
    img,
    title,
    price,
    addToCard
} = style;

const ProductCard = () => {
    return(
        <div className={productCard}>
            <div className={imgContainer}>
                <Image className={img} src={imgOne} alt='product image' priority/>
            </div>
            <h4 className={title}>black crop top</h4>
            <span className={price}>$25.00</span>
            <button className={addToCard}>add to card</button>
        </div>
    );
};

export default ProductCard;
