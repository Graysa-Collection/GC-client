import Image from 'next/image';

import dummyImage from '@/assets/images/dummy.svg';
import beautyImage from '@/assets/images/about/beautyAndCare.svg'
import booksImage from '@/assets/images/about/books.svg';

import { IContentTypeTwoProps } from './ContentTypeTwo.type';

import style from './contentTypeTwo.module.scss';
import { Button } from '@/components/Button';
const {
    contentTypeTwo,
    imageContainer,
    img,
    contentContainer,
    heading,
    description,
    btnContainer,
    reversBorder,
    reverseContentAlign
} = style;

const ContentTypeTwo = ({ reverse, title, desc, imageFor } : IContentTypeTwoProps) => {
    return(
        <>
            {
                !reverse ? <div className={`${contentTypeTwo} ${reverseContentAlign}`}>
                    <div className={imageContainer}>
                        <Image className={img} src={imageFor === 'beauty' ? beautyImage : imageFor === 'book' ? booksImage : dummyImage} alt='apparel' priority/>
                    </div>
                    <div className={contentContainer}>
                        <h1 className={heading}>{title}</h1>
                        <p className={description}>{desc}</p>
                        <div className={btnContainer}>
                            <Button secondary>explore all</Button>
                        </div>
                    </div>
                </div> : <div className={contentTypeTwo}>
                    <div className={contentContainer}>
                        <h1 className={heading}>{title}</h1>
                        <p className={description}>{desc}</p>
                        <div className={btnContainer}>
                            <Button secondary>explore all</Button>
                        </div>
                    </div>
                    <div className={`${imageContainer} ${reversBorder}`}>
                        <Image className={img} src={imageFor === 'beauty' ? beautyImage : imageFor === 'book' ? booksImage : dummyImage} alt='apparel' priority/>
                    </div>
                </div>
            }
        </>
    );
};

export default ContentTypeTwo;
