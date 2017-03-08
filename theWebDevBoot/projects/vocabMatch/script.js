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
var pickedWord = "";
var score = 0;
// element vars
var wordsDiv = $(".words");
var chosenDiv = $("#chosen");
var resetBtn = $("#reset");
var
