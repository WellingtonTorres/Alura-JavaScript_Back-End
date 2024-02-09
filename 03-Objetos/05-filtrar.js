const clientes = require("./cliente_aula5.json");

function filtrarApSemComplemento(clientes){
        return clientes.filter((cliente) => {
            return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
        }
    
        )
}

const result = filtrarApSemComplemento(clientes)
console.log(result)
