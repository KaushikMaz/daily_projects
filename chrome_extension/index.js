let myLeads=[];
const inputText=document.getElementById("input-el")

const inputBtn= document.getElementById("input-btn");
const ulEl=document.getElementById("ul");
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("tab-btn") 

tabBtn.addEventListener("click",function(){
    // IN chrome tabs, run a query such that its active and is in the current window such that
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads);

})})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

const leadsFromStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromStorage){
    myLeads=leadsFromStorage
    render(myLeads)
}

inputBtn.addEventListener("click",()=>{
    myLeads.push(inputText.value)
    inputText.value=" ";
    localStorage.setItem("myLeads",JSON.stringify(myLeads))/* saving the input array into local storage*/
    render(myLeads);
    
    // console.log(localStorage.getItem("myLeads"))
})

function render(leads){
    let listItems=""
    for (let i=0; i<leads.length ; i++){
        // listItems+="<li><a href='"+myLeads[i]+"' target='_blank'>" + myLeads[i] + "</a></li>"
        /*Template strings*/
        listItems+=`<li>
                        <a href='${leads[i]}' target='_blank'>${leads[i]}
                        </a>
                    </li>`
        /*const li=document.createElement("li")
        li.textContent=myLeads[i]
        ulEl.append(li)*/
               
    }
    
    ulEl.innerHTML=listItems;

}
