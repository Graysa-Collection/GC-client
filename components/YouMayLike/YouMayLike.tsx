import { ProductCard } from '../ProductCard';
import style from './youMayLike.module.scss';

const {
    youMayLike,
    productContainer,
    heading,
    headingContainer
} = style;

const YouMayLike = () => {
    return(
        <section className={youMayLike}>
            <div className={headingContainer}>
                <h1 className={heading}>You May Also Like</h1>
            </div>
            <div className={productContainer}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    )
}

export default YouMayLike;
