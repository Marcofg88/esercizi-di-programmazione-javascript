/*
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì ... 7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!
*/;
function giorno(input1){
switch (input1){
  case 1 : console.log("lunedi");
  break;
  case 2 : console.log("martedi");
  break;
  case 3 : console.log("mercoledi");
  break;
  case 4 : console.log("giovedi");
  break; 
  case 5 : console.log("venerdi");
  break; 
  case 6 : console.log("sabato");
  break;
  case 7 : console.log("domenica");
  break;
  default : console.log("errore");
}
}
giorno(6);
giorno(10);