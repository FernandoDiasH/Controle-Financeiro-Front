export default defineEventHandler(async (event) => {
    let dados = {
        metadados:[
            {key: 'id', label:'ID', sortable:true},
            {key: 'vencimento', label:'Vencimento', sortable:true},
            {key: 'categoria', label:'Categoria', sortable:true},
            {key: 'descricao', label:'Descrição', sortable:true},
            {key: 'valor', label:'Valor', sortable:true},
            {key: 'action', label:'Ações'}
        ],
        ordenacao:{
            column:'Data',
            direction: 'asc' 
        },
        mesReferencia: "Fevereiro",
        dados:[
            {
                id:1,
                vencimento: "19/12/2023",
                categoria: "Casa",
                descricao: "Luz",
                valor: "600"
            },
            {
                id:2,
                vencimento: "21/12/2023",
                categoria: "Casa",
                descricao: "Agua",
                valor: "200"
            },
            {
                id:3,
                vencimento: "25/12/2023",
                categoria: "Casa",
                descricao: "Internet",
                valor: "100"
            }
        ]
    }
    return dados;
})
