const myEmojis= ["👨‍💻", "⛷", "🍲"];
const emojiContainer=document.getElementById("emojicontainer")
const button= document.getElementById("push-btn")
const buttonTwo= document.getElementById("unshift-btn")
const removeBeginButton=document.getElementById("shift-btn")
const removeEndButton=document.getElementById("pop-btn")
const emojiInput=document.getElementById("emojiInput")


function renderEmojis(){
    emojiContainer.innerHTML=""
    for (let i=0;i<myEmojis.length;i++){
        const emoji= document.createElement("span")
        emoji.textContent=myEmojis[i];
        emojiContainer.append(emoji)
    }

}


button.addEventListener("click", function(){
    if(emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value=""
        renderEmojis()
        // console.log(myEmojis)

}})

buttonTwo.addEventListener("click", function(){
    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value=""
        renderEmojis()
        // console.log(myEmojis)
}})

removeBeginButton.addEventListener("click", function(){
    if(emojiInput.value){
        myEmojis.shift(emojiInput.value)
        emojiInput.value=""
        renderEmojis()
        // console.log(myEmojis)
}})

removeEndButton.addEventListener("click", function(){
    if(emojiInput.value){
        myEmojis.pop(emojiInput.value)
        emojiInput.value=""
        renderEmojis()
        // console.log(myEmojis)
}})