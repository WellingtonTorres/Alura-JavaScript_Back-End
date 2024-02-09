import User from './User.js';

export default class Admin extends User { //Herança de classe
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
        this.role = role || 'estudante'
    }

    exibirInfos() { //Método
        //const objUser = this.#montaObjUser()
        return `${this.nome}, ${this.role} ,${this.ativo}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return `O curso ${nomeDoCurso} foi criado com sucesso e possui ${vagas} vagas`
    }
}

// const novoAdmin = new Admin ('João', 'j@j.com','2020-01-01')
// // console.log(novoAdmin)
// // console.log(novoAdmin.exibirInfos())

// console.log(novoAdmin.criarCurso('Javascript', 20))