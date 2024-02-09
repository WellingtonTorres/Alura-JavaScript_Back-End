const notas = [10, 6.6, 7.8, 8]
//método do objeto Array
let somaNotas = 0;

notas.forEach(function (nota){

    //console.log(nota)
    somaNotas += nota;

}); //callback 

const media = somaNotas / notas.length;
console.log(`A media das notas é ${media.toFixed(1)}`);

//Objeto=>Propriedade=Funcao=Metodo