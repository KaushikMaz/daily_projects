import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref , push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const inputEl=document.getElementById("input-field")
const buttonEl=document.getElementById("btn")
const shoppingList=document.getElementById("shopping-list")

const clearInput=()=>inputEl.value="";
const addShoppingList=(items)=>{
    shoppingList.innerHTML+=`<li>${items}</li>`
}

buttonEl.addEventListener("click", function(){
    let inputvalue=inputEl.value;
    addShoppingList(inputvalue);
    clearInput();

})

