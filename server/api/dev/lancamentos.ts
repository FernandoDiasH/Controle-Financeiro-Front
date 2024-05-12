export default defineEventHandler((event) => {
    const teste = {
        "metadados":[
            {key: 'vencimento', label:'Vencimento', sortable:true},
            {key: 'categoria', label:'Categoria', sortable:true},
            {key: 'descricao', label:'Descrição', sortable:true},
            {key: 'valor', label:'Valor', sortable:true},
            {key: 'action', label:'Ações'}
        ],
        "ordenacao":{
            column:'Data',
            direction: 'asc' 
        },
        "dados":[
            {"vencimento": "19/12/2023", "categoria":"Gastos extras", "descricao": "HD", "valor": "300"},
            {"vencimento": "18/12/2023", "categoria":"Mercado", "descricao": "Condor", "valor": "198"},
            {"vencimento": "17/12/2023", "categoria":"Conta fixa", "descricao": "Luz", "valor": "198"},
        ]
    }
    return teste

    return [
        {"vencimento": "19/12/2023", "categoria":"Gastos extras", "descricao": "HD", "valor": "300"},
        {"vencimento": "18/12/2023", "categoria":"Mercado", "descricao": "Condor", "valor": "198"},
        {"vencimento": "17/12/2023", "categoria":"Conta fixa", "descricao": "Luz", "valor": "198"},
    ]
  })