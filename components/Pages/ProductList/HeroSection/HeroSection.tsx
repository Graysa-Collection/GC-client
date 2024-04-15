import Image from 'next/image';

import bgImage from '@/assets/images/Mask Group 28.png'

import { IHeroSection } from './HeroSection.type';
import style from './heroSection.module.scss';

const {
    heroSection,
    contentContainer,
    heading,
    paragraph,
    bgImgContainer,
    img,
    mask,
    maskPrimary,
    maskSecondary
} = style;

const HeroSection = ({ title, description, primary, secondary } : IHeroSection) => {
    return(
        <section className={heroSection}>
            <div className={contentContainer}>
                <h1 className={heading}>{title}</h1>
                <p className={paragraph}>{description}</p>
            </div>
            <div className={bgImgContainer}>
                <div className={`${mask} ${primary ? maskPrimary : secondary ? maskSecondary : ''}`}/>
                <Image className={img} src={bgImage} alt='background image' priority/>
            </div>
        </section>
    );
};

export default HeroSection;
