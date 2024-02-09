const user = {
    nome: "João",
    idade: 31,
    email: "",
    cidade: "São Paulo",
    nascimento : "2000/01/01",
    role: "user",
    ativo: true,
    exibirInfos: function() {
        console.log(`Nome: ${this.nome} - Email: ${this.email}`);
    }
}

const admin = {
    nome: "Flavio",
    idade: 28,
    email: "flavio@aa.com.br",
    cidade: "Paulo Mourão",
    nascimento : "2000/01/01",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log(`Criando curso`);
    }
}


Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();