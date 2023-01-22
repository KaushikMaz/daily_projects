
let cards=[]
let sum=0;
let hasBlackJack= false;
let isAlive=false;
let player={
    name:"Sam",
    chips:200
}
let message=" ";

let messageEl= document.getElementById("message")
let sumEl=document.querySelector("#sum")
let cardsEl=document.getElementById("cards")
let playerEl=document.getElementById("player")
playerEl.textContent= player.name + ": $" + player.chips

function randomCard(){
    let randomNum=Math.floor((Math.random()*13)) + 1;
    if (randomNum>10){
        return 10
    }else if(randomNum===1){
        return 11
    }else{
        return randomNum
    }
}

const startGame=()=>{
    isAlive=true;
    let firstCard=randomCard();
    let secondCard=randomCard();
    sum=firstCard + secondCard;
    cards=[firstCard, secondCard];
    renderGame()
}

const renderGame=()=>{
  
    cardsEl.textContent="Cards:"
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent="Sum:" + sum;


    if( sum<=20){
        message="Do you want to draw a new Card?"
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
    if(isAlive===true && hasBlackJack===false){
        let card=randomCard();
        sum+= card;
        cards.push(card)
    
        renderGame();

    }
    
}