import characterData from "../newGame/data.js"
import Character from "../newGame/character.js"


// const hero={Id:"hero",name:"hero",avatar:"/newGame/images/wizard.png",health:60,diceCount:3}
// const monster={Id:"monster",name:"Orc",avatar:"/newGame/images/orc.png",health:10,diceCount:2}


// function getDiceHtml(diceCount){
//     return getDiceRollArray(diceCount).map(function(num){
//         return `<div class="dice">${num}</div>`

//     }).join("")
// }

    function render(){
        document.getElementById("hero").innerHTML=wizard.getCharacterHtml()
        document.getElementById("monster").innerHTML=orc.getCharacterHtml()
    }

    
    const wizard= new Character(characterData.hero)
    const orc= new Character(characterData.monster)
    render()

    
    document.getElementById("attack-button").addEventListener("click",function(){
        render()
    })
    


