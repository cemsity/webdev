//
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector('#reset');
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    //MODE Event Listeners
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
            console.log(this.textContent);
        });

    }

    squares.forEach(function(box, i) {
        box.style.background = colors[i];
        box.addEventListener("click", function() {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct"
                changeSquares(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    });
    reset();
    resetButton.addEventListener("click", reset);

    colorDisplay.textContent = pickedColor;

}



function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    squares.forEach(function(box, i) {
        if (colors[i]) {
            box.style.display = "block";
            box.style.background = colors[i];
        } else {
            box.style.display = "none";
        }
    })
    h1.style.background = "steelblue";
    resetButton.textContent = "New Game"
    messageDisplay.textContent = "";
}




resetButton.addEventListener("click", reset);

colorDisplay.textContent = pickedColor;


function changeSquares(color) {
    squares.forEach(function(box, i) {
        box.style.background = color;
    });
}

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
