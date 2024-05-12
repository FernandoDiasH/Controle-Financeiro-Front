export const useFilterTable = (searchValue:any, dadosParaFiltrar:any) => {
    return computed( () => {
        if (!searchValue.value) {
            return dadosParaFiltrar.dados
        }

        return dadosParaFiltrar.dados.filter((data:any) => {
            return Object.values(data).some((value) => {
                return String(value).toLowerCase().includes(searchValue.value.toLowerCase())
            })
        })
    })
}
