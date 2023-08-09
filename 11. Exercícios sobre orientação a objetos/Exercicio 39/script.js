class Carro {
  constructor(marca, cor, gasolinaRestante, metroAndado) {
    this.marca = marca;
    this.gasolinaRestante = gasolinaRestante;
    this.cor = cor;
    this.metroAndado = metroAndado;
  }

  dirigirCarro() {
    if (this.gasolinaRestante > 0) {
      for (let i = 0; i < this.gasolinaRestante; this.gasolinaRestante--) {
        if (this.metroAndado == 0) {
          console.log("Carro Novo");
        }
        this.metroAndado += 1;
        console.log("Foi rodado " + this.metroAndado + " metros");
        if (this.gasolinaRestante === i + 1) {
          console.log("Tanque Vazio");
        }
      }
    } else {
      console.log("Sem gasolina");
    }
  }
  abastecerCarro(litros) {
    this.gasolinaRestante = +litros;
  }
}

let convercivel = new Carro("BMW", "vermelho", 40, 100);
console.log(convercivel);
convercivel.dirigirCarro();
let popular = new Carro("Gol", "cinza", 50, 0);
console.log(popular);
popular.dirigirCarro();
let velho = new Carro("Chevett", "preto", 0, 1000);
console.log(velho);
velho.dirigirCarro();
velho.abastecerCarro(50);
velho.dirigirCarro();
