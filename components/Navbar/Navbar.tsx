'use client'

import { useState } from 'react';
import Image from 'next/image';

import { CartSidebar } from '../CartSidebar';
import { LoginSidebar } from '../LoginSidebar';
import NavLink from './NavLink/NavLink';

import burgerIcon from '@/assets/icon/burger-icon.svg';
import crossIcon from '@/assets/icon/cross-icon-2.svg';
import gcLogo from '../../assets/logo/gc-logo.svg';
import style from './navbar.module.scss';
import Link from 'next/link';

const {
    navbar,
    logoContainer,
    navContainer,
    navList,
    container,
    list,
    item,
    logo,
    iconClose,
    iconOpen,
    activeIconClose,
    activeIconOpen,
    activeNavList,
    activeNavbar,
    footer,
    link
} = style;


const Navbar = () => {
    const [ loginSidebarActive, setLoginSidebarActive] = useState(false);
    const [ cartSidebarActive, setCartSidebarActive ] = useState(false);
    const [ navbarActive, setNavbarActive ] = useState(false);
    const [ mobileNavbar, setMobileNavbar ] = useState(false);
    
    const handleLoginSidebar = () => {
        setLoginSidebarActive(!loginSidebarActive);
    }
    const handleCartSidebar = () => {
        setCartSidebarActive(!cartSidebarActive);
    }
    const handleNavbar = () => {
        setNavbarActive(!navbarActive)
    }
    const handleMobileNavbar = () => {
        setNavbarActive(false)
        setMobileNavbar(!mobileNavbar)
    }
    
    return(
        <>
            <header className={navbarActive ? `${navbar} ${activeNavbar}` : navbar}>
                <div style={{overflowX: 'hidden'}}>
                    <div className={container}>
                        <div className={logoContainer}>
                            <Image className={logo} src={gcLogo} height={1000} width={1000} alt='graysa collection logo' priority/>
                        </div>
                        <ul className={list}>
                            <li className={item} onClick={handleLoginSidebar}>account</li>
                            <li className={item} onClick={handleCartSidebar}>cart (0)</li>
                            <li className={item} onClick={handleNavbar}>
                                <Image className={ navbarActive ? `${iconOpen} ${activeIconOpen}` : iconOpen} src={burgerIcon} height={1000} width={1000} alt='icon' priority/>
                                <Image className={ navbarActive ? `${iconClose} ${activeIconClose}` : iconClose} src={crossIcon} height={1000} width={1000} alt='icon' priority/>
                            </li>
                        </ul>
                    </div>
                    <nav className={navbarActive ? `${navContainer} ${activeNavList}` : navContainer}>
                        <ul className={navList}>
                            <NavLink href='/' linkName='home' onClick={handleMobileNavbar}/>
                            <NavLink href='/apparel' linkName='apparel' onClick={handleMobileNavbar}/>
                            <NavLink href='/beauty-and-care' linkName='beauty & care' onClick={handleMobileNavbar}/>
                            <NavLink href='/books' linkName='books' onClick={handleMobileNavbar}/>
                            <NavLink href='/about' linkName='about' onClick={handleMobileNavbar}/>
                            <NavLink href='/sale' linkName='sale' onClick={handleMobileNavbar}/>
                        </ul>
                        <div className={footer}>
                            <Link href='#' className={link}>account</Link>
                        </div>
                    </nav>

                </div>
            </header>
            <CartSidebar isSidebar={cartSidebarActive} handleSidebar={handleCartSidebar}/>
            <LoginSidebar isSidebar={loginSidebarActive} handleSidebar={handleLoginSidebar}/>
        </>
    )
};

export default Navbar;
