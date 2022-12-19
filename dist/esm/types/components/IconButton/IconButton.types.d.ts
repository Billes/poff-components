import { ReactNode } from 'react';
export declare enum IconButtonType {
    PRIMARY = "primary",
    DANGER = "danger",
    DEFAULT = "default",
    ACCENT = "accent"
}
export interface IconButtonProps {
    type?: IconButtonType;
    icon: ReactNode;
    title?: string;
    disabled?: boolean;
    onClick: () => void;
}
