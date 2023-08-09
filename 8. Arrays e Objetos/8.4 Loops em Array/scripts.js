let precos = [10, 40, 12, 50, 58, 372, 18, 17, 53, 27, 85, 16];

for (let i = 0; i <= precos.length; i++) {
  console.log(precos[i]);
  if (precos[i] < 30) {
    console.log(`${precos[i]} esta barato`);
  }
}
