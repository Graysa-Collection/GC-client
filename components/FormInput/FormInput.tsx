import { IFormInputProps } from './FormInput.type';
import style from './formInput.module.scss';
const {
    formInput,
    inputFilled
} = style;

const FormInput = ({ type, placeholder, onChange, name, value }: IFormInputProps) => {
    return(
        <input className={formInput} type={type} placeholder={placeholder} onChange={onChange} name={name} value={value}/>
    );
};

export default FormInput;
