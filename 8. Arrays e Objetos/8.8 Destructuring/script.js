const pessoa = {
  idade: 19,
  nome: "Kraudio",
  altura: 1.7,
  cabelo: "calvo",
};

const { idade: ano, nome: fname } = pessoa;
console.log(fname);

// array

let numeros = [1, 5, 7, 2, 1, 7, 12];
let [numeroA, numeroB, numeroC, numeroD, numeroE] = numeros;
console.log(numeroA);
console.log(numeroD);
