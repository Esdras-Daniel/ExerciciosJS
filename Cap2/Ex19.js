/* Capítulo 2 - Operadores

  Exercício 19: Em um cercado, ha varios patos e coelhos. Escreva um programa que solicite ao usuario o total de cabecas e o total de pes,
  e determine quantos patos e quantos coelhos se encontram nesse cercado.

  pato = -(pes - cabecas * 4) / 2;
  coelho = cabecas - pato
 */


  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log("Digite a quantidade total de cabeças: ");
  rl.on('line', function (cabecasInput) {
    const cabecas = parseInt(cabecasInput);
  
    console.log("Digite a quantidade total de pés: ");
    rl.on('line', function (pesInput) {
      const pes = parseInt(pesInput);
  
      const pato = -(pes - cabecas * 4) / 2;
      const coelho = cabecas - pato;
  
      console.log(`Total de Coelhos: ${coelho}\tTotal de Patos: ${pato}`);
  
      rl.close();
    });
  });