'use client'

import { useState } from 'react';
import Image from 'next/image';

import NavLink from './NavLink/NavLink';
import gcLogo from '../../assets/logo/gc-logo.svg';
import style from './navbar.module.scss';
import { CartSidebar } from '../CartSidebar';
import { LoginSidebar } from '../LoginSidebar';

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
    const [ loginSidebarActive, setLoginSidebarActive] = useState(false);
    const [ cartSidebarActive, setCartSidebarActive ] = useState(false);
    
    const handleLoginSidebar = () => {
        setLoginSidebarActive(!loginSidebarActive);
    }

    const handleCartSidebar = () => {
        setCartSidebarActive(!cartSidebarActive);
    }
    
    return(
        <>
            <header className={navbar}>
                <div className={container}>
                    <div className={logoContainer}>
                        <Image className={logo} src={gcLogo} height={1000} width={1000} alt='graysa collection logo' priority/>
                    </div>
                    <ul className={list}>
                        <li className={item} onClick={handleLoginSidebar}>account</li>
                        <li className={item} onClick={handleCartSidebar}>cart (0)</li>
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
            <CartSidebar isSidebar={cartSidebarActive} handleSidebar={handleCartSidebar}/>
            <LoginSidebar isSidebar={loginSidebarActive} handleSidebar={handleLoginSidebar}/>
        </>
    )
};

export default Navbar;
