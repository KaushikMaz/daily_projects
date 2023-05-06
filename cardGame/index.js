let deckId;
const handleClick=()=>{
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("remaining").textContent=`Remaining:${data.remaining}`
        deckId=data.deck_id
     })
}
document.getElementById("new-deck").addEventListener("click",handleClick)
document.getElementById("draw-cards").addEventListener("click",()=>{
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("cards").children[0].innerHTML=
        `<img src=${data.cards[0].image} class="cards"/>`
        document.getElementById("cards").children[1].innerHTML=
        `<img src=${data.cards[1].image} class="cards"/>`
        document.getElementById("remaining").textContent=`Remaining:${data.remaining}`

        const cardWinner= determineWinnerCard(data.cards[0],data.cards[1])
        document.getElementById("winner").textContent=cardWinner
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

