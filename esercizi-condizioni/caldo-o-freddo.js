/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var a = new Array(10,-2,31,22,15,-6,7);
var max =a[0];
var min =a[0];
for (var i=0;i<a.length;i++){
  if (max<a[i]) {max=a[i]};
  if (min>a[i]) {min=a[i]};
};
console.log(max,min);

console.log("massimo " + Math.max.apply(null,a));  //metodi x max e min in un array
console.log("minimo " + Math.min.apply(null,a));

