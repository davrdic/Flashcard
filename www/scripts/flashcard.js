
let currentStateDisplay = document.getElementById('current-state-display');
let wordDisplay = document.getElementById('word-display');
let definitionDisplay = document.getElementById('definition-display');
let exampleDisplay = document.getElementById('example-display');
let mainMenuButton = document.getElementById('main-menu-button');
let startGameButton = document.getElementById('start-game');
let nextWordButton = document.getElementById('next-word-button');
let definitionButton = document.getElementById('definition-button');

startGameButton.style.display = 'inline';
mainMenuButton.style.display = 'none';
nextWordButton.style.display = 'none';
definitionButton.style.display = 'none';

currentStateDisplay.innerText = 'Get ready to learn!';

var randomIndex;

mainMenuButton.addEventListener('click', function () {
    flashcards = [];
    currentStateDisplay.innerText = 'Get ready to learn!';
    wordDisplay.style.display = 'none'
    definitionDisplay.style.display = 'none'
    exampleDisplay.style.display = 'none'
    startGameButton.style.display = 'inline';
    nextWordButton.style.display = 'none';
    definitionButton.style.display = 'none';
    mainMenuButton.style.display = 'none';
});

startGameButton.addEventListener('click', function () {
    GetRandomWord();
});

nextWordButton.addEventListener('click', function () {
    genRanIndex();
    displayWord();
    wordDisplay.style.display = 'block'
    definitionDisplay.style.display = 'none';
    exampleDisplay.style.display = 'none';
    nextWordButton.style.display = 'none';
    definitionButton.style.display = 'inline';
    currentStateDisplay.innerText = 'Flashcards left: ' + (flashcards.length - 1);
});

definitionButton.addEventListener('click', function () {
    displayDefEx();
    definitionDisplay.style.display = 'block';
    exampleDisplay.style.display = 'block';
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
    wordDisplay.innerText = flashcards[randomIndex].name;
}

function displayDefEx() {
    definitionDisplay.innerText = flashcards[randomIndex].definition;
    exampleDisplay.innerText = flashcards[randomIndex].example;
}

function removeFlash(flashcards) {
    flashcards.splice(randomIndex, 1);
}

function setDeckStartDisplay(deck) {
    flashcards = deck;
    startGameButton.style.display = 'none';
    nextWordButton.style.display = 'inline';
    mainMenuButton.style.display = 'inline';
    currentStateDisplay.innerText = 'Flashcards left: ' + (flashcards.length);
}