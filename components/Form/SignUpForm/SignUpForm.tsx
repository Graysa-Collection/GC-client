'use client'

import { Button } from '@/components/Button';

import { FormInput } from '../FormInput';
import style from './signUpForm.module.scss';
import { useState } from 'react';
const {
    signUpForm,
    btnContainer
} = style;

const defaultFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { firstName, lastName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: [value]});
    }
    return(
        <form className={signUpForm} onSubmit={() => {}}>
            <FormInput type='text' placeholder='first name' onChange={handleChange} name='firstName' value={firstName}/>
            <FormInput type='text' placeholder='last name' onChange={handleChange} name='lastName' value={lastName}/>
            <FormInput type='email' placeholder='email' onChange={handleChange} name='email' value={email}/>
            <FormInput type='password' placeholder='password' onChange={handleChange} name='password' value={password}/>
            <FormInput type='password' placeholder='confirm password' onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <div className={btnContainer}>
                <Button primary button btnType='submit'>Sign Up</Button>
            </div>
        </form>
    );
};

export default SignUpForm;
