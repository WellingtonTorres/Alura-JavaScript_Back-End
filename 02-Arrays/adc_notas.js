const notas = [10,6,8]

notas.push(7);

const media = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log(media);

//Mesmo notas sendo uma const é possível adc/remover/alterar valores por meio de metodos