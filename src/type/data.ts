export interface IWorkOrdersProps {
    count: number;
    results: IWorkOrders[]
}
export interface IWorkOrders {
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
export interface IProduct {
    id: number;
    code: string;
    name: string;
}
export interface IGetProduct {
    results: IProduct[]
}
export interface IProductsProps {
    id: number
    serial: string,
    weight: string,
    date: string
}