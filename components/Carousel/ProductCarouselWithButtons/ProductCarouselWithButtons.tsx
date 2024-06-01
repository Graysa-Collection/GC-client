'use client'

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from '../CarouselDotButton';
import { ProductCard } from '@/components/ProductCard';
import { IProductCarouselWithButtonsProps } from './ProductCarouselWithButtons.type';

import prevArrow from '@/assets/icon/prevArrow.svg';
import nextArrow from '@/assets/icon/nextArrow.svg';


import style from './productCarouselWithButtons.module.scss';
import Image from 'next/image';
const {
    embla,
    embla__container,
    embla__slide,
    embla__viewport,
    embla__controls,
    embla__dots,
    embla__dot,
    embla__dot__selected,
    embla__prev,
    embla__next,
    icon
} = style;

const ProductCarousel = ({ slides }: IProductCarouselWithButtonsProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return(
        <div className={embla}>
            <div  className={embla__viewport} ref={emblaRef}>
                <div className={embla__container}>
                    {
                        slides.map((index) => (
                            <div className={embla__slide} key={index}>
                                <ProductCard/>
                            </div>
                        ))
                    }
                </div>
                <div className={embla__controls}>
                    <div className={embla__dots}>
                        {scrollSnaps.map((_, index) => {
                            const DOT_LENGTH = scrollSnaps.length;
                            const DOT_ARRAY = Array.from(Array(DOT_LENGTH).keys())

                            if(!(index % 3)){
                                return(
                                    <>
                                        <DotButton
                                            key={index}
                                            onClick={() => onDotButtonClick(index)}
                                            className={`${embla__dot} ${(DOT_ARRAY.indexOf(index) <= selectedIndex) ? embla__dot__selected : ''}`}
                                        />
                                    </>
                                )
                            }
                            return null;
                        })}
                    </div>
                    <button className={embla__prev} onClick={scrollPrev}>
                        <Image className={icon} src={prevArrow} alt='arrow' height={1000} width={1000} priority/>
                    </button>
                    <button className={embla__next} onClick={scrollNext}>
                        <Image className={icon} src={nextArrow} alt='arrow' height={1000} width={1000} priority/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
