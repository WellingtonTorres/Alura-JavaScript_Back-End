function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibeInfos = function(){
     return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('mariana', 'm@m.com.br')
// console.log(novoUser.exibeInfos())

function Admin(role){
    User.call(this, 'Flavio', 'f@f.com.br')
    this.role = role || 'estudante'
}

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibeInfos())
// console.log(novoUser.role)
const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibeInfos: function() {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Mariana', 'ma@ma.com', '2000-01-01')
console.log(novoUser.exibeInfos())
console.log(user.isPrototypeOf(novoUser))