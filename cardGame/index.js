let deckId;
const handleClick=()=>{
    fetch("https://deckofcardsapi.com/api/deck/")
    .then(res=>res.json())
    .then(data=>{
        deckId=data.deck_id
    })
}
document.getElementById("new-deck").addEventListener("click",handleClick)