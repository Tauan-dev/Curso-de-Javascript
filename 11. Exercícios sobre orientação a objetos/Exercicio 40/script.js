class Conta {
  constructor(saldoCC, saldoCP, juros) {
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }
  deposito(valor, tipoConta) {
    if (tipoConta == "corrente") {
      this.saldoCC += valor;
      console.log("deposito feito na conta corrente");
    } else if (tipoConta == "poupança") {
      this.saldoCP += valor;
      console.log("deposito feito na poupança");
    }
  }
  saque(valor, tipoConta) {
    if (tipoConta == "corrente") {
      this.saldoCC -= valor;
      console.log("saque feito na conta corrente");
    } else if (tipoConta == "poupança") {
      this.saldoCP -= valor;
      console.log("saque feito na poupança");
    }
  }
  transferencia(valor) {
    this.saldoCP -= valor;
    this.saldoCC += valor;
  }
}

class ContaEspecial extends Conta {
  constructor(saldoCC, saldoCP, juros, jurosEspecial) {
    super(saldoCC, saldoCP, juros);
    this.jurosEspecial = jurosEspecial;
    if (jurosEspecial >= 0) {
      this.jurosEspecial = this.juros * 2;
    }
  }
}

let bancoDoBrasil = new Conta(3000, 1020, 2);

console.log(bancoDoBrasil);
bancoDoBrasil.deposito(400, "corrente");
console.log(bancoDoBrasil);
bancoDoBrasil.deposito(1400, "poupança");
console.log(bancoDoBrasil);

let santander = new ContaEspecial(400, 1200, 5, 0);
console.log(santander);
santander.deposito(400, "poupança");
console.log(santander);
