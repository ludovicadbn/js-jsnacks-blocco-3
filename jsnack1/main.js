let arr = [];
let sum = 0;

while (sum <= 50){
  const num = Number(prompt("Inserisci un numero"));
  arr.push(num);
  sum += num;
  if (sum > 50){
    arr.pop();
  }
}

document.getElementById("result").innerHTML = "Questa è la lista di numeri meno l'ultimo inserito, che avrebbe fatto diventare la somma degli elementi superiore a 50: " + JSON.stringify(arr);

