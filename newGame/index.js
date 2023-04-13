



const hero={Id:"hero",name:"hero",avatar:"/newGame/images/wizard.png",health:60,diceCount:3}

const monster={Id:"monster",name:"Orc",avatar:"/newGame/images/orc.png",health:10,diceCount:2}





function getDiceRollArray(diceCount) {
    // let newDiceRolls = [];
    // for (let i = 0; i < diceCount; i++) {
    //     newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
    // }
    // return newDiceRolls;
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random()*6)+1
})}

function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`

    }).join("")
}


// const renderCharacter=(data)=>{
//     const {Id,name,avatar,health,diceCount}=data;
//     const diceHtml=getDiceHtml(diceCount)
//     document.getElementById(Id).innerHTML=
//     `<div class="character-card">
//         <h4 class="name">${name}</h4>
//         <img class="avatar" src="${avatar}"/>
//         <p class="health">health: <b>${health}</b></p>
//         <div class="dice-container">${diceHtml}</div>
//     </div> `
// }

// renderCharacter(hero)
// renderCharacter(monster)
//Refactoring into a constructor function
function Character(data){
    this.Id=data.Id
    this.name=data.name
    this.avatar=data.avatar
    this.health=data.health
    this.diceCount=data.diceCount
    this.getCharacterHtml= function(){
        const {Id,name,avatar,health,diceCount}=this;
        const diceHtml = getDiceHtml(diceCount)

        document.getElementById(this.Id).innerHTML =
            `<div class="character-card">
                <h4 class="name"> ${this.name} </h4>
                <img class="avatar" src="${this.avatar}" />
                <div class="health">health: <b> ${this.health} </b></div>
                <div class="dice-container">    
                    ${diceHtml}
                </div>
            </div>`;
    }
    }

    
    const wizard= new Character(hero)
    const orc= new Character(monster)
    
    wizard.getCharacterHtml()
    orc.getCharacterHtml()


