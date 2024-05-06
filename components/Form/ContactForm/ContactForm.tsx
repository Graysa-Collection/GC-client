'use client'

import { useState } from 'react';

import { Button } from '@/components/Button';
import { FormInput } from '../FormInput';

import style from './contactForm.module.scss';
const {
    contactForm,
    btnContainer
} = style;

const defaultFormField = {
    name: '',
    email: '',
    message: ''
}


const ContactForm = () => {
    const [ formField, setFormField ] = useState(defaultFormField);
    const { name, email, message } = formField;
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
    
        setFormField({...formField, [name]: [value]});
    }

    console.log(formField);

    return(
        <form className={contactForm}>
            <FormInput type='text' placeholder='your name' name='name' value={name} inputOnChange={handleChange}/>
            <FormInput type='email' placeholder='your email' name='email' value={email} inputOnChange={handleChange}/>
            <FormInput type='textarea' placeholder='your message' name='message' value={message} textareaOnChange={handleChange}/>
            <div className={btnContainer}>
                <Button button btnType='submit' secondary colorDark>send message</Button>
            </div>
        </form>
    );
};

export default ContactForm;
