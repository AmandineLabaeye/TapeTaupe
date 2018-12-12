/**
 * Created by sstienface on 03/12/2018.
 */

let Seconde = "00";

let Times;

let HoleAlea;

let TempsAlea;

let Score = 0;

let TrouRdm;

$("#resetGame").hide();

$(".game").hide();

// Trou
const holes = $(".hole"); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";

// Score
const scoreBoard = $(".score"); //utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";

// Taupes
const moles = $(".mole"); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";

function Timer() {

    Seconde++;

    Times = setTimeout(Timer, 1000);

    $("#Temps").html(Seconde + " secondes");

    if (Seconde === 10) {

        clearTimeout(Times);

        $(".game").fadeOut();

        $("#resetGame").fadeIn();

        holes.eq(HoleAlea).removeClass("up");

    }

}

function startGame() {

    Timer();

    $("#startGame").fadeOut();

    TrouRandom();

    $(".game").fadeIn();

}

$("#startGame").click(function () {

    startGame();

});

function TrouRandom() {

    HoleAlea = Math.floor(Math.random() * 6);

    holes.eq(HoleAlea).addClass("up");

}

moles.click(function () {

    TempsAlea = Math.floor(Math.random() * 800 + 200);

    Score++;

    scoreBoard.html(Score);

    Remove();

    TrouRdm = setTimeout(TrouRandom, TempsAlea);

});

function Remove() {

    holes.eq(HoleAlea).removeClass("up");

}

function Reset() {

    $("#resetGame").slideUp();

    $("#startGame").slideDown();

    Score = 0;

    scoreBoard.html("0");

    Seconde = "00";

}

$("#resetGame").click(function () {

    Reset();

});