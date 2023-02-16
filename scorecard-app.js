let homeStoreScore = document.getElementById("home-score");
let guestStoreScore = document.getElementById('guest-score');
let scoreReset = document.getElementById('score-reset')
let homeScore = 0;
let guestScore = 0;

function increaseHomeScore1() {
    homeScore += 1
    homeStoreScore.textContent = homeScore;
}

function increaseHomeScore2() {
    homeScore += 2
    homeStoreScore.textContent = homeScore;
}

function increaseHomeScore3() {
    homeScore += 3
    homeStoreScore.textContent = homeScore;
}

function increaseGuestScore1() {
    guestScore += 1;
    guestStoreScore.textContent = guestScore;
}

function increaseGuestScore2() {
    guestScore += 2;
    guestStoreScore.textContent = guestScore;
}

function increaseGuestScore3() {
    guestScore += 3;
    guestStoreScore.textContent = guestScore;
}

function resetScore() {
    guestStoreScore.textContent = 0;
    homeStoreScore.textContent = 0;
}