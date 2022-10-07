fetch("https://api.unsplash.com/photos/?client_id=KC3jix5IhWNNy3zYFnDFoQFl0PmBlXcqC_fnq5dXwIo")
.then(res=>res.json())
.then(res=>{
    let body = document.querySelector("body")
    

    res.forEach(item => {
        let tag = `
        <div class="card">
        <a target="_blank" href="${item.links.download}"><img src="${item.links.download}" alt="" class="img"></a>
        <p class="text">lorem</p>
        </div>
        `

       body.innerHTML+= tag
    });
    

})


