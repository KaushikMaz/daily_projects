fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent=`By:${data.user.name}`
})

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.getElementById("crypto-names").innerHTML=
        `<img src=${data.image.small}/>
        <span>${data.name}</span>`

        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
function getCurrentTime(){
    
const date=new Date();
document.getElementById("time").textContent=date.toLocaleTimeString("en-US",{timeStyle:"short"})
}

setInterval(getCurrentTime,1000)

navigator.geolocation.getCurrentPosition(position=>{
    // console.log(position)
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}& units=imperial`)
    .then(res=>{
        if(!res.ok){
            throw Error("Weather data not available")
        } else{
            return res.json()
        }
    }).then(data=>{
        const iconURL=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        document.getElementById("weather").innerHTML=`<img src=${iconURL}/>`
        // console.log(data)
    }).catch(err=>console.error(err))
})