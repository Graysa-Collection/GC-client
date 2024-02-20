import { ReactNode } from "react";

export interface IButtonProps{
    children: ReactNode;
    primary?: boolean;
    secondary?: boolean;
    colorGold?: boolean;
    colorDark?: boolean;
    link?: string
};
