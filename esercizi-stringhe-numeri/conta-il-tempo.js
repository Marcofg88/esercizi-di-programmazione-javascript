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
var tempo = 98960;   // 1 giorno 86400s, 1 ora 3600s, 1 minuto 60s

var giorni = tempo/86400;
console.log("giorni "+ Math.trunc(giorni));
tempo =tempo%86400;

var ore = tempo/3600;
console.log("ore "+ Math.trunc(ore));
tempo = tempo%3600;

var minuti = tempo/60;
console.log("minuti "+ Math.trunc(minuti));
tempo = tempo%60;

console.log("secondi "+ tempo);




