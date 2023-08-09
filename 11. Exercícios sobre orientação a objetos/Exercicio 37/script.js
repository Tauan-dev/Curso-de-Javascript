class Carrinho {
  constructor(itens, valorItem, quantidadeTotal, valorTotal) {
    valorTotal = 0;
    this.itens = itens;
    this.valorItem = valorItem;
    this.quantidadeTotal = quantidadeTotal;
    this.valorTotal = valorItem * quantidadeTotal;
  }
  adicionarItem(quantidade) {
    this.quantidadeTotal += quantidade;
    this.valorTotal = this.valorItem * this.quantidadeTotal;
  }
  removerItem(quantidade) {
    this.quantidadeTotal -= quantidade;
    this.valorTotal = this.valorItem * this.quantidadeTotal;
  }
}

americanas = new Carrinho("Arroz", 4.99, 7, "sem resposta");

console.log(americanas);
americanas.adicionarItem(6);
console.log(americanas);
americanas.removerItem(10);
console.log(americanas);
