document.querySelector("button").addEventListener("click", function() {
    var text = document.querySelector("#text").value;
    var textOut = document.createElement("p");
    textOut.innerHTML = spanify(text);
    document.body.appendChild(textOut);

});

function spanify(string) {
    var arr = string.split(" ");
    var out = "";
    arr.forEach(function(el) {
        out += "<span class=\"word\">" + el + "</span> ";
    });
    return out;
}
