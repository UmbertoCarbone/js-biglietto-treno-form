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
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole. */

const resultnomecognome = document.querySelector("#nomecognome")

const kmDaPercorrere = document.querySelector("#kmDaPercorrere")

const fasciaeta = document.querySelector("#autoSizingSelect")

const press_btn = document.querySelector("#pressButton");



console.log(resultnomecognome)
console.log(kmDaPercorrere)
console.log(fasciaeta)
console.log(press_btn)




/**
 * Al click eseguo la funziona che calcola il prezzo e lo stampa in pagina!
 */

press_btn.addEventListener('click', () => {
    /*  console.log('cliccato'); */

    const km = Number(kmDaPercorrere.value);

    const age = Number(fasciaeta.value);

    const carrozza = Math.floor(Math.random() * 9) + 1;

    const codiceBiglietto = Math.floor(Math.random() * 99999) + 1;



    let prezzo = km * 0.21
    let underAge = 18
    let overAge = 65

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


        console.log("prezzo regolare", prezzo.toFixed(2));

    }


    document.getElementById("carrozza").innerText = carrozza;

    document.getElementById("code").innerText = codiceBiglietto;

    document.getElementById("result").innerText = (prezzo.toFixed(2) + "€");

    document.getElementById("nomecompleto").innerText = resultnomecognome.value;



})











