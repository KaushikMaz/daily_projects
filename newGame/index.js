const heroID="hero";
const heroName="Wizard";
const heroAvatar="/newGame/images/wizard.png";
const heroHealth="60";
const heroDiceRoll=6;

const monsterID="monster";
const monsterName="Orc";
const monsterAvatar="/newGame/images/orc.png";
const monsterHealth="10";
const monsterDiceRoll=4;

const renderCharacter=(elementId,name,avatar,health,diceRoll)=>{
    document.getElementById(elementId).innerHTML=
    `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b>${health}</b></p>
        <div class="dice-container"><div class="dice"> ${diceRoll}</div></div>
    </div> `
}

renderCharacter(heroID,heroName,heroAvatar,heroHealth,heroDiceRoll)
renderCharacter(monsterID,monsterName,monsterAvatar,monsterHealth,monsterDiceRoll)


