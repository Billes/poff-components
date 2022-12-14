import { ChangeEventHandler } from 'react';
export interface TextareaProps {
    id: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    placeholder?: string;
    rows?: number;
    name: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    value: string;
}
