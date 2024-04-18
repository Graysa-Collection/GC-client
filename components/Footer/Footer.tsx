import Image from 'next/image';

import gcLogo from '@/assets/logo/gc-logo.svg';
import facebookIcon from '@/assets/icon/facebook.svg';
import instagramIcon from '@/assets/icon/instagram.svg';
import tiktokIcon from '@/assets/icon/tiktok.svg';
import youtubeIcon from '@/assets/icon/youtube.svg';

import style from './footer.module.scss';
import Link from 'next/link';

const { 
    footer,
    contentContainer,
    logoContainer,
    logo,
    socialMediaContainer,
    icon,
    iconContainer,
    list,
    item,
    link,
    copyrightContainer,
    copyright
} = style;

const Footer = () => {
    return(
        <div className={footer}>
            <div className={contentContainer}>
                <div className={logoContainer}>
                    <Image className={logo} src={gcLogo} height={1000} width={1000} alt='graysa collection logo' priority/>
                </div>
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
                <ul className={list}>
                    <li className={item}>
                        <Link className={link} href='#'>faq</Link>
                    </li>
                    <li className={item}>
                        <Link className={link} href='#'>policy</Link>
                    </li>
                    <li className={item}>
                        <Link className={link} href='#'>contact</Link>
                    </li>
                </ul>
            </div>
            <div className={copyrightContainer}>
                <p className={copyright}>COPYRIGHT ©2024 GRAYSA COLLECTION. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;
