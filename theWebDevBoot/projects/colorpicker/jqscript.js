/**
 * Convert the color game from DOM api and vanilla js to jquery
 * will be usesful for factoring and converting code
 */
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = $(".square");
var colorDisplay = $("#color");
var messageDisplay = $("#message");
var h1 = $("h1");
var resetButton = $('#reset');
var modeBtn = $(".mode");

init()

function init() {
    //Game mode event listener (easy or hard)
    modeBtn.on("click", function() {
        modeBtn.removeClass("selected");
        $(this).addClass("selected");
        if ($(this).text() === "Easy") {
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset();
        //console.log($(this).text());
    })

    //game logick and squares event listeners
    squares.on("click", function() {
        //clickedColor = $(this).css("background");
        game($(this))
    });
    resetButton.on("click", reset);
    reset();
}

// factor game logic into new function

function game(clickedSquare) {
    var clickedColor = clickedSquare.css("background-color")
    if (clickedColor === pickedColor) {
        messageDisplay.text("Correct!");
        squares.css("background", pickedColor);
        h1.css("background", clickedColor);
        resetButton.text("Play Again?");
    } else {
        clickedSquare.css("background", "#232323");
        messageDisplay.text("Try Again!");
    }

}

// make reset fucntion (sets up game state)
//first step generate random colors
// 2 '' pick color
// 3

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    squares.each(function(i) {
        if (colors[i]) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });
    changeSquares(colors);
    h1.css('background', "steelblue");
    resetButton.text("New Game");
    messageDisplay.text("");
    colorDisplay.text(pickedColor);
}


function changeSquares(color) {
    squares.each(function(i) {
        $(this).css("background", color[i])
    })
}

// functions from the previous app that don't rely on DOM api
function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand]
}

function generateRandomColors(num) {
    // make array
    var arr = []
    // add $num colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = randNum(256, 0);
    var g = randNum(256, 0);
    var b = randNum(256, 0);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}

function randNum(num, start) {
    return Math.floor(Math.random() * num + start);
}
