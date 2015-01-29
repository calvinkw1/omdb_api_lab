$(document).ready(function() {
	
	$("form").on("submit", function(e) {
		e.preventDefault();
		var movie = $("input").val();
		$.getJSON("http://www.omdbapi.com/?t=" + movie).done(function(data) {
			console.log(data);
			$("ul").empty();
			if (data.Error === "Movie not found!") {
				$("ul").append("<li>" + movie + " was not found in this massive database! Try again stubby fingers!</li>");
				$(".movieName").val("");
			} else {
				$("ul").append("<li>Movie: " + data.Title + "</li><li>Year: " + data.Year + "</li><li>Actors: " + data.Actors + "</li><br><img src=" + data.Poster + ">");
				$(".movieName").val("");
			}
		});
	});



});
