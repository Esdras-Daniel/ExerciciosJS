/*
  Capítulo 7 - Matrizes

  Exercicio 34 - Escreva a funçao de prototipo:

  void strinv(char[])

  que inverta os caracteres de uma string. Por exemplo: se a string for "ABCDEF", deve ser convertida para
  "FEDCBA"
   */

  const readline = require('readline');

function strinv(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function le_string() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Digite a string a ser invertida: ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function mostra_string(str) {
  console.log('String invertida:', str);
}

async function main() {
  const string_original = await le_string();
  const string_invertida = strinv(string_original);
  mostra_string(string_invertida);
}

main();