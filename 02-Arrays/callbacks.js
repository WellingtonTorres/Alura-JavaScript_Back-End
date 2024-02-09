const nomes = ['Julia','Caio','Avelino']

// nomes.forEach((nome) => {
//     console.log(nome);
// })

const msgWelcome = (nome, pos) => {
    console.log(`Seja Bem-Vindo(a) ${nome}! Posicao ${pos}º`)
}

nomes.forEach(msgWelcome)