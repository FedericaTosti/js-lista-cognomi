// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// creo array con i vari cognomi
var listaCognomi = ["Szczesny", "Bonucci", "Chiellini", "Ronaldo", "Dybala", "Bernardeschi", "Pjanic", "Matuidi", "Higuain"];

// chiedo all'utente di inserire il suo cognome
var utenteCognome = prompt("Gentile utente inserisci il tuo cognome");

// inserisco nell'array il nuovo cognome
listaCognomi.push(utenteCognome);

// ordino l'array
listaCognomi.sort();

// stampo l'array ordinato e la posizione del nuovo cognome
document.getElementById("cognome").innerHTML = listaCognomi + "<br> Il tuo cognome (<span>" + utenteCognome + "</span>) in ordine alfabetico, si trova nella posizione n. " + (listaCognomi.indexOf(utenteCognome) + 1);


console.log(utenteCognome +": posizione n." + listaCognomi.indexOf(utenteCognome));
