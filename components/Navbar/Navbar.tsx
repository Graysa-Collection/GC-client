import Image from 'next/image';

import gcLogo from '../../assets/logo/gc-logo.svg';

import style from './navbar.module.scss';
import Link from 'next/link';

const {
    navbar,
    logoContainer,
    navContainer,
    navList,
    navItem,
    container,
    list,
    item,
    logo,
    navLink,
    highlight
} = style;

const Navbar = () => {
    return(
        <header className={navbar}>
            <div className={container}>
                <div className={logoContainer}>
                    <Image className={logo} src={gcLogo} alt='graysa collection logo' priority/>
                </div>
                <ul className={list}>
                    <li className={item}>account</li>
                    <li className={item}>cart (0)</li>
                </ul>
            </div>
            <nav className={navContainer}>
                <ul className={navList}>
                    <li className={navItem}>
                        <Link className={navLink} href='/'>home</Link>
                        <span className={highlight}/>
                    </li>
                    <li className={navItem}>
                        <Link className={navLink} href='/apparel'>apparel</Link>
                        <span className={highlight}/>
                    </li>
                    <li className={navItem}>
                        <Link className={navLink} href='/beauty-and-care'>beauty & care</Link>
                        <span className={highlight}/>
                    </li>
                    <li className={navItem}>
                        <Link className={navLink} href='/books'>books</Link>
                        <span className={highlight}/>
                    </li>
                    <li className={navItem}>
                        <Link className={navLink} href='/about'>about</Link>
                        <span className={highlight}/>
                    </li>
                    <li className={navItem}>
                        <Link className={navLink} href='/sale'>sale</Link>
                        <span className={highlight}/>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;
