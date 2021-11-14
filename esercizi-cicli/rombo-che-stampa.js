/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
var n = 9;
var nspazi = Math.floor(n/2);
var spazi="";
var tempSpazi=nspazi;

for (var i=0;i<=n;i=i+2){
  spazi="";
  
    while(nspazi>0){
      spazi+="_";
      nspazi--;
    }

  document.write(spazi);

    
    for(var a=i;a>=0;a--){
      document.write("x");
    }
  document.write("<br>");
}

for (var e=n-2;e>=0;e=e-2){
  
  for(var f=e;f>=1;f--){
    document.write("x");
  }
document.write("<br>");
}