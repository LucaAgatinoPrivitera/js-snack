//Primo snack
const a = prompt("inserisci la prima parola");
const b = prompt("inserisci la seconda parola");
let word;

if(a.length>b.length){
    word= a+b;
}
else{
    word = b+a;
}

document.getElementById("wordEL").innerHTML = word;

//Secondo snack
let i=0;
let numbers = 0;

while (i<10){
    let number = prompt("Inserisci un numero")
    numbers = numbers + parseInt(number);
    i=i+1;
    document.getElementById("numbersEL").innerHTML = numbers;
}