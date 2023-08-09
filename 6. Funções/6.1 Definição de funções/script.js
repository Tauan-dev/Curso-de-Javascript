function saudacao() {
  console.log("bom dia");
}
saudacao();

function subtracao(a, b) {
  return a - b;
}
console.log(subtracao(7, 2));

function verificarFuncionario(nome, cargo, empregado) {
  if (empregado == true) {
    return console.log(
      `bom dia ${nome}, tenha um otimo de de trabalho como ${cargo}`
    );
  } else {
    console.log("não esta efetivado");
  }
}

verificarFuncionario("Kleber", "pedreiro", true);
verificarFuncionario("Airton", "pedreiro", false);
