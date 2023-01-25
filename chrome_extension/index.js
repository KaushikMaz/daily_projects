let myLeads=[];
const inputText=document.getElementById("input-el")

const inputBtn= document.getElementById("input-btn");
const ulEl=document.getElementById("ul");

inputBtn.addEventListener("click",()=>{
    myLeads.push(inputText.value)
    for (let i=0; i<myLeads.length ; i++){
        ulEl.innerHTML+="<li>" + myLeads[i] + "</li>"
        
    }
    
    
})

