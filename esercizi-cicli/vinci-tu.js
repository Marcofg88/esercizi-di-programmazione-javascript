/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.*/

function somma(n){
  var tot=0;
  for(i=0;i<n;i++){
    var casuale = Math.floor((Math.random()*(6)+1));
    console.log(casuale);
    tot=tot+casuale;
  }
  return tot;
}

var g1 = somma(3);
var g2 = somma(3);

if (g1 > g2) {
  console.log("g1 ha vinto con " + g1 + "   g2  " + g2)

} else if (g2 > g1) {
  console.log("g2 ha vinto con " + g2 + "   g1  " + g1)

} else { console.log("pari " + g1 + "    g2  " + g2) }