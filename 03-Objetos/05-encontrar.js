const clientes = require("./cliente_aula5.json");

function encontrar(lista, chave, valor){
    const teste = lista.find((item) => item[chave].includes(valor)); //Correto

    const teste2 = lista.find((item) => item[chave]); 
    console.log(teste2);
    return teste
    
}
//const found = array1.find(element => element > 10);
const encontrado = encontrar(clientes, "telefone", "5193301028");


console.log(encontrado);