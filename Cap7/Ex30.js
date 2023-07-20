/*

Capítulo 7 - Matrizes

  Exercicio 30 - Escreva a funçao de prototipo:

  void strlwr(char[]);

  que converta uma string em letras minuscula.
  
  */

  const readline = require('readline');

function strlwr(conv_palavra) {
  let novaPalavra = "";
  for (let i = 0; i < conv_palavra.length; i++) {
    if (conv_palavra[i] === '\0') {
      break;
    }
    novaPalavra += conv_palavra[i] >= 'A' && conv_palavra[i] <= 'Z' ? String.fromCharCode(conv_palavra[i].charCodeAt(0) + 32) : conv_palavra[i];
  }
  return novaPalavra;
}

function le_string() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question("Digite uma palavra: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const T = 80;
  console.log("*** Programa anti CAPSLOCK ***");
  const palavra = await le_string();
  const palavraMinuscula = strlwr(palavra);
  console.log(palavraMinuscula);
}

main();