/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.
  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)
  http://www.imparareaprogrammare.it
*/
var tempo = 12560;

var giorni = tempo/86400;
console.log("giorni "+ Math.trunc(giorni));
restoGiorni =tempo%86400;

var ore = restoGiorni/3600;
console.log("ore "+ Math.trunc(ore));
var restoOre = restoGiorni%3600;

var minuti = restoOre/60;
console.log("minuti "+ Math.trunc(minuti));




