fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent=`By:${data.user.name}`
})

fetch("https://www.coingecko.com/api/documentations/v3#/coins/dogecoin").then(
    res=>res.json())
    .then(data=>{
        console.log(data)
    })
    .catch(err=>console.error(err))