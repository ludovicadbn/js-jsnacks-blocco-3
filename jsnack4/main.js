// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. Interrompi il ciclo appena il nome è stato trovato.

const nomi = [
  "Robert",
  "Jennifer",
  "Rebecca",
  "Dennis",
  "Margaret",
  "Brian",
  "Julia",
  "Patrick",
  "Helen",
  "Brittany",
  "Ronald",
  "Kenneth",
  "Steven",
  "Stacy",
  "Jacob",
  "Daniel",
  "Cheryl",
  "Trevor",
  "Maria",
  "Seth"
]

let userName = (prompt("Inserisci il tuo nome"))
let invitatoTrovato = false;
let i = 0;

while (i < nomi.length){
  if (nomi[i] == userName) {
    invitatoTrovato = true;
  }
  i++;
}

if (invitatoTrovato == true){
  document.getElementById("result").innerHTML = "Puoi entrare";
} else {
  document.getElementById("result").innerHTML = "Non puoi entrare"
}
