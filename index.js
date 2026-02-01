let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

function startGame(){

    cardEl.textContent = `Cards: ${firstCard} 💠 ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
    message = "You've got Blackjack! 🥳"
    hasBlackJack = true
    } else {
    message = "You're out of the game! 😭"
    isAlive = false
    }
    
    messageEl.textContent = message;

}

function newCard() {
   
    let card = 6;
    // 2. Add the new card to the sum variable
    sum += card;
    // 3. Call startGame()
    startGame();
}



