/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.

          
  http://www.imparareaprogrammare.it
*/
var giorno =5 , mese = 2;
var vmese = new Array(31,29,31,31,31,30,31,31,30,31,30,31);
var tot =0;
for(i=0;i<mese-1;i++){
  tot=tot+vmese[i];
}
tot=tot+giorno;
console.log(tot);
