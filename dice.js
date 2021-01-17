    //The Player name
    var play1 = "Player 1";
    var play2 = "Player 2";

    //The function to roll the dice 
    function rollDice() { 

        setTimeout(function () { 
            var roll1 = Math.floor(Math.random() * 6) + 1; 
            var roll2 = Math.floor(Math.random() * 6) + 1; 

            document.querySelector(".pic1").setAttribute("src", 
                "dice" + roll1 + ".png"); 
            document.querySelector(".pic2").setAttribute("src", 
                "dice" + roll2 + ".png"); 

            if (roll1 === roll2) { 
                document.querySelector("h1").innerHTML = "Draw!"; 
            } 
            else if (roll1 < roll2) { 
                document.querySelector("h1").innerHTML 
             = (play2 + " WINS!"); 
            } 
            else { 
                document.querySelector("h1").innerHTML 
             = (play1 + " WINS!"); 

            } 

        }, 2500); 

    } 

