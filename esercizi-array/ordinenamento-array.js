/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/
var array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
var scambio;
var indice;

for (i = 0; i < array.length - 1; i++) {
  indice = i;

  for (k = i + 1; k < array.length; k++) {

    if (array[k] > array[indice]) {
      indice = k;
    }
  }
  scambio = array[i];
  array[i] = array[indice];
  array[indice] = scambio;

}

console.log(array);

