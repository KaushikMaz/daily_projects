import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref , push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings={
    databaseURL:"https://playground-b356b-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const shoppingListDb=ref(database,"shoppingList")

const inputEl=document.getElementById("input-field")
const buttonEl=document.getElementById("btn")
const shoppingListEl=document.getElementById("shopping-list")

const clearInput=()=>inputEl.value="";
const clearShoppingList=()=>shoppingListEl.innerHTML="";
const addShoppingList=(items)=>{
    shoppingListEl.innerHTML+=`<li>${items}</li>`
}

buttonEl.addEventListener("click", function(){
    let inputvalue=inputEl.value;
    push(shoppingListDb,inputvalue)
    // addShoppingList(inputvalue);
    clearInput();

})

//This function onValue executes whenever there is any change in the db

onValue(shoppingListDb,function(snapshot){
    let itemsArray=Object.values(snapshot.val()) // Converting the objects into array

    clearShoppingList();// To clear the shoppinglist area after the onvalue function executes

    for(let i=0;i<itemsArray.length;i++){
        addShoppingList(itemsArray[i])
    }



})