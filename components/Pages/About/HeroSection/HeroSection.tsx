
import Image from 'next/image';

import heroImageOne from '@/assets/images/about/heroImageThree.svg'
import heroImageTwo from '@/assets/images/about/heroImageTwo.svg'
import heroImageThree from '@/assets/images/about/heroImageOne.svg'
import gcLogo from '@/assets/logo/gc-logo-single-white.svg';

import style from './heroSection.module.scss';
import { Button } from '@/components/Button';
const {
    heroSection,
    bgImage,
    imageContainer,
    img,
    contentContainer,
    logoContainer,
    logo,
    description,
    mask
} = style;

const HeroSection = () => {
    return(
        <section className={heroSection}>
            <div className={bgImage}>
                <div className={imageContainer}>
                    <Image className={img} src={heroImageOne} alt='hero img one' priority/>
                </div>
                <div className={imageContainer}>
                    <Image className={img} src={heroImageTwo} alt='hero img two' priority/>
                </div>
                <div className={imageContainer}>
                    <Image className={img} src={heroImageThree} alt='hero img three' priority/>
                </div>
            </div>
            <div className={mask}/>
            <div className={contentContainer}>
                <div className={logoContainer}>
                    <Image className={logo} src={gcLogo} alt='gc logo' priority/>
                </div>
                <p className={description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Button link='#' secondary>shop now</Button>
            </div>
        </section>
    );
};

export default HeroSection;
