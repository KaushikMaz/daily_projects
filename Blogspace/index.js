fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json())
.then(data=>{
    const postArray= data.slice(0,5)
    console.log(postArray)
    const blogList=postArray.map(num=>{
       return(`<h3>${num.title}</h3>
                <p>${num.body}</p>
                <hr/>`)
    }).join(" ")
    document.getElementById("blog-list").innerHTML=blogList;
})
