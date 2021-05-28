let button = document.getElementById("btn");
let count = 0;

button.addEventListener("click", function(event) {


    count++;

    console.log(count);

    if (count <= 10) {

        let randomNumber1 = Math.ceil(Math.random() * 6);

        let randomNumber2 = Math.ceil(Math.random() * 6);

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 1 WIN";
        } else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = "Player 2 WIN";
        } else {
            document.querySelector("h1").innerHTML = "It's a DRAW the dealer Wins";
        }
        let num = document.getElementsByClassName("num");



        let img = document.getElementsByClassName("num")[0].src = "http://127.0.0.1:5500/images/dice" + randomNumber1 + ".png";
        let img1 = document.getElementsByClassName("num")[1].src = "http://127.0.0.1:5500/images/dice" + randomNumber2 + ".png";
    } else {
        alert("Hai giocato troppo!");
        button = document.getElementById("btn").innerHTML = "Non funziono piu!";
        button = document.getElementById("btn").style = "pointer-events : none";
    }

})