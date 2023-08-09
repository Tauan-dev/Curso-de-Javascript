let prometheus = Promise.resolve(4 * 5);

prometheus.then((value) => console.log(`o resultado é ${value}`));

prometheus
  .then((value) => {
    return value / 2;
  })
  .then((value) => console.log(`o resultado é ${value}`));

let erroNaPromisse = Promise.resolve(new Error("Deu ruim"));

erroNaPromisse
  .then((value) => console.log(value))
  .catch((reason) => console.log("Erro:" + reason));

function verificaVariavel(number) {
  return new Promise((resolve, reject) => {
    if (number == 1) {
      resolve(console.log("Verificação concluida"));
    } else {
      reject(new Error("verificação errada"));
    }
  });
}

verificaVariavel(1);
verificaVariavel(2);
