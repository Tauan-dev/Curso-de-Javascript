let dadoPassado = (dado) => {
  let tipo = typeof dado;
  if (tipo === "string") {
    console.log(`${dado} é uma string`);
  } else if (tipo === "number") {
    console.log(`${dado} é um number`);
  } else if (tipo === "boolean") {
    console.log(`${dado} é um boolean`);
  }
};
console.log(dadoPassado("pass"));
console.log(dadoPassado(19));
console.log(dadoPassado(true));
