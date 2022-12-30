export declare enum ButtonType {
    PRIMARY = "primary",
    DANGER = "danger",
    DEFAULT = "default",
    ACCENT = "accent"
}
export interface ButtonProps {
    type?: ButtonType;
    buttonType?: 'button' | 'submit' | 'reset' | undefined;
    text: string;
    extraClassNames?: string;
    disabled?: boolean;
    onClick?: () => void;
}
