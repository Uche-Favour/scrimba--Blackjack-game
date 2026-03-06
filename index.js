
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true; //for starting the game;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("card-el");

let playerEl = document.getElementById("userDashboard");


let player = {
    name: "Uche",
    chips: 0
}

// a function for returning a random card
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1;
    if (randomNumer > 10) {
        return 10;
    } else if (randomNumer === 1) {
        return 11;
    } else {
        return randomNumer;
    }
}


function startGame() {
    isAlive = true;
    player.chips = 20;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards:"
    // a for loop that renders out all the cards instead of just two
    for (i = 0; i < cards.length; i++){
          cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = `Sum: ${sum}`;
    playerEl.textContent = `${player.name} : ${player.chips}`; 

    if (sum <= 20 ) {
    message = "Do you want to draw a new card? 🙂";
    player.chips -= 5;
    } else if (sum === 21) {
    message = "You've got Blackjack! 🥳";
    hasBlackJack = true;
    player.chips += 7;
    } else {
    message = "You're out of the game! 😭";
    isAlive = false;

    }
    
    messageEl.textContent = message;

}

function newCard() {
   
   if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}



