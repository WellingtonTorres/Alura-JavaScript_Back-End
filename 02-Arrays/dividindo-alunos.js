const alunos = ['Lara','Mateus','Fabio','Fabiana','Geovanna','Carlos']

const sala1 = alunos.slice(0, alunos.length / 2)
const sala2 = alunos.slice(alunos.length / 2)

console.log(sala1)
console.log(sala2)
//slice NAO altera o array original