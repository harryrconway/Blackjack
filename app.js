
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

playerEl.textContent = (`${player.name}: $${player.chips}`)

function getRandomCard() {
    let randomDiceRoll = Math.floor(Math.random() * 13) + 1;
    if (randomDiceRoll > 10) {
        return 10;
    } else if (randomDiceRoll === 1) {
        return 11;
    } else {
        return randomDiceRoll
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        msg = 'do you want me to draw a new card?';
    } else if (sum === 21) {
        msg = `You've got Blackjack!`
        hasWonGame = true;
    } else {
        msg = `You've lost!`
        isAlive = false;
    }
    messageEl.textContent = msg
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards);
        renderGame()
    }
}