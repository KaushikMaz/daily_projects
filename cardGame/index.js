let deckId;
let computerScore=0;
let myScore=0;

const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const winner = document.getElementById("winner")
const remainingText = document.getElementById("remaining")
const computerScoreEl=document.getElementById("computer-score")
const myScoreEl=document.getElementById("my-score")

const handleClick=()=>{
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res=>res.json())
    .then(data=>{
        remainingText.textContent=`Total:${data.remaining}`
        drawCardBtn.disabled=false
        deckId=data.deck_id
     })
}
newDeckBtn.addEventListener("click",handleClick)
drawCardBtn.addEventListener("click",()=>{
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res=>res.json())
    .then(data=>{
        cardsContainer.children[0].innerHTML=
        `<img src=${data.cards[0].image} class="cards"/>`
        cardsContainer.children[1].innerHTML=
        `<img src=${data.cards[1].image} class="cards"/>`
        remainingText.textContent=`Remaining Cards:${data.remaining}`

        const cardWinner= determineWinnerCard(data.cards[0],data.cards[1])
        winner.textContent=cardWinner

        if(data.remaining===0){
            drawCardBtn.disabled=true
            if(computerScore>myScore){
                winner.textContent="Computer won the Game"
            }else if(myScore>computerScore){
                winner.textContent=" You won the Game"
            }else{
                winner.textContent=" It's a tie!!!!"
            }
        }
    })
})



function determineWinnerCard(card1, card2){
    const valueOptions=["2","3","4","5","6", "7", "8", "9","10", "JACK", "QUEEN", "KING", "ACE"]
    const cardValue1=valueOptions.indexOf(card1.value)
    const cardValue2=valueOptions.indexOf(card2.value)

    if(cardValue1>cardValue2){
        computerScore++
        computerScoreEl.textContent=`Computer Score: ${computerScore}`
        return "Computer Wins!"
    } else if(cardValue1<cardValue2){
        myScore++
        myScoreEl.textContent=`My Score: ${myScore}`
        return "You Win!!!"
    } else {
        return "War!!!"
    }
}

