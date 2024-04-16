import Image from 'next/image';

import apparelImage from '@/assets/images/about/apparel.svg'

import style from './contentTypeOne.module.scss';
import { Button } from '@/components/Button';
const {
    contentTypeOne,
    imageContainer,
    img,
    contentContainer,
    heading,
    description,
    btnContainer
} = style;

const ContentTypeOne = () => {
    return(
        <div className={contentTypeOne}>
            <div className={imageContainer}>
                <Image className={img} src={apparelImage} alt='apparel' priority/>
            </div>
            <div className={contentContainer}>
                <h1 className={heading}>apparel</h1>
                <p className={description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                </p>
                <div className={btnContainer}>
                    <Button secondary>explore all</Button>
                </div>
            </div>
        </div>
    );
};

export default ContentTypeOne;
