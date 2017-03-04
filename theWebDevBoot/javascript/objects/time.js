var movies = [{
    name: "In Bruges",
    rating: 5,
    seen: true
}, {
    name: "Frozen",
    rating: 4.5,
    seen: true
}, {
    name: "Mad Max Fury Road",
    rating: 5,
    seen: false
}, {
    name: "LEs Miserables",
    rating: 3.5,
    seen: false
}]


movies.forEach(function(movie) {
    var output = "You have ";
    if (movie.seen) {
        output = output + "watched " + movie.name + " - " + movie.rating + " stars";
    } else {
        output = output + "not seen " + movie.name + " - " + movie.rating + " stars";
    }
    console.log(output);
});
