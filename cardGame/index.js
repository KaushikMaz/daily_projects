let deckId;
const handleClick=()=>{
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res=>res.json())
    .then(data=>{
        deckId=data.deck_id
    })
}
document.getElementById("new-deck").addEventListener("click",handleClick)
document.getElementById("draw-cards").addEventListener("click",()=>{
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById.children[0].innerHTML=
        `<img src=${data.cards[0].image} class="cards"/>`
        document.getElementById.children[1].innerHTML=
        `<img src=${data.cards[1].image} class="cards"/>`
    })
})