var oneCount;
var twoCount;
var threeCount;
var fourCount;
var fiveCount;
var sixCount;
var sumCount;

var oneText;
var twoText;
var threeText;
var fourText;
var fiveText;
var sixText;
var sumText;

var showVotesOnButton = false;
var logoOnClickCount = 0;

function logoOnClick() {
    logoOnClickCount = (logoOnClickCount + 1) % 4
    if (logoOnClickCount == 3) {
        showVotesOnButton = !showVotesOnButton;
    }
    if (showVotesOnButton) {
        showVotes();
    } else {
        hideVotes();
    }
}

window.onload = function () {
    oneCount = 0;
    twoCount = 0;
    threeCount = 0;
    fourCount = 0;
    fiveCount = 0;
    sixCount = 0;
    sumCount = 0;

    oneText = document.getElementById("one");
    twoText = document.getElementById("two");
    threeText = document.getElementById("three");
    fourText = document.getElementById("four");
    fiveText = document.getElementById("five");
    sixText = document.getElementById("six");
    sumText = document.getElementById("sum");

    sumText.innerHTML = "Instgesamt: " + sumCount;
}

function one() {
    oneCount++;
    sumCount++;
    sumText.innerHTML = "Instgesamt: " + sumCount;
    if (showVotesOnButton) {
        showVotes();
    } else {
        hideVotes();
    }
}
function two() {
    twoCount++;
    sumCount++;
    sumText.innerHTML = "Instgesamt: " + sumCount;
    if (showVotesOnButton) {
        showVotes();
    } else {
        hideVotes();
    }
}
function three() {
    threeCount++;
    sumCount++;
    sumText.innerHTML = "Instgesamt: " + sumCount;
    if (showVotesOnButton) {
        showVotes();
    } else {
        hideVotes();
    }
}
function four() {
    fourCount++;
    sumCount++;
    sumText.innerHTML = "Instgesamt: " + sumCount;
    if (showVotesOnButton) {
        showVotes();
    } else {
        hideVotes();
    }
}
function five() {
    fiveCount++;
    sumCount++;
    sumText.innerHTML = "Instgesamt: " + sumCount;
    if (showVotesOnButton) {
        showVotes();
    } else {
        hideVotes();
    }
}
function six() {
    sixCount++;
    sumCount++;
    sumText.innerHTML = "Instgesamt: " + sumCount;
    if (showVotesOnButton) {
        showVotes();
    } else {
        hideVotes();
    }
}

function showVotes() {
    oneText.innerHTML = oneCount;
    twoText.innerHTML = twoCount;
    threeText.innerHTML = threeCount;
    fourText.innerHTML = fourCount;
    fiveText.innerHTML = fiveCount;
    sixText.innerHTML = sixCount;
}

function hideVotes() {
    oneText.innerHTML = "";
    twoText.innerHTML = "";
    threeText.innerHTML = "";
    fourText.innerHTML = "";
    fiveText.innerHTML = "";
    sixText.innerHTML = "";
}