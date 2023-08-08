export interface DataType {
    key: string;
    produto: string;
    tipo: string;
    preco: number;
    tags: string[];
}

export interface TagProps {
    color: string;
    children: React.ReactNode;
}