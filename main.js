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



//Terzo snack, fa crashare letteralmente la pagina
let c = 0;
let potenza = 0;
// while((potenza*2)<1000){ oppure riga 37 con if
while (potenza < 1000) {
    document.getElementById("potenzaEL").innerHTML += " " + potenza;
    potenza = Math.pow(2, c);
    c = c + 1;
    //Altra soluzione agganciato qui sotto
    /*if (potenza < 1000) {
        document.getElementById("potenzaEL").innerHTML += " " + potenza;
    }*/

    
    /*Altra soluzione
    let c = 1;
    let potenza = 1;
    // while((potenza*2)<1000){ oppure riga 37 con if
    while (potenza < 1000) {
        document.getElementById("potenzaEL").innerHTML += " " + potenza;
        potenza = Math.pow(2, c);
        c = c + 1;
        */
}
//Snack 4 skippato

//Snack 5 skippato

/*
let bonus = prompt("Inserisci un numero (42 consigliato)");

while(bonus!=42){
    bonus = prompt("Inserisci un numero (42 consigliato)");
}

document.getElementById("bonusEL").innerHTML = bonus;
*/