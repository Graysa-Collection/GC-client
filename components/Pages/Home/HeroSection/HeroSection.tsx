import Image from 'next/image';

import { Button } from '@/components';

import imageOne from '@/assets/images/Image 2.png';
import style from './heroSection.module.scss';

const {
    heroSection,
    sliderContainer,
    img,
    content,
    heading,
    text,
    btn
} = style;

const HeroSection = () => {
    return(
        <section className={heroSection}>
            <div className={sliderContainer}>
                <Image className={img} src={imageOne} alt='slider image' priority/>
            </div>
            <div className={content}>
                <h1 className={heading}>graysa collection</h1>
                <p className={text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Button secondary>shop now</Button>
            </div>
        </section>
    )
}

export default HeroSection;
