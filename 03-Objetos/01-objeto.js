const listaCPFs = [1111111, 22222, 3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

console.log(informacoesPessoa[1]);

const objetoPessoa = {
  idade: 32,
  nome: "Jose",
  cpf: "1111222333"
};

objetoPessoa.segruoSocial = "78293"
console.log(objetoPessoa);
console.log(objetoPessoa.cpf.substring(0,4))
