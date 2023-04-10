const modal =document.getElementById("modal")
const modalCloseBtn=document.getElementById("modal-close-btn")
const modalText=document.getElementById("modal-text")
const declineBtn=document.getElementById("decline-btn")
const modalSubmit=document.getElementById("modal-submit-btn")
const form=document.getElementById("form")

setTimeout(() => {
    modal.style.display="inline"
    
}, 1500);

modalCloseBtn.addEventListener("click",function(){
    modal.style.display="none"
})

declineBtn.addEventListener("mouseenter",function(){
    modalSubmit.classList.toggle("modal-btn-reverse")

})
form.addEventListener("submit",(e)=>{
    e.preventDefault()// It will help in hiding the data in url and stop the refresh after every submit click.
    
    const consentFormData= new FormData(form) 
    const fullName=consentFormData.get("fullName")

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="Images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 

    setTimeout(()=>{
        document.getElementById("upload-text").innerText=`
        Making the sale......`
    },1500)

    setTimeout(()=>{
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="Images/pirate.gif">
        </div>    `
    modalCloseBtn.disabled= false
    },3000)    
})