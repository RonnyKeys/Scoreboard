// For Home Score 

let hScoreEl = document.getElementById("hscore")

let homeScore = 0

function increment1() {
    homeScore = homeScore + 1
    hScoreEl.innerText = homeScore
}

function increment2() {
    homeScore = homeScore + 2
    hScoreEl.innerText = homeScore
}

function increment3() {
    homeScore = homeScore + 3
    hScoreEl.innerText = homeScore
}

let gScoreEl = document.getElementById("gscore")

let guestScore = 0

function gincrement1() {
    guestScore = guestScore + 1
    gScoreEl.innerText = guestScore
}
function gincrement2() {
    guestScore = guestScore + 2
    gScoreEl.innerText = guestScore
}
function gincrement3() {
    guestScore = guestScore + 3
    gScoreEl.innerText = guestScore
}

function resetHScore() {
    homeScore = 0
    hScoreEl.innerText = homeScore
}

function resetGScore() {
    guestScore = 0
    gScoreEl.innerText = guestScore
}
