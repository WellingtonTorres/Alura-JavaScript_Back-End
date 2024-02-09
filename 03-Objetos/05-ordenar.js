const clientes = require("./cliente_aula5.json");

function ordenar(lista, propriedade){
    const resultado = lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]){
            return -1;
        }
        if(a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    });
    return resultado;
}

const ordenaNome = ordenar(clientes,"nome");
console.log(ordenaNome.reverse());