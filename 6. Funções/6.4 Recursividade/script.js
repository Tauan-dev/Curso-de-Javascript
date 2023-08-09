function recursion(a) {
  if (a - 1 < 2) {
    console.log("recursion parada");
  } else if (a % 2 == 0) {
    console.log("par" + a);
    recursion(a - 2);
  } else {
    console.log("impar" + a);
    recursion(a - 2);
  }
}
recursion(10);
