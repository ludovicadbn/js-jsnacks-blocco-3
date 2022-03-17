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