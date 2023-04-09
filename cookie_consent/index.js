const modal =document.getElementById("modal")
const modalCloseBtn=document.getElementById("modal-close-btn")
const form=document.getElementById("form")

setTimeout(() => {
    modal.style.display="inline"
    
}, 1500);

modalCloseBtn.addEventListener("click",function(){
    modal.style.display="none"
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()// It will help in hiding the data in url and stop the refresh after every submit click
})