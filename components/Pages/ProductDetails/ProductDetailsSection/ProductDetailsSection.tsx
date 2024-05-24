import Image from 'next/image';

import imageOne from '@/assets/images/product-detail/img-1.png'
import imageTwo from '@/assets/images/product-detail/img-2.png'
import imageThree from '@/assets/images/product-detail/img-3.png'
import imageFour from '@/assets/images/product-detail/img-4.png'
import imageFive from '@/assets/images/product-detail/img-5.png'

import style from './productDetailsSection.module.scss';
import { Button } from '@/components/Button';
const {
    productDetailsSection,
    imageContainer,
    contentContainer,
    heading,
    price,
    sizeContainer,
    colorContainer,
    btnContainer,
    detailContainer,
    description,
    border,
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive
} = style;

const ProductDetailsSection = () => {
    return(
        <section className={productDetailsSection}>
            <div className={imageContainer}>
                <Image src={imageOne} className={imgOne} height={1000} width={1000} alt='product img' priority/>
                <Image src={imageTwo} className={imgTwo} height={1000} width={1000} alt='product img' priority/>
                <Image src={imageThree} className={imgThree} height={1000} width={1000} alt='product img' priority/>
                <Image src={imageFour} className={imgFour} height={1000} width={1000} alt='product img' priority/>
                <Image src={imageFive} className={imgFive} height={1000} width={1000} alt='product img' priority/>
            </div>
            <div className={contentContainer}>
                <h1 className={heading}>mint green set</h1>
                <span className={price}>$49.99</span>
                <div className={sizeContainer}>
                    <p>size</p>
                    <span>s</span>
                    <span>m</span>
                    <span>l</span>
                    <span>xl</span>
                    <span>2xl</span>
                </div>
                <div className={colorContainer}>
                    <p>color</p>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={btnContainer}>
                    <Button link='#' secondary>add to cart</Button>
                </div>
                <div className={detailContainer}>
                    <p className={heading}>details</p>
                    <span className={border}></span>
                    <p className={description}>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsSection;
