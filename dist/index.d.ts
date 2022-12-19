import React, { FC, ChangeEventHandler, ReactNode } from 'react';

declare enum AlertType {
    ERROR = "error",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning"
}
interface AlertProps {
    type?: AlertType;
    id?: string;
    headline: string;
    body?: string;
    icon?: boolean;
    closable?: boolean;
    duration?: number;
    destroy?: () => void;
}

declare const _default: React.MemoExoticComponent<({ closable, icon, type, headline, body, destroy, duration, id, }: AlertProps) => JSX.Element>;

interface HeadlineProps {
    label: string;
}

declare const Headline: FC<HeadlineProps>;

declare enum InputType {
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
interface InputProps {
    id: string;
    type?: InputType;
    disabled?: boolean;
    placeholder?: string;
    error?: string;
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    icon?: ReactNode;
    value: string | number;
}

declare const Input: FC<InputProps>;

interface ParagraphProps {
    children?: ReactNode;
}

declare const Paragraph: FC<ParagraphProps>;

interface ToggleProps {
    enabled: boolean;
    label?: string;
    description?: string;
    disabled: boolean;
    onChange: (value: boolean) => void;
    onClick?: () => void;
}

declare const Toggle: FC<ToggleProps>;

interface TextareaProps {
    disabled?: boolean;
    error?: string;
    placeholder?: string;
    rows?: number;
    name: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

declare const Textarea: React.FC<TextareaProps>;

export { _default as Alert, AlertProps, AlertType, Headline, Input, InputType, Paragraph, Textarea, Toggle };
