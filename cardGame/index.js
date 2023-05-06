let deckId;

const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const winner = document.getElementById("winner")
const remainingText = document.getElementById("remaining")

const handleClick=()=>{
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("remaining").textContent=`Total:${data.remaining}`
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
        }
    })
})



function determineWinnerCard(card1, card2){
    const valueOptions=["2","3","4","5","6", "7", "8", "9","10", "JACK", "QUEEN", "KING", "ACE"]
    const cardValue1=valueOptions.indexOf(card1.value)
    const cardValue2=valueOptions.indexOf(card2.value)

    if(cardValue1>cardValue2){
        return "Card 1 Wins!"
    } else if(cardValue1<cardValue2){
        return "Card 2 Wins!!!"
    } else {
        return "War!!!"
    }
}

