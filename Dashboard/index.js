fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent=`By:${data.user.name}`
})

// const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
// const apiUrl = 'https://www.coingecko.com/api/documentations/v3#/coins/dogecoin';

// fetch(corsAnywhereUrl + apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the response data
//     document.getElementById("crypto").innerHTML=
//         `<img src=${data.image.small}/>
//         <span>${data.name}</span>`
    
//   })
//   .catch(err => {
//     // Handle any errors that occur during the request
//     console.error(err);
//   });

// This is not working due to cors policy.
fetch("https://www.coingecko.com/api/documentations/v3#/coins/dogecoin").then(
    res=>res.json())
    .then(data=>{
        document.getElementById("crypto").innerHTML=
        `<img src=${data.image.small}/>
        <span>${data.name}</span>`
    })
