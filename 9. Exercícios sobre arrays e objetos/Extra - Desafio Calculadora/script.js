let calculadora = {
  soma: function (par1, par2) {
    return par1 + par2;
  },
  sub: function (par1, par2) {
    return par1 - par2;
  },
  mult: function (par1, par2) {
    return par1 * par2;
  },
  div: function (par1, par2) {
    return par1 / par2;
  },
};

console.log(calculadora.soma(4, 2));
console.log(calculadora.sub(4, 2));
console.log(calculadora.mult(4, 2));
console.log(calculadora.div(4, 2));
