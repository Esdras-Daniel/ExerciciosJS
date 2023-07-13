/*   Capítulo 2 - Operadores

  Exercicio 23. Uma empresa contrata um encanador a R$ 20.00 por dia. Crie um programa que solicite o numero de dias trabalhados pelo
  encanador e imprima o valor liquido a ser pago sabendo que sao descontados 8% do imposto de renda.
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const valor_dia = 20.00;
  const imp_renda = 0.08;
  
  console.log("Informe a quantidade de dias trabalhados pelo encanador: ");
  rl.on('line', function (dia_trabInput) {
    const dia_trab = parseInt(dia_trabInput);
  
    let valor_liq = dia_trab * valor_dia;
    valor_liq -= valor_liq * imp_renda;
  
    console.log(`O valor a ser pago ao encanador é de: R$ ${valor_liq.toFixed(2)}`);
  
    rl.close();
  });

  