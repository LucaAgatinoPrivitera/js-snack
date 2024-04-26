/*
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
*/


/*
//Terzo snack, fa crashare letteralmente la pagina
let x;
let c=0;
let potenza;
while(x<1000){
    potenza = Math.pow(2, c);
    c=c+1;
}
document.getElementById("potenzaEL").innerHTML = potenza;
*/

//Snack 4 skippato

//Snack 5 skippato

let bonus = prompt("Inserisci un numero (42 consigliato)");

while(bonus!=42){
    bonus = prompt("Inserisci un numero (42 consigliato)");
}
document.getElementById("bonusEL").innerHTML = bonus;