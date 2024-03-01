import Link from 'next/link';

import { IButtonProps } from './Button.type';
import style from './button.module.scss';

const {
    btn,
    btnPrimary,
    btnSecondary,
    btnColorDark
} = style;

const Button = ({ children, primary, secondary, colorDark, link }: IButtonProps) => {
    return(
        <Link className={`${btn} ${secondary ?btnSecondary : ''} ${primary ? btnPrimary : ''} ${colorDark ? btnColorDark : ''}`} href={link ? link : '#'}>{children}</Link>
    )
}

export default Button;
