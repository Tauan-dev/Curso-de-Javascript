const validaMarca = /"Marca : Nike|Adidas|Puma"/;
console.log(validaMarca.test("Marca : Adidas"));
console.log(validaMarca.test("Marca : Lacoste"));
