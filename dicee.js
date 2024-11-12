function rollDice() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var firstImageSrc = "images/dice" + randomNumber1 + ".png";
    if (randomNumber1 >= 1 && randomNumber1 <= 6) {
        $("img.img1").attr("src", firstImageSrc);
    }

    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    var secondImageSrc = "images/dice" + randomNumber2 + ".png";
    if (randomNumber2 >= 1 && randomNumber2 <= 6) {
        $("img.img2").attr("src", secondImageSrc);
    }

    if (randomNumber1 > randomNumber2) {
        $("h1").text("Juctătorul 1 câștigă!");
    } else if (randomNumber1 < randomNumber2) {
        $("h1").text("Jucătorul 2 câștigă!");
    } else {
        $("h1").text("Egalitate!");
    }
}

$(document).on("keydown click", rollDice);




    
