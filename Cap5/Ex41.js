/*
Capítulo 5 - Funcoes

  Exercício 41: Gregoriana para juliana: dados dia, mes e ano de uma data gregoriana, escreva uma funcao que
  converta essa data para a data juliana correspondente. Utilize a seguinte formula:


   Data Juliana =  (1461 * (ano + 4800 + (mes - 14) / 12)) / 4 +
    (367 * (mes - 2 - 12 * ((mes - 14) / 12))) / 12 -
    (3 * ((ano + 4900 + (mes - 14) / 12) / 100)) / 4 +
    dia - 32075
 */

    function greg_juli(dia_temp, mes_temp, ano_temp) {
        let juliana;
      
        juliana =
          (1461 * (ano_temp + 4800 + Math.floor((mes_temp - 14) / 12))) / 4;
        juliana += (367 * (mes_temp - 2 - 12 * Math.floor((mes_temp - 14) / 12))) / 12;
        juliana -= (3 * Math.floor((ano_temp + 4900 + Math.floor((mes_temp - 14) / 12)) / 100)) / 4;
        juliana += dia_temp - 32075;
      
        return juliana;
      }
      
      const readline = require('readline');
      
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      function converterParaJuliana() {
        rl.question("Digite o dia correspondente no formato dd/mm/aaaa: ", (answer) => {
          const [dia, mes, ano] = answer.split("/").map(Number);
      
          const dataJuliana = greg_juli(dia, mes, ano);
          console.log(`\nA data Juliana correspondente é: ${dataJuliana}`);
          rl.close();
        });
      }
      
      converterParaJuliana();