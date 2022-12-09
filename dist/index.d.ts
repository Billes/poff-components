import { FC, ChangeEventHandler, ReactNode } from 'react';

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
    TIME = "time"
}
interface InputProps {
    type?: InputType;
    disabled?: boolean;
    placeholder?: string;
    error?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
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

export { Headline, Input, Paragraph, Toggle };
