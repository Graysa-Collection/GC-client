'use client'

import useEmblaCarousel from 'embla-carousel-react';
import { ProductCard } from '@/components/ProductCard';
import { IProductCarouselProps } from './ProductCarousel.type';

import style from './productCarousel.module.scss';
const {
    embla,
    embla__container,
    embla__slide
} = style;

const ProductCarousel = ({ slides }: IProductCarouselProps) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    return(
        <div className={embla} ref={emblaRef}>
            <div className={embla__container}>
                {
                    slides.map((index) => (
                        <div className={embla__slide} key={index}>
                            <ProductCard/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductCarousel;
