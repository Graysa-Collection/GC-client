'use client'

import { useState } from 'react';
import Link from 'next/link';

import { Button } from '../../Button';
import { FormInput } from '../FormInput';

import style from './loginForm.module.scss';
const {
    loginForm,
    forgotPw,
    btnContainer
} = style;

const defaultFormFields = {
    email: '',
    password: ''
}

const LoginForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: [value]});
    };

    return(
        <form className={loginForm} onSubmit={() => {}}>
            <FormInput
                type='text'
                placeholder='email'
                onChange={handleChange}
                name='email'
                value={email}
            />
            <FormInput
                type='password'
                placeholder='password'
                onChange={handleChange}
                name='password'
                value={password}
            />
            <Link className={forgotPw} href={'#'}>Forgot Password?</Link>
            <div className={btnContainer}>
                <Button btnType='submit' primary button={true}>sign in</Button>
            </div>
        </form>
    );
};

export default LoginForm;
