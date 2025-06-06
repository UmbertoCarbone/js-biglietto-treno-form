/* Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone(non stilizzati), realizziamo le specifiche scritte sopra.La risposta finale(o output) sarà anch’essa da scrivere in console.
    MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
    Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Confermate lettura come al solito e bon divertimento: */

// console.log("ciao") Prova corretto funzionamento del collegamento js.

console.log(km, age)
// 3 - Salvo i dati in variabili
let prezzo = km * 0.21
let underAge = 18
let overAge = 65
let sconto = 20
let sconto1 = 40

// 4 - Calcolare il prezzo con 2 decimali
let prezzoArrotondato = (prezzo.toFixed(2));
console.log(prezzoArrotondato)


// 5 - Verificare l'età per applicare eventuali sconti
if (age < underAge) {
    // 6 - Applicare sconto 20% per minorenni
    // prezzo = prezzo - (prezzo * 100 / sconto)
    prezzo -= prezzo * 0.2 // -= sottrai al valore attuale e assegna 
    console.log("minorenne", prezzo.toFixed(2));



} else if (age > overAge) {
    // 7 - Applicare sconto 40% per over 65
    prezzo -= prezzo * 0.4

    console.log("over65", prezzo.toFixed(2));
} else {

    // 8 - Output prezzo con massimo due decimali
    console.log("prezzo regolare", prezzo.toFixed(2));

}