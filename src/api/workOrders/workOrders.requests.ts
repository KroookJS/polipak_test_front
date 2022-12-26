import { AxiosResponse } from 'axios'
import { IWorkOrdersProps, IProductsProps, IGetProduct } from '../../type/data'

import { urls } from '../api.constants'
import axios from '../axios'

type TWorkOrdersParams = {
    page: number; 
}
type TWorkOrdersProductsParams = {
    weight: string;
}

export const getWorkOrders = (params: TWorkOrdersParams): Promise<AxiosResponse<IWorkOrdersProps>> => {
    return axios.get(urls.workOrders.getWorkOrders, {
        params
    })
} 
export const getWorkOrdersProduct = (id: string): Promise<AxiosResponse<IProductsProps[]>> => {
    return axios.get(urls.workOrdersProducts.getWorkOrdersProducts(id))
} 
export const postWorkOrdersProduct = (id: string, params: TWorkOrdersProductsParams, ): Promise<AxiosResponse<IProductsProps[]>> => {
    return axios.post(urls.workOrdersProducts.getWorkOrdersProducts(id), params)
} 
export const getWorkOrdersSearch = (searchStr: string): Promise<AxiosResponse<IWorkOrdersProps>> => {
    return axios.get(urls.workOrdersSearch.getWorkOrdersProducts(searchStr))
} 
export const getWorkOrdersFilterFalse = (params: TWorkOrdersParams, sortOrder: string): Promise<AxiosResponse<IWorkOrdersProps>> => {
    return axios.get(urls.workOrdersFilterIsFinishedFalse.getWorkOrdersFilterFalse(sortOrder), {
        params
    })
} 
export const getNomenclatures = (): Promise<AxiosResponse<IGetProduct>> => {
    return axios.get(urls.nomenclatures.getNomenclatures)
}