import { ChangeEventHandler } from "react";

export interface IFormInputProps {
    type: string,
    placeholder: string,
    inputOnChange?: ChangeEventHandler<HTMLInputElement>,
    name?: string,
    value?: string | number | readonly string[]
}

export interface IFormTextareaProps {
    textareaOnChange?: ChangeEventHandler<HTMLTextAreaElement>
}
