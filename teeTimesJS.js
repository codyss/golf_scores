var scores_loaded

$.ajax({
url:"https://www.kimonolabs.com/api/9y69xxh4?apikey=REK0Ffj1XIg1BhGMU3wDHLBv9kQbB2ur",
crossDomain: true,
dataType: "jsonp",
success: function (response) {
  //Do something with the response
  //console.log(response.results.collection1);
  scores_loaded = response.results.collection1;
},
error: function (xhr, status) {
  //handle errors
}
});

function leaderboard(scores) {
    this.scores = scores;
}

leaderboard.prototype.clean = function () {
    var tr = ['<tr><th>Position</th><th>Player</th><th>Score</th><th>Thru</th><th>Round Score</th>'];
    for (var i = 0; i < this.scores.length; i++) {
        tr.push('<tr>');
        tr.push("<td>" + this.scores[i].position + "</td>")
        tr.push("<td>" + this.scores[i].player.text + "</td>")
        tr.push("<td>" + this.scores[i].round_score + "</td>")
        tr.push("<td>" + this.scores[i].hole + "</td>")
        tr.push("<td>" + this.scores[i].score + "</td>")
        tr.push('</tr>');
    };
    $('#output').append((tr.join('')));
}



/* **** Event Listeners/Handlers ****  */
$(document).ready(function () {
    
});


$(document).ready(function () {


    $('#load-scores').on('click', function () {
        var scoresObject = new leaderboard(scores_loaded);
        scoresObject.clean();   
    });


});



