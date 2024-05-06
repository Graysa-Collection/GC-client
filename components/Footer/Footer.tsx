import Image from 'next/image';

import gcLogo from '@/assets/logo/gc-logo.svg';

import style from './footer.module.scss';
import Link from 'next/link';
import { SocialMedia } from '../SocialMedia';

const { 
    footer,
    contentContainer,
    logoContainer,
    logo,
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
                <SocialMedia/>
                <ul className={list}>
                    <li className={item}>
                        <Link className={link} href='#'>faq</Link>
                    </li>
                    <li className={item}>
                        <Link className={link} href='#'>policy</Link>
                    </li>
                    <li className={item}>
                        <Link className={link} href='/contact'>contact</Link>
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
