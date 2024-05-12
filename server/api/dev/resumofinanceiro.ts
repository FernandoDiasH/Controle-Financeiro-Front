export default defineEventHandler(async (event) => {
    return { 
        "Entrada": {
            "valor" :  600, 
            "textColor" :  
            'text-lime-700'
        },
        "Saída": {
            "valor" :  -1200, 
            "textColor" :  
            'text-red-700'
        },
        "Crédito": {
            "valor": 1800, 
            "textColor": 'text-orange-700'
        }
    }
})
