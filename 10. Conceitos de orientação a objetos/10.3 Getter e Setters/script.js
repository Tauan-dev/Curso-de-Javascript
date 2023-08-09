class Cachorro {
  constructor(cor) {
    this.cor = cor;
  }
  get verCor() {
    return "A raça é " + this.cor;
  }
  set novaCor(value) {
    this.cor = value;
  }
}

let labrador = new Cachorro("sem cor definida");
console.log(labrador);
labrador.novaCor = "preto"; // altera o valor
console.log(labrador.verCor); // resgata o valor
