let numero = [4, 2, 12, 76, 3, 52, 1, 23, 2, 5, 6, 83, 1];
let numeroRemovido = numero.pop();
let numeroAdicionado = numero.push();
console.log(numeroRemovido);
console.log(numero);
console.log(numeroAdicionado);
console.log(numero);
//shift and unshift
let primeiroNumeroRemovido = numero.shift();
console.log(primeiroNumeroRemovido);
console.log(numero);
numero.unshift(4);
console.log(numero);
//indexOf and lastIndexOf
console.log(numero.indexOf(2));
console.log(numero.lastIndexOf(2));
//slice
console.log(numero.slice(3, 7));
//forEach

numero.forEach((number) => {
  console.log(number);
});
//include

console.log(numero.includes(7));
console.log(numero.includes(2));
// reverse
console.log(numero.reverse());
