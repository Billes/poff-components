export declare enum AlertType {
    ERROR = "error",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning"
}
export interface AlertProps {
    type?: AlertType;
    headline: string;
    body?: string;
    icon?: boolean;
    closable?: boolean;
    show?: boolean;
    onClick: () => void;
}
