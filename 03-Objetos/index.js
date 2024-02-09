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
    console.log(animalEstimacao[0].nome)
//    const listaApenasApartamentos = cliente.enderecos.filter(
//     (endereco) => endereco.apartamento === true
//   );