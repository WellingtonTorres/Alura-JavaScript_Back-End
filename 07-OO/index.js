import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

// const novoUser = new User('João', 'j@j','2000-01-01')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin ('Renata', 'r@r', '2000-01-01')
// console.log(novoAdmin.nome)
// novoAdmin.nome = 'Felipe'
// console.log(novoAdmin.nome)

// const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
// console.log(novoUser.nome) //'Juliana'
// novoUser.nome = 'Juliana Silva Souza'
// console.log(novoUser.nome) //'Juliana'
// console.log(novoUser.sobrenome) //'Silva Souza'

const novoDocente = new Docente('Fagner','f@f.com','2021-01-01')
console.log(novoDocente.exibirInfos()) 