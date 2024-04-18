import Image from 'next/image';

import NavLink from './NavLink/NavLink';
import gcLogo from '../../assets/logo/gc-logo.svg';
import style from './navbar.module.scss';

const {
    navbar,
    logoContainer,
    navContainer,
    navList,
    container,
    list,
    item,
    logo
} = style;

const Navbar = () => {    
    return(
        <header className={navbar}>
            <div className={container}>
                <div className={logoContainer}>
                    <Image className={logo} src={gcLogo} height={1000} width={1000} alt='graysa collection logo' priority/>
                </div>
                <ul className={list}>
                    <li className={item}>account</li>
                    <li className={item}>cart (0)</li>
                </ul>
            </div>
            <nav className={navContainer}>
                <ul className={navList}>
                    <NavLink href='/' linkName='home'/>
                    <NavLink href='/apparel' linkName='apparel'/>
                    <NavLink href='/beauty-and-care' linkName='beauty & care'/>
                    <NavLink href='/books' linkName='books'/>
                    <NavLink href='/about' linkName='about'/>
                    <NavLink href='/sale' linkName='sale'/>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;
