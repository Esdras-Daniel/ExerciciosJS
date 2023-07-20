/*
Capítulo 5 - Funcoes

  Exercício 43: Juliana para gregoriana: Escreva uma funcao que converta uma data juliana em data gregoriana.
  A funcao devera encontrar o dia, mes e ano correspondente a data juliana que ela recebe como argumento e
  retornar um numero do tipo long no formato aaaammdd. O algoritmo e' o seguinte:

  B = DataJuliana + 68569
  N = (4 * B) / 146097
  B = B - ((146097 * N + 3) / 4)
  K = 4000 * (B + 1) / 1461001
  B = B - (1461 * K) / 4 + 31
  J = (80 * B) / 2447
  Dia = B - (2447 * J) / 80
  B = (J / 11)
  Mes = J + 2 - (12 * B)
  Ano = 100 * (N - 49) + K + B

  17/01/2016 - 2457405
  15/04/1825 - 2387732
  01/01/2001 - 2451911
   */

  function juli_greg(juliana) {
    let B, N, K, Dia, J, Mes, Ano, gregoriana;
  
    B = juliana + 68569;
    N = Math.floor((4 * B) / 146097);
    B = B - Math.floor((146097 * N + 3) / 4);
    K = Math.floor((4000 * (B + 1)) / 1461001);
    B = B - Math.floor((1461 * K) / 4) + 31;
    J = Math.floor((80 * B) / 2447);
    Dia = B - Math.floor((2447 * J) / 80);
    B = Math.floor(J / 11);
    Mes = J + 2 - 12 * B;
    Ano = 100 * (N - 49) + K + B;
  
    gregoriana = Ano * 10000 + Mes * 100 + Dia;
  
    return gregoriana;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function obterDataGregoriana() {
    rl.question("Digite uma data Juliana: ", (answer) => {
      const data_juliana = parseInt(answer);
  
      const data_gregoriana = juli_greg(data_juliana);
      console.log("\nA data Gregoriana correspondente é: ", data_gregoriana);
      rl.close();
    });
  }
  
  obterDataGregoriana();