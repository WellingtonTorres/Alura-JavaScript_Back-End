const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
   }]
    cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
   })

   const animalEstimacao = cliente.animalEstimacao.filter(
    (animal) => animal.raça == "Cão"
   )
    console.log(cliente)
//    const listaApenasApartamentos = cliente.enderecos.filter(
//     (endereco) => endereco.apartamento === true
//   );
for (let chave in cliente) {
    let tipo = typeof(cliente[chave]);
    
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
    
    if(tipo != "object" && tipo != "function"){
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
    }
}