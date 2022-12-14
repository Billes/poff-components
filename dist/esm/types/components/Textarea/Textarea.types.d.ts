import { ChangeEventHandler } from 'react';
export interface TextareaProps {
    disabled?: boolean;
    error?: string;
    placeholder?: string;
    rows?: number;
    name: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
