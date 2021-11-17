/*Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)*/
function primo(n) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) { return false; }
  }
  return true;
}

function stampaPrimi(n) {
  if (primo(n)) {
    for (j = 2; j <= n; j++) {
      if (primo(j)) { console.log(j); }
    }
  }
}

var n = prompt("inserisci un numero magg di 0");
console.log(n);
var risposta = primo(n);
console.log(risposta);

stampaPrimi(n);
