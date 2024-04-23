import { LoginForm } from '@/components/Form/LoginForm';
import style from './loginAndSignUp.module.scss';
import { SignUpForm } from '@/components/Form/SignUpForm';
const {
    loginSignUp,
    heading,
    loginContainer,
    signUpContainer
} = style;

const LoginAndSignUp = () => {
    return(
        <section className={loginSignUp}>
            <h1 className={heading}>account</h1>
            <div className={loginContainer}>
                <h2>sign in</h2>
                <LoginForm/>
            </div>
            <div className={signUpContainer}>
                <h2>sign up</h2>
                <SignUpForm/>
            </div>
        </section>
    );
};

export default LoginAndSignUp;
