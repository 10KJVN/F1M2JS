let myInput = prompt("Vul je geboortejaar in: ");

let calc = (2021 - myInput);

if (calc >= 18){
    alert("Je bent 18+");
} else if(calc < 18){
    alert("Je bent nog geen 18");
}       
    
//countdown is 10, more of gelijk aan 1, in een while loop, kronkel haakje, countdown = countdown - 1, alert, haakje open haakje sluiten