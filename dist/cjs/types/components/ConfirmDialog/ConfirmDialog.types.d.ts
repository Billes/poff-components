/// <reference types="react" />
export interface ConfirmDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string | JSX.Element;
    confirmLabel?: string;
    cancelLabel?: string;
}
