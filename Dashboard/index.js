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
