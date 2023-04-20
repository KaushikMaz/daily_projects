fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json())
.then(data=>{
    const postArray= data.slice(0,5)
    console.log(postArray)
    const blogList=postArray.map(num=>{
       return(`<h2>${num.title}</h2>
                <p>${num.body}</p>
                <hr/>`)
    }).join(" ")
    document.getElementById("blog-list").innerHTML=blogList;
})

document.getElementById("new-post").addEventListener("submit",function(e){
    e.preventDefault()
    const postTitle=document.getElementById("post-title").value;
    const postBody=document.getElementById("post-body").value;
    const data={
        title:postTitle,
        body:postBody
    }
    console.log(data)
})

