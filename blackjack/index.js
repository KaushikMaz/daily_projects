let firstCard=10;
let secondCard=09;
let cards=[firstCard,secondCard]
let sum=firstCard + secondCard;
let hasBlackJack= false;
let isAlive=true;

let message=" ";

let messageEl= document.getElementById("message")
let sumEl=document.querySelector("#sum")
let cardsEl=document.getElementById("cards")

const startGame=()=>{
    renderGame()
}

const renderGame=()=>{
    cardsEl.textContent="Cards:" + cards[0] + " "+","+ " "+ cards[1];
    sumEl.textContent="Sum:" + sum;


    if( sum<=20){
        message="Do you wnat to draw a new Card?"
    } else if( sum===21){
        message=" You got the blackJack!!"
        hasBlackJack= true;
    }else {
        message="You are out of the game!!"
        isAlive=false;
    }

    messageEl.textContent=message;
}

const newCard=()=>{
    let card=6
    sum+= card;
    cards.push(card)
    renderGame();
}