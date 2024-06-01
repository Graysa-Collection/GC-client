import { ProductCarouselWithButtons } from '../Carousel';
import style from './youMayLike.module.scss';

const {
    youMayLike,
    productContainer,
    heading,
    headingContainer
} = style;

const YouMayLike = () => {
    const SLIDE = 12
    const SLIDE_ARRAY = Array.from(Array(SLIDE).keys())

    return(
        <section className={youMayLike}>
            <div className={headingContainer}>
                <h1 className={heading}>You May Also Like</h1>
            </div>
            <div className={productContainer}>
                <ProductCarouselWithButtons slides={SLIDE_ARRAY} addDotButton/>
            </div>
        </section>
    )
}

export default YouMayLike;
