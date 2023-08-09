const terminaID = /\d+ID\b/;
console.log(terminaID.test("441223ID"));
console.log(terminaID.test(23461));
console.log(terminaID.test("lanid"));
console.log(terminaID.test("ID"));
