



const hero={Id:"hero",name:"hero",avatar:"/newGame/images/wizard.png",health:60,diceRoll:6}

const monster={Id:"monster",name:"Orc",avatar:"/newGame/images/orc.png",health:10,diceRoll:4}



const renderCharacter=(data)=>{
    document.getElementById(data.Id).innerHTML=
    `<div class="character-card">
        <h4 class="name">${data.name}</h4>
        <img class="avatar" src="${data.avatar}"/>
        <p class="health">health: <b>${data.health}</b></p>
        <div class="dice-container"><div class="dice"> ${data.diceRoll}</div></div>
    </div> `
}

renderCharacter(hero)
renderCharacter(monster)


