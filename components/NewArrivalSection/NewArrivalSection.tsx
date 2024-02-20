import Image from 'next/image';
import { Button } from '@/components/Button';

import imageOne from '@/assets/images/Mask Group 30.png';

import style from './newArrivalSection.module.scss';

const {
    newArrivalSection,
    newArrivalProduct,
    heading,
    title,
    contentContainer,
    imgContainer,
    img
} = style;

const NewArrivalSection = () => {
    return(
        <section className={newArrivalSection}>
            <div className={newArrivalProduct}>
                <div className={contentContainer}>
                    <h4 className={heading}>new arrival</h4>
                    <h3 className={title}>limited edition skin care bundle</h3>
                    <Button secondary colorDark>buy now</Button>
                </div>
                <div className={imgContainer}>
                    <Image className={img} src={imageOne} alt='new arrival image' priority/>
                </div>
            </div>
        </section>
    );
};

export default NewArrivalSection;
