const notas = [10, 6.6, 7.8, 8]

let somaNotas = 0

for (let nota of notas) {

   //console.log(nota)
    somaNotas += nota
    
}
 const media = somaNotas / notas.length

 console.log(`A media é ${media.toFixed(1)}`)