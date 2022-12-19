export interface SelectMenuProps {
    name: string;
    options: any[];
    selected: any;
    keyIdentifier: string;
    valueIdentifier: string;
    disabled?: boolean;
    multiple?: boolean;
    onChange?: (value: any) => void;
}
