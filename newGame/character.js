import { getDiceRollArray } from "../newGame/utils.js";



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
    // this.Id=data.Id
    // this.name=data.name
    // this.avatar=data.avatar
    // this.health=data.health
    // this.diceCount=data.diceCount
    Object.assign(this,data)
    this.getCharacterHtml= function(){
        const {Id,name,avatar,health,diceCount}=this;
        const diceHtml = this.getDiceHtml(diceCount)

        return `<div class="character-card">
                    <h4 class="name"> ${this.name} </h4>
                    <img class="avatar" src="${this.avatar}" />
                    <div class="health">health: <b> ${this.health} </b></div>
                    <div class="dice-container">    
                        ${diceHtml}
                    </div>
                </div>`;
        }
    this.getDiceHtml= function(diceCount){
        return getDiceRollArray(diceCount).map(function(num){
            return `<div class="dice">${num}</div>`
    
        }).join("")
    }
    }

export default Character;