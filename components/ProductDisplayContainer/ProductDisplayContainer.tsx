import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';

import style from './productDisplayContainer.module.scss';
import { IProductDisplayContainerProps } from './ProductDisplayContainer.type';
import ProductCarousel from '../Carousel/ProductCarousel/ProductCarousel';

const {
    productDisplayContainer,
    headerContainer,
    heading,
    separator,
    listContainer,
    backgroundColorPink,
    backgroundColorGreen,
    backgroundColorYellow,
    reverseHeader,
    btnContainerDesktop,
    btnContainerMobile
} = style;

const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ProductDisplayContainer = ({ title, link, bgColor, reverse }: IProductDisplayContainerProps) => {
    return(
        <div className={bgColor == 'pink' ? 
            `${backgroundColorPink} ${productDisplayContainer}` : bgColor == 'green' ? 
            `${backgroundColorGreen} ${productDisplayContainer}` : bgColor == 'orange' ? 
            `${backgroundColorYellow} ${productDisplayContainer}` : productDisplayContainer}
        >
            <div className={reverse ? `${headerContainer} ${reverseHeader}` : headerContainer}>
                <h3 className={heading}>{title}</h3>
                <span className={separator}/>
                <div className={btnContainerDesktop}>
                    <Button secondary colorGold link={link}>explore all</Button>
                </div>
            </div>
            <div className={listContainer}>
                <ProductCarousel slides={SLIDES}/>
            </div>
            <div className={btnContainerMobile}>
                <Button secondary colorGold link={link}>explore all</Button>
            </div>
        </div>
    );
}

export default ProductDisplayContainer;
