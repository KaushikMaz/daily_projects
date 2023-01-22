let firstCard=randomCard();
let secondCard=randomCard();
let cards=[firstCard,secondCard]
let sum=firstCard + secondCard;
let hasBlackJack= false;
let isAlive=true;

let message=" ";

let messageEl= document.getElementById("message")
let sumEl=document.querySelector("#sum")
let cardsEl=document.getElementById("cards")

function randomCard(){
    return Math.floor((Math.random()*13)) + 1;
}

const startGame=()=>{
    renderGame()
}

const renderGame=()=>{
  
    cardsEl.textContent="Cards:"
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
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
    let card=randomCard();
    sum+= card;
    cards.push(card)
    
    renderGame();
}