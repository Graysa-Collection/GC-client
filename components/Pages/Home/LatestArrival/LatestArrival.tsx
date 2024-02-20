import { ProductDisplayContainer } from '@/components';
import style from './latestArrival.module.scss';

const {
    latestArrival,
    headingContainer,
    heading,
} = style;

const LatestArrival = () => {
    return(
        <section className={latestArrival}>
            <div className={headingContainer}>
                <h1 className={heading}>Latest arrival</h1>
            </div>
            <ProductDisplayContainer title='apparel' link='#' bgColor='pink'/>
            <ProductDisplayContainer title='beauty & care' link='#' bgColor='green' reverse/>
            <ProductDisplayContainer title='books' link='#' bgColor='orange'/>
        </section>
    );
}

export default LatestArrival;
