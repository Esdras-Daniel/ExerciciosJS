/* Capítulo 2 - Operadores

  Exercicio 20. Dois amigos jogam na loteria toda semana. Escreva um programa que solicite a quantia com que cada um
  participou e o valor do premio a ser rateado em partes diretamente proporcionais as quantias de cada um deles. O programa
  deve imprimir quanto cada um dos amigos recebera caso sejam ganhadores.

prop_p1 = quant_p1 / (quant_p1 + quant_p2);
prop_p2 = quant_p2 / (quant_p1 + quant_p2);
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Digite a quantia do apostador 1: ");
rl.on('line', function (quant_p1Input) {
  const quant_p1 = parseFloat(quant_p1Input);

  console.log("Digite a quantia do apostador 2: ");
  rl.on('line', function (quant_p2Input) {
    const quant_p2 = parseFloat(quant_p2Input);

    console.log("Digite o valor do prêmio: ");
    rl.on('line', function (valor_premioInput) {
      const valor_premio = parseFloat(valor_premioInput);

      const prop_p1 = quant_p1 / (quant_p1 + quant_p2);
      const prop_p2 = quant_p2 / (quant_p1 + quant_p2);

      console.log(`\nO apostador 1 ganhou: R$ ${valor_premio * prop_p1.toFixed(2)}`);
      console.log(`O apostador 2 ganhou: R$ ${valor_premio * prop_p2.toFixed(2)}`);

      rl.close();
    });
  });
});