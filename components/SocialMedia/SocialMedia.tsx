import Link from "next/link";
import Image from "next/image";

import facebookIcon from '@/assets/icon/facebook.svg';
import instagramIcon from '@/assets/icon/instagram.svg';
import tiktokIcon from '@/assets/icon/tiktok.svg';
import youtubeIcon from '@/assets/icon/youtube.svg';

import style from './socialMedia.module.scss';
const {
    socialMediaContainer,
    iconContainer,
    icon
} = style;


const SocialMedia = () => {
    return(
        <div className={socialMediaContainer}>
            <Link href='#'>
                <div className={iconContainer}>
                    <Image className={icon} src={facebookIcon} height={1000} width={1000} alt='facebook icon' priority/>
                </div>
            </Link>
            <Link href='#'>
                <div className={iconContainer}>
                    <Image className={icon} src={instagramIcon} height={1000} width={1000} alt='instagram icon' priority/>
                </div>
            </Link>
            <Link href='#'>
                <div className={iconContainer}>
                    <Image className={icon} src={tiktokIcon} height={1000} width={1000} alt='tiktok icon' priority/>
                </div>
            </Link>
            <Link href='#'>
                <div className={iconContainer}>
                    <Image className={icon} src={youtubeIcon} height={1000} width={1000} alt='youtube icon' priority/>
                </div>
            </Link>
        </div>
    );
};

export default SocialMedia;
