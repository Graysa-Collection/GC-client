import { ChangeEventHandler } from "react";

export interface IFormInputProps {
    type: string,
    placeholder: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    name?: string,
    value?: string | number | readonly string[]
}
