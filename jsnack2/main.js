// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N = Number(prompt("Inserisci un numero"))
let i = 0;
let arr = []
let counter = 0;
let arrMulti = []

while (i < N){
  arr.push(arrMulti);
  while (counter < 10){
    arrMulti.push(Math.floor(Math.random() * 100 + 1));
    counter++;
  }
  i++;
}

document.getElementById("result").innerHTML = JSON.stringify(arr);