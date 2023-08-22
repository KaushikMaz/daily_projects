let countNum=document.getElementById("count-el")
let countSave=document.getElementById("save-el")
let count=0

function increment(){
    count=count+1
    countNum.innerText=count
}

function save(){
   let countStr=count + " - "
   countSave.textContent += countStr
   countNum.textContent=0
   count=0

}
function reset(){
    countSave.textContent= "Previous Entries: "
    count=0
    countNum.textContent=0
}