/*Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()*/
casuale = Math.floor((Math.random()*(10-1)+1));  //.foloor prendo solo l intero
console.log(casuale);

var giocatore1=1 , giocatore2=9;
var diff1= casuale-giocatore1 , diff2= casuale-giocatore2;

if (diff1<0) {diff1 = diff1*-1;}  // se sn negativi li rendo positivi
if (diff2<0) {diff2 = diff2*-1;}
console.log(diff1,diff2);

if (casuale==giocatore1) console.log("g1 ha vinto");
else{
      if (casuale==giocatore2) console.log("g2 ha vinto");
      else{
        if(diff1>diff2) {console.log("g2 si è avvicinato di piu");}
        if(diff1<diff2) {console.log("g1 si è avvicinato di piu");}
        if(diff1==diff2){console.log("si sono avvicinati in egual modo");}
        
      }

}

 



