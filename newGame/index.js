



const hero={Id:"hero",name:"hero",avatar:"/newGame/images/wizard.png",health:60,diceCount:3}

const monster={Id:"monster",name:"Orc",avatar:"/newGame/images/orc.png",health:10,diceCount:2}


function getDiceRollArray(diceCount) {
    let newDiceRolls = [];
    for (let i = 0; i < diceCount; i++) {
        newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDiceRolls;
}

function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`

    }).join("")
}


const renderCharacter=(data)=>{
    const {Id,name,avatar,health,diceCount}=data;
    const diceHtml=getDiceHtml(diceCount)
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


