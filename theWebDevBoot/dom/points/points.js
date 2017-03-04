// Display elements
var dis_points1 = document.querySelector("#play1");
var dis_points2 = document.querySelector("#play2");
var dis_games = document.querySelector("#games");
//input Elements
var in_numGames = document.querySelector("#num-games");
var in_play1 = document.querySelector("#btn-play1");
var in_play2 = document.querySelector("#btn-play2");
var in_reset = document.querySelector("#btn-reset");
//gamestate variables
var score1 = 0;
var score2 = 0;
var numGames = 5;
var gameWon = false;

//
in_numGames.addEventListener("change", function() {
    numGames = parseInt(in_numGames.value);
    dis_games.innerHTML = numGames;
    reset();
});

in_play1.addEventListener("click", function() {
    if (!gameWon) {
        score1++;
        dis_points1.textContent = score1;
        if (numGames === score1) {
            gameWon = true;
            dis_points1.classList.add("winner")
        }
    }

});

in_play2.addEventListener("click", function() {
    if (!gameWon) {
        score2++;
        dis_points2.textContent = score2;
        if (numGames === score2) {
            gameWon = true;
            dis_points2.classList.add("winner")
        }
    }

});

in_reset.addEventListener("click", reset);

function reset() {
    dis_points1.classList.remove("winner");
    dis_points2.classList.remove("winner");
    score1 = 0;
    score2 = 0;
    dis_points1.innerHTML = score1;
    dis_points2.innerHTML = score2;
    gameWon = false;
}
