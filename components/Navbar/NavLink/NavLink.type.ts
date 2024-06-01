import { MouseEventHandler } from "react";

export interface INavLinkProps {
    linkName: string,
    href: string,
    onClick?: MouseEventHandler<HTMLAnchorElement>
}
