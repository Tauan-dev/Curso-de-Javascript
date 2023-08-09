const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(validaIP.test("123.4.0.1"));
console.log(validaIP.test("23435.112441.81234421.912321"));
console.log(validaIP.test("akdkdnqo"));
console.log(validaIP.test("1111.1.1.1"));
