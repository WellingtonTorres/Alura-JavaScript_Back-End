const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function CalcMedia(notasSala){
    const somaNotas = notasSala.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
    const media = somaNotas / notasSala.length;
    
    return media;
}

console.log(`Média da sala de JavaScript é ${CalcMedia(salaJS)}`);
console.log(`Média da sala de Java é ${CalcMedia(salaJava)}`);
console.log(`Média da sala de Python é ${CalcMedia(salaPython)}`); 
