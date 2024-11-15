// Função para calcular o montante final com juros compostos
function calculateCompoundInterest() {
  // Captura os valores de entrada
  const initialAmount = parseFloat(document.getElementById("initialAmount").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100; // Convertendo de porcentagem para decimal
  const periods = parseInt(document.getElementById("periods").value);
  const contribution = parseFloat(document.getElementById("contribution").value);

  // Verifica se todos os valores são válidos
  if (isNaN(initialAmount) || isNaN(rate) || isNaN(periods) || isNaN(contribution)) {
    document.getElementById("result").innerText = "Por favor, insira valores válidos.";
    return;
  }

  // Calcula o montante final usando a fórmula correta de juros compostos com contribuições
  let finalAmount = initialAmount * Math.pow(1 + rate, periods) + 
                    contribution * ((Math.pow(1 + rate, periods) - 1) / rate);

  // Arredonda para 2 casas decimais para precisão
  finalAmount = finalAmount.toFixed(2);

  // Exibe o resultado
  document.getElementById("result").innerText = `Montante Final: R$ ${finalAmount}`;
}
console.log("Valor Inicial:", initialAmount);
console.log("Taxa de Juros:", rate);
console.log("Número de Períodos:", periods);
console.log("Contribuição Mensal:", contribution);
console.log("Montante Final Calculado:", finalAmount);
