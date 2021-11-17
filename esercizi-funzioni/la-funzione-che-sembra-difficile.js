/*
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4
*/
function kesima(n, k) {
  n = n.toString();
  var lunghezza = n.length;
  if(k>lunghezza){return 0; }
  console.log(n[lunghezza - k]);
}

var n = 456789, k = 3;
kesima(n, k);

