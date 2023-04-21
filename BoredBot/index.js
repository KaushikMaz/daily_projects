

document.getElementById('btn-activity').addEventListener("click",function(){
    fetch("https://www.boredapi.com/api/activity/")
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("activity").textContent=data.activity
        document.body.classList.toggle("fun")//Trying add and toggle interchangeably
        setTimeout(()=>{
            document.body.classList.remove("fun")
        },2000)
    })
})