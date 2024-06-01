'use client'

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from '../CarouselDotButton';

import imageOne from '@/assets/images/Image 2.png';
import imageTwo from '@/assets/images/apparel.svg';
import imageThree from '@/assets/images/beauty-and-care.svg';

import style from './ImageCarousel.module.scss';
const {
    embla,
    embla__container,
    embla__slide,
    embla__controls,
    embla__dots,
    embla__viewport,
    embla__dot,
    embla__dot__selected,
    img
} = style;

const ImageCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

    return(
        <div className={embla}>
            <div className={embla__viewport} ref={emblaRef}>
                <div className={embla__container}>
                    <div className={embla__slide}>
                        <Image className={img} src={imageOne} alt='slider image' priority/>
                    </div>
                    <div className={embla__slide}>
                        <Image className={img} src={imageTwo} alt='slider image' priority/>
                    </div>
                    <div className={embla__slide}>
                        <Image className={img} src={imageThree} alt='slider image' priority/>
                    </div>
                </div>
            </div>
            <div className={embla__controls}>
                <div className={embla__dots}>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`${embla__dot} ${index === selectedIndex ? embla__dot__selected : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
