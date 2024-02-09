import User from './User.js';

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo);
        }

        aprovaEstudante(estudante,curso){
            return `O estudante ${estudante} foi aprovado(a) no curso ${curso}`	

        }
}

// const novDocente = new Docente ('Mariana', 'ma@ma.com', '2000-01-01')
// console.log(novDocente)
// console.log(novDocente.exibirInfos())
// console.log(novDocente.aprovaEstudante('João', 'Javascript'))