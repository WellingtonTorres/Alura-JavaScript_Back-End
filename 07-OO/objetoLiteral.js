const user = {
    nome: "João",
    idade: 31,
    email: "",
    cidade: "São Paulo",
    nascimento : "2000/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(`Nome: ${this.nome} - Email: ${this.email}`);
    }
}
user.exibirInfos();
// const exibir = user.exibirInfos
// exibir()
const exibir = function(){
    console.log(this.nome);
}

const exibirNome = exibir.bind(user);
exibirNome();
exibir(); // undefined