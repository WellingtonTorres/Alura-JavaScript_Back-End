const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet  = new Set(nomes);

//const novosNomes = [...meuSet]
const novosNomes = [...new Set(nomes)];

console.log(novosNomes)