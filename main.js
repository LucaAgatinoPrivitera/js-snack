const a = prompt("inserisci la prima parola");
const b = prompt("inserisci la seconda parola");
let word;
if(a.length>b.length){
    word= a+b;
}
else{
    word = b+a;
}

document.getElementById("word").innerHTML = word;