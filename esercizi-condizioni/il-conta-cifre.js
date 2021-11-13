/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var num = Math.floor((Math.random()*(10000-1)));
console.log(num);
var a = num.toString();
console.log("il numero è a "+a.length+" cifre");
