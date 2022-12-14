import { ChangeEventHandler, ReactNode } from 'react';
export declare enum InputType {
    TEXT = "text",
    EMAIL = "email",
    HIDDEN = "hidden",
    NUMBER = "number",
    PASSWORD = "password",
    TEL = "tel",
    URL = "url",
    DATE = "date",
    TIME = "time",
    SEARCH = "search"
}
export interface InputProps {
    type?: InputType;
    disabled?: boolean;
    placeholder?: string;
    error?: string;
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    icon?: ReactNode;
}
