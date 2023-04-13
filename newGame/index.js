



const hero={Id:"hero",name:"hero",avatar:"/newGame/images/wizard.png",health:60,diceRoll:6}

const monster={Id:"monster",name:"Orc",avatar:"/newGame/images/orc.png",health:10,diceRoll:4}



const renderCharacter=(data)=>{
    const {Id,name,avatar,health,diceRoll}=data;
    document.getElementById(Id).innerHTML=
    `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b>${health}</b></p>
        <div class="dice-container"><div class="dice"> ${diceRoll}</div></div>
    </div> `
}

renderCharacter(hero)
renderCharacter(monster)


