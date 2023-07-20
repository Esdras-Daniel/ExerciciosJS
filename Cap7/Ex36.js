/*
 Capítulo 7 - Matrizes

  Exercicio 36 - Escreva uma função de protótipo:

  void strins(char[], char, int);

  que insira o caractere ch na posicao pos da string str.
   */

  const readline = require('readline');

function strins(str, ch, pos) {
  if (pos >= str.length || pos < 0) {
    console.log("Posição inválida!");
    return;
  }

  const newStr = str.slice(0, pos) + ch + str.slice(pos);
  return newStr;
}

function le_string() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Digite uma string: ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function le_caractere() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Digite um caractere: ', (answer) => {
      rl.close();
      resolve(answer.charAt(0));
    });
  });
}

function le_inteiro(max) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      `Digite uma posição do caractere a ser substituído 0 < x < ${max}: `,
      (answer) => {
        rl.close();
        resolve(parseInt(answer));
      }
    );
  });
}

async function main() {
  const str = await le_string();
  const ch = await le_caractere();
  const pos = await le_inteiro(str.length);

  const newStr = strins(str, ch, pos);
  if (newStr) {
    console.log("Nova string:", newStr);
  }
}

main();