



const hero={Id:"hero",name:"hero",avatar:"/newGame/images/wizard.png",health:60,diceRoll:[6,5,2],diceCount:3}

const monster={Id:"monster",name:"Orc",avatar:"/newGame/images/orc.png",health:10,diceRoll:[4,3],diceCount:2}



const renderCharacter=(data)=>{
    const {Id,name,avatar,health,diceRoll,diceCount}=data;
    const diceHtml=diceRoll.map(x=>`<div class="dice">${x}</div>`).join("")
    document.getElementById(Id).innerHTML=
    `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b>${health}</b></p>
        <div class="dice-container">${diceHtml}</div>
    </div> `
}

renderCharacter(hero)
renderCharacter(monster)


