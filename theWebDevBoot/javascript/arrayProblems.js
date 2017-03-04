// array problem set USE array.forEach()!

function printReverse(array) {
    for (var i = (array.length - 1); i >= 0; i--) {
        console.log(array[i]);
    }
}

// 1 ,1, 1

function isUniform(arr) {
    var first = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}
// for each does not work in isUniform becuase of scope;

function sumArray(array) {
    var answer = 0;
    array.forEach(function(number) {
        answer += number;
    });
    return answer;
}

function max(array) {
    var answer = array[0];
    array.forEach(function(number) {
        if (answer <= number) {
            answer = number;
        }
    });
    return answer;
}
