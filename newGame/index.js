import characterData from "../newGame/data.js"
import Character from "../newGame/character.js"


// const hero={Id:"hero",name:"hero",avatar:"/newGame/images/wizard.png",health:60,diceCount:3}
// const monster={Id:"monster",name:"Orc",avatar:"/newGame/images/orc.png",health:10,diceCount:2}


// function getDiceHtml(diceCount){
//     return getDiceRollArray(diceCount).map(function(num){
//         return `<div class="dice">${num}</div>`

//     }).join("")
// }


function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    if(wizard.dead|| orc.dead){
        endGame()
    }
    render()
}

function endGame(){
    const endMessage = wizard.health === 0 && orc.health === 0 ?
    "No victors - all creatures are dead" :
    wizard.health > 0 ? "The Wizard Wins" :
    "The Orc is Victorious"

    const endEmoji= orc.dead?"🔮":"☠️"
    document.body.innerHTML = 
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 
}

    function render(){
        document.getElementById("hero").innerHTML=wizard.getCharacterHtml()
        document.getElementById("monster").innerHTML=orc.getCharacterHtml()
    }

    
   document.getElementById("attack-button").addEventListener("click",attack)


   const wizard= new Character(characterData.hero)
   const orc= new Character(characterData.monster)
   render()
    


