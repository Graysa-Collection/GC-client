import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';

import style from './productDisplayContainer.module.scss';
import { IProductDisplayContainerProps } from './ProductDisplayContainer.type';

const {
    productDisplayContainer,
    headerContainer,
    heading,
    separator,
    listContainer,
    backgroundColorPink,
    backgroundColorGreen,
    backgroundColorYellow,
    reverseHeader
} = style;

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
                <Button secondary colorGold link={link}>explore all</Button>
            </div>
            <div className={listContainer}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}

export default ProductDisplayContainer;
