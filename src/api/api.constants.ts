export const urls = {
    workOrders: {
        getWorkOrders: `/workorders/`
    },
    workOrdersProducts: {
        getWorkOrdersProducts: (id: string) => `/workorders/${id}/products/`
    },
    workOrdersSearch: {
        getWorkOrdersProducts: (searchStr: string) => `/workorders/?search=${searchStr}`
    },
    workOrdersFilterIsFinishedFalse: {
        getWorkOrdersFilterFalse:(sortOrder:string) => `/workorders/${sortOrder}`
    },
    nomenclatures: {
        getNomenclatures: '/nomenclatures/'
    }
} 