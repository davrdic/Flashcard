
let currentStateDisplay = document.getElementById('current-state-display');
let wordDisplay = document.getElementById('word-display');
let definitionOneDisplay = document.getElementById('definition-one-display');
let definitionTwoDisplay = document.getElementById('definition-two-display');
let mainMenuButton = document.getElementById('main-menu-button');
let startGameButton = document.getElementById('start-game');
let nextWordButton = document.getElementById('next-word-button');
let definitionButton = document.getElementById('definition-button');

startGameButton.style.display = 'inline';
mainMenuButton.style.display = 'none';
nextWordButton.style.display = 'none';
definitionButton.style.display = 'none';

currentStateDisplay.innerText = 'Get ready to learn!';

let counter = 0;

mainMenuButton.addEventListener('click', function () {
    globalcard = new Card;
    currentStateDisplay.innerText = 'Get ready to learn!';
    wordDisplay.style.display = 'none'
    definitionOneDisplay.style.display = 'none'
    definitionTwoDisplay.style.display = 'none'
    startGameButton.style.display = 'inline';
    nextWordButton.style.display = 'none';
    definitionButton.style.display = 'none';
    mainMenuButton.style.display = 'none';
});

startGameButton.addEventListener('click', function () {
    counter = 0;
    GetRandomWord();
});

nextWordButton.addEventListener('click', function () {
    GetRandomWord();
});

definitionButton.addEventListener('click', function () {
    displayDefEx();
    definitionOneDisplay.style.display = 'block';
    definitionTwoDisplay.style.display = 'block';
    definitionButton.style.display = 'none';
    nextWordButton.style.display = 'inline';
    removeFlash(flashcards);
    if (flashcards.length === 0) {
        nextWordButton.style.display = 'none';
    }
});

function genRanIndex() {
    randomIndex = Math.floor(Math.random() * flashcards.length);
}

function displayWord() {
    wordDisplay.innerText = globalcard.name;
}

function displayDefEx() {
    definitionOneDisplay.innerText = globalcard.definitionone;
    definitionTwoDisplay.innerText = globalcard.definitiontwo;
}

function removeFlash(flashcards) {
    flashcards.splice(randomIndex, 1);
}

function setCardWordDisplay(card) {
    globalcard = card;
    displayWord();
    startGameButton.style.display = 'none';
    wordDisplay.style.display = 'block'
    definitionOneDisplay.style.display = 'none';
    mainMenuButton.style.display = 'inline';
    definitionTwoDisplay.style.display = 'none';
    nextWordButton.style.display = 'none';
    definitionButton.style.display = 'inline';
    currentStateDisplay.innerText = 'Word Count: ' + ++counter;
}