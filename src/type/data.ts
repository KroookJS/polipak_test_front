export interface IWorkordersProps {
    id: number;
    number: string;
    start_date: null | string;
    material?: {
        id: number
        code: string
        name: string
    }
    product?: {
        id: number
        code: string
        name: string
    },
    is_finished: false
}

export interface INomenclatureProps {
    id: number;
    code: string;
    name: string;
}
export interface IProductsProps {
    id: number
    serial: string,
    weight: string,
    date: string
}