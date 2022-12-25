export const urls = {
    workOrders: {
        getWorkOrders: `/workorders/`
    },
    workOrdersProducts: {
        getWorkOrdersProducts: (id: string) => `/workorders/${id}/products/`
    },
    nomenclatures: {
        getNomenclatures: '/nomenclatures/'
    }
} 