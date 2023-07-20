/*
Capítulo 7 - Matrizes

  Exercicio 30 - Escreva a funçao de prototipo:

  int strchar(char[], char)

  que procure a primeira ocorrencia do caractere ch em str. A funçao retorna um numero inteiro
  indicando o indice do caractere, se for encontrado, ou -1, em caso contrario.
   */

  const readline = require('readline');

function strchar(str_temp, ch_temp) {
  for (let i = 0; i < str_temp.length; i++) {
    if (str_temp[i] === ch_temp) {
      return i;
    } else if (str_temp[i] === '\0') {
      break;
    }
  }
  return -1;
}

function le_caractere() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question("Digite o caractere que deseja validar na string: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function le_string() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question("Digite a string a ser validada: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function informa_indice(i_temp) {
  if (i_temp === -1) {
    console.log("A string não possui o char informado!");
  } else {
    console.log(`A string possui o char informado na posição ${i_temp}`);
  }
}

async function main() {
  const T = 80;
  const ch = await le_caractere();
  const str = await le_string();
  const indice = strchar(str, ch);
  informa_indice(indice);
}

main();