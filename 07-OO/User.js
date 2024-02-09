export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        //this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {
        //return `${this.#nome} ${this.#sobrenome}`
        return `${this.#nome} `
      }

    // get sobrenome() {
    //     return this.#sobrenome
    //   }

    get email() { //Getter
        return this.#email
    }

    get nascimento() { //Getter
        return this.#nascimento
    }

    get role() { //Getter      
        return this.#role
    }

    get ativo() { //Getter 
        return this.#ativo
    }

    set nome(novoNome) { //Setter
        if (novoNome === ''){
            throw new Error('O nome não pode ser vazio')
        }
        // let [nome, ...sobrenome] = novoNome.split(" ")
        // sobrenome = sobrenome.join(' ')
        // this.#nome = nome
        // this.#sobrenome = sobrenome

        this.#nome = novoNome
    }

    set email(novoEmail) { //Setter
        this.#email = novoEmail
    }

    set nascimento(novoNascimento) { //Setter   
        this.#nascimento = novoNascimento
    }


    // #montaObjUser(){
    //     return ({
    //         nome: this.nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    exibirInfos() { //Método
        //const objUser = this.#montaObjUser()
        return `${this.nome}, ${this.email}, ${this.nascimento},  ${this.role} ,${this.ativo}`
    }
}

// const newUser = new User('mariana', 'm@m.com.br', '2000/01/01')
// console.log(newUser)
// console.log(newUser.exibirInfos())