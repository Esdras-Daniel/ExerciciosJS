/*
Capítulo 4 - Comandos de decisao

Exercício 18: Escreva um programa que encontre o menor inteiro positivo n que satisfaca as seguintes condicoes:

n / 3 = x inteiros e resto 2
n / 5 = y inteiros e resto 3
n / 7 = z inteiros e resto 4
*/

let i;

for (i = 0; ; i++) {
    if (i % 3 === 2 && i % 5 === 3 && i % 7 === 4) {
        break;
    }
}

console.log(`${i} % 3 = ${i % 3}, ${i} % 5 = ${i % 5}, ${i} % 7 = ${i % 7}`);