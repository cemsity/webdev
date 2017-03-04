// click on button and return content
//
$(function() {
    var input = "";
    var displaySize = 0;
    $(".button").click(function() {
        if (displaySize <= 10) {
            var out = $(this).attr("value");
            var display = $(".input").text();
            if (out === "X" || out === "÷" || out === "-" || out === "+" || out === "%" || ) {

            }


            $(".input").text(display + out);
            displaySize++;
        }
    });
    $("#clear").click(function() {
        $(".input").text("");
        displaySize = 0;

    });
    //  $("#equal").click(function() {
    //    // take the stack and quer it
    // });
});


//Logic of the calculator ie Model of MVC (v=html; Control = jQuery)
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

}
