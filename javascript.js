let scores = { team1: 0, team2: 0};

function incrementScore(team) {
    scores[team]++
    document.getElementById(`score${team === 'team1' ? 1 : 2}`).textContent = scores[team];
}

document.getElementById("reset").addEventListener("click", function () {
    scores.team1 = 0;
    scores.team2 = 0;
    document.getElementById("score1").textContent = scores.team1;
    document.getElementById("score2").textContent = scores.team2;
});