/* Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            ...
            Mer 31
 Variante:
 passa direttamente il mese e calcola tu da quanti giorni è formato.*/
 var vgiorno = new Array("lun","mar","mer","gio","ven","sab","dom");
 var vmese = new Array(31,29,31,31,31,30,31,31,30,31,30,31);
 var mese = prompt("inserisci il numero del mese");
 //mese = parseInt(mese); converte in automatico
 var giorno = prompt("inserisci le prime tre lettere del giorno");
 var g = vgiorno.indexOf(giorno);

for(i=1;i<=vmese[mese-1];i++){
 
  console.log(" numero giorno del mese " + i + "  " + vgiorno[g])
  g++;
  if (g==7){g=0}

}


