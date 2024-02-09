const dados = require("./cliente_person.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

const objCliente = JSON.parse(clienteEmString);

console.log(objCliente);
console.log(objCliente[1].id_cliente);
console.log(typeof objCliente);