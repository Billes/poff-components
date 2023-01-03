/// <reference types="react" />
import React, { FC, ReactNode, ChangeEventHandler, Ref } from 'react';

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

declare enum ButtonType {
    PRIMARY = "primary",
    DANGER = "danger",
    DEFAULT = "default",
    ACCENT = "accent"
}
interface ButtonProps {
    type?: ButtonType;
    buttonType?: 'button' | 'submit' | 'reset' | undefined;
    text: string;
    extraClassNames?: string;
    disabled?: boolean;
    onClick?: () => void;
}

declare const IconButton$1: FC<ButtonProps>;

interface ConfirmDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string | JSX.Element;
    confirmLabel?: string;
    cancelLabel?: string;
}

declare const ConfirmDialog: FC<ConfirmDialogProps>;

interface HeadlineProps {
    label: string;
}

declare const Headline: FC<HeadlineProps>;

declare enum IconButtonType {
    PRIMARY = "primary",
    DANGER = "danger",
    DEFAULT = "default",
    ACCENT = "accent"
}
interface IconButtonProps {
    type?: IconButtonType;
    icon: ReactNode;
    title?: string;
    disabled?: boolean;
    onClick: () => void;
}

declare const IconButton: FC<IconButtonProps>;

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
    required?: boolean;
    ref?: Ref<HTMLInputElement>;
}

declare const Input: FC<InputProps>;

interface LabelProps {
    text: string;
    htmlFor: string;
    required?: boolean;
}

declare const Label: FC<LabelProps>;

interface ModalProps {
    children?: ReactNode;
    open: boolean;
    onClose: () => void;
}

declare const Modal: FC<ModalProps>;

interface ParagraphProps {
    children?: ReactNode;
}

declare const Paragraph: FC<ParagraphProps>;

interface SelectMenuProps {
    name: string;
    options: any[];
    selected: any;
    keyIdentifier: string;
    valueIdentifier: string;
    disabled?: boolean;
    multiple?: boolean;
    onChange?: (value: any) => void;
}

declare const SelectMenu: FC<SelectMenuProps>;

interface SubtitleProps {
    label: string;
}

declare const Subtitle: FC<SubtitleProps>;

interface ToggleProps {
    enabled: boolean;
    label?: string;
    description?: string;
    disabled?: boolean;
    onChange: (value: boolean) => void;
    onClick?: () => void;
}

declare const Toggle: FC<ToggleProps>;

interface TextareaProps {
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

declare const Textarea: FC<TextareaProps>;

export { _default as Alert, AlertProps, AlertType, IconButton$1 as Button, ButtonProps, ButtonType, ConfirmDialog, Headline, IconButton, IconButtonProps, IconButtonType, Input, InputType, Label, Modal, Paragraph, SelectMenu, Subtitle, Textarea, Toggle };
