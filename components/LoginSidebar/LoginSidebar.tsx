import Image from 'next/image';
import { Button } from '../Button';

import crossIcon from '@/assets/icon/cross-icon.svg';

import style from './loginSidebar.module.scss';
import { LoginForm } from '../Form/LoginForm';
const {
    sidebar,
    mask,
    visibleMask,
    sidebarContainer,
    visibleSidebar,
    accountHeading,
    loginHeading,
    description,
    formContainer,
    signUpBtnContainer,
    text,
    crossBtn,
    icon,
    form
} = style;

const LoginSidebar = () => {
    return(
        <div className={sidebar}>
            <div className={`${mask} ${visibleMask}`}/>
            <div className={`${sidebarContainer} ${visibleSidebar}`}>
                <h3 className={accountHeading}>account</h3>
                <p className={description}>sign in or sign up to get access to limited time offers and more!</p>
                <div className={formContainer}>
                    <h3 className={loginHeading}>sign in</h3>
                    <LoginForm/>
                </div>
                <div className={signUpBtnContainer}>
                    <p className={text}>no account? sign up now!</p>
                    <Button secondary colorDark>sign up</Button>
                </div>
                <button className={crossBtn}><Image className={icon} src={crossIcon} alt='cross icon' height={1000} width={1000} priority/></button>
            </div>
        </div>
    );
};

export default LoginSidebar;
