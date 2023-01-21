let firstCard=10;
let secondCard=11;

let sum=firstCard + secondCard;
let hasBlackJack= false;
let isAlive=true;

let message=" ";
const startGame=()=>{

    if( sum<=20){
        message="Do you wnat to draw a new Card?"
    } else if( sum===21){
        message="Wooow! You got the blackJack!!"
        hasBlackJack= true;
    }else {
        message="You are out of the game!!"
        isAlive=false;
    }

    console.log(message)
}