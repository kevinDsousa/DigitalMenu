export interface MenuItem {
    label: string | JSX.Element;
    key: string;
    to?: string;
    onClick?: () => void;
    icon: JSX.Element;
    children?: MenuItem[];
}