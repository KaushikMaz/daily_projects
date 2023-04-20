let postArray=[]
const form=document.getElementById("new-post")
const renderPost=()=>{
    const blogList=postArray.map(num=>{
        return(`<h2>${num.title}</h2>
                 <p>${num.body}</p>
                 <hr/>`)
     }).join(" ")
     document.getElementById("blog-list").innerHTML=blogList;

}

fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json())
.then(data=>{
    postArray= data.slice(0,5)
    renderPost()
    })

document.getElementById("new-post").addEventListener("submit",function(e){
    e.preventDefault()
    const postTitle=document.getElementById("post-title").value;
    const postBody=document.getElementById("post-body").value;
    const data={
        title:postTitle,
        body:postBody
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json"}})
    .then(res=>res.json()).then(post=>{
        postArray.unshift(post)
        renderPost()
    })
    form.reset()
})


