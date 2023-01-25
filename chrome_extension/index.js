let myLeads=[];
const inputText=document.getElementById("input-el")

const inputBtn= document.getElementById("input-btn");
const ulEl=document.getElementById("ul");

inputBtn.addEventListener("click",saveLead=()=>{
    myLeads.push(inputText.value)
    console.log(myLeads)
})

for (let i=0;i<myLeads.length;i++){
    ulEl.innerHTML+="<li> myLeads[i] </li>"
}