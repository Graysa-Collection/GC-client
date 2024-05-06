import { IFormInputProps, IFormTextareaProps } from './FormInput.type';
import style from './formInput.module.scss';
const {
    formInput,
    inputFilled
} = style;

const FormInput = ({ type, placeholder, inputOnChange, name, value, textareaOnChange }: IFormInputProps & IFormTextareaProps) => {

    if (type !== 'textarea'){
        return(
                <input className={formInput} type={type} placeholder={placeholder} onChange={inputOnChange} name={name} value={value} />
        );
    }
    return(
            <textarea className={formInput} placeholder={placeholder} onChange={textareaOnChange} name={name} value={value} rows={4}/>
    );
};

export default FormInput;
