class Banco {
  constructor(cliente, saldo) {
    this.cliente = cliente;
    this.saldo = saldo;
  }
  deposito(valor) {
    return this.saldo + valor;
  }
  saque(valor) {
    return this.saldo - valor;
  }
}

let santander = new Banco("Cleide", 4000);
console.log(santander.deposito(50));
console.log(santander.saque(300));
