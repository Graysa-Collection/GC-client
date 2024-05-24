'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

import { INavLinkProps } from "./NavLink.type";
import style from './navLink.module.scss';
const {
    navItem,
    navLink,
    highlight,
    highlightActive
} = style;

const NavLink = ({ href, linkName, onClick }: INavLinkProps) => {
    const path = usePathname();
    const isCurrentPath = path === href || (href !== '/' && path.startsWith(href));
    
    return(
        <li className={navItem}>
            <Link className={navLink} href={href} onClick={onClick}>{linkName}</Link>
            <span className={ isCurrentPath ? 
                `${highlight} ${highlightActive}` 
                :highlight}/>
        </li>
    );
};

export default NavLink;
