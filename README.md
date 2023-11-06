# CALCOLATORE BIGLIETTO TRENO

Consegna dell'esercizio: 

---

```
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
```

---

Iniziamo a scomporre il problema in piccoli passaggi.

 1. Dichiariamo una variabile const **userKm** tramite prompt dove l'utente inserirà il valore dei km che desidera percorrere. Ricordiamoci di usare _parseInt()_ per trasformare la stringa in numero.
 
 2. Dichiariamo una variabile const **userAge** tramite prompt dove l'utente inserirà la propria età. Ricordiamoci di usare **parseInt()** per trasformare la stringa in numero.

 3. Calcolare il totale del prezzo, dichiarando una variabile di tipo let **ticketPrice** (la dichiariamo di tipo let perché potremmo riassegnare alla stessa variabile un altro valore nel caso in cui dovremmo applicare uno sconto), alla quale assegneremo il prodotto tra **userKm** e il fattore fisso che in questo caso è **€0.21 al km**.

 4. Dichiariamo 3 condizioni come segue:
    - se **userAge** è < di "18", l'operazione da effettuare sarà la sottrazione tra **ticketPrice** e 20%.
    - altrimenti se **userAge** è >=  di "65", l'operazione da effettuare sarà la sottrazione tra **ticketPrice** e 40%.
    - altrimenti **ticketPrice** sarà stampato senza effettuare ulteriori operazioni.

5. Stampiamo in console il valore di **ticketPrice** (usiamo il metodo _toFixed()_ che ci permette di selezionare il numero con massimo 2 decimali), preceduto dalla stringa "Il prezzo del tuo biglietto è: ".

L'esercizio è completato.