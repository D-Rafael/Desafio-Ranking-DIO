informarRanking(543, 12);
// Função para calcular o Saldo de vitórias
function saldoDeVitorias(vitorias, derrotas) {
  let resultado = vitorias - derrotas;
  return resultado;
}

// Função para mostrar o ranking
function mostrarRankinkg(vitorias, derrotas) {
  let saldo = saldoDeVitorias(vitorias, derrotas);

  if (saldo <= 10) {
    return "Ferro";
  } else if (saldo >= 11 && saldo <= 20) {
    return "Bronze";
  } else if (saldo >= 21 && saldo <= 50) {
    return "Prata";
  } else if (saldo >= 51 && saldo <= 80) {
    return "Ouro";
  } else if (saldo >= 81 && saldo <= 90) {
    return "Diamante";
  } else if (saldo >= 91 && saldo <= 100) {
    return "Lendário";
  } else if (saldo >= 101) {
    return "Imortal";
  }
}

// Função de Saída
function informarRanking(vitorias, derrotas) {
  let ranking = mostrarRankinkg(vitorias, derrotas);
  console.log(`Voce tem ${vitorias} vitorias e está no ranking:${ranking}`);
}
