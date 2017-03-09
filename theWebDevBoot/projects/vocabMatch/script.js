/**
 * Script and logic for vocab pick
 */
/// Intial dictionary
var diction = [
    ["the cat", "le chat"],
    ["the dog", "le chien"],
    ["the tree", "l'arbre"],
    ["the book", "le livre"],
    ["the girl", "la fille"],
    ["the boy", "le garçon"],
    ["the woman", "la femme"],
    ["the apple", "la pomme"],
    ["to eat", "manger"],
    ["to be", "être"],
    ["black", "noir"],
    ["the dress", "la robe"],
    ["to drink", "boire"],
    ["the child", "l'enfant"],
    ["to love", "aimer"],
    ["red", "rouge"]
]

/// data vars
var numSquares = 6;
var pickedWord = '';
var words = [];
var score = 0;
var language = 0;
// element vars
var scoreDis = $("#score");
var squaresBtn = $(".square");
var wordsDis = $(".words");
var chosenDis = $(".chosen");
var resetBtn = $("#reset");
var messageDis = $("#message");


// hook up squares button
squaresBtn.on('click', function() {
   var selected = $(this).children().text();
   console.log(selected);
   if (selected === pickedWord[1]){
      score++;
      messageDis.text("Bon Travail");
      scoreDis.text(score);
      setup();
   } else {
      messageDis.text("Mal Chance");
      score--;
      scoreDis.text(score);
      setup();
   }
});
setup();
resetBtn.on('click', function() {
    setup();
});

function setup() {
    words = pickWords(numSquares);
    pickedWord = chooseWord(words);
    display();

}

function display() {
    wordsDis.each(function(index) {
        $(this).text(words[index][1]);

    })
    chosenDis.text(pickedWord[language]);
}

function chooseWord(list) {
    return list[randNum(words.length, 0)]
}

function pickWords(num) {
    var arr = [];
    var newWordPair = [];
    while (arr.length < num) {
        newWordPair = randWord();
        if (arr.indexOf(newWordPair) == -1) {
            arr.push(newWordPair);
        }
    }
    return arr;
}

function randWord() {
    return diction[randNum(diction.length, 0)];
}

function randNum(num, start) {
    return Math.floor(Math.random() * num + start);
}
