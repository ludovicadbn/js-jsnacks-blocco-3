let i = 0;
let sum = 0;

while (i < 5){
  const num = Number(prompt("Inserire un numero"))
  sum += num;
  i++;
}

document.getElementById("result").innerHTML = `La somma dei numeri è ${sum}`