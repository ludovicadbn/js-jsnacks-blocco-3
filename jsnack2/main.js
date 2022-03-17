// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

/*const N = Number(prompt("Inserisci un numero"))
let arr = []
let counter = 0;
let arrNum = []

while (arr.length < N){
  for (i = 0; i < 10; i++){
    arrNum.push(Math.floor(Math.random() * 100 + 1));
  }
  arr.push(arrNum);
}

document.getElementById("result").innerHTML = JSON.stringify(arr);*/

const N = Number(prompt("Inserisci un numero"))
let arrGen = []

while (arrGen.length < N){
  let arr = [];
  for (let c = 0; c < 10; c++){
    let numRandom = Math.floor(Math.random() * 100) + 1;
    arr.push(numRandom);
  }
  document.getElementById("result").innerHTML += JSON.stringify(arr);
  arrGen.push(arr);
}