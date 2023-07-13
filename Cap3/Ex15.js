/*  Capítulo 3 - Laços

  Exercício 15: Escreva um programa que imprima os caracteres da tabela ASCII de codigos 32 a 255. O programa deve imprimir cada caractere, seu codigo
  decimal e seu codigo hexadecimal.
   */

// Usando laço for
for (let i = 32; i <= 255; i++) {
    console.log(`${String.fromCharCode(i)}\t${i}\t${i.toString(16)}`);
  }