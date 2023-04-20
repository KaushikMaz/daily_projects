

document.getElementById('btn-activity').addEventListener("click",function(){
    fetch("http://www.boredapi.com/api/activity/").then(response=>response.json())
    .then(data=>{
        document.getElementById("activity").textContent=data.activity
        document.body.classList.add("fun")
        setTimeout(()=>{
            document.body.classList.remove("fun")
        },2000)
    })
})