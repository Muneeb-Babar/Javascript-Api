
fetch('https://dummyjson.com/products')
.then(res=> res.json())
// .then(res=> console.log(res.products))
.then(res=>{
    for (i=0; i<res.products.length; i++){
        console.log(res.products[i])
        let myProducts=res.products[i]

        let getData=document.getElementById('getData')

        getData.innerHTML+=`<div class="card" style="width: 18rem;" onclick="singleCard(${myProducts.id})">
  <img src=${myProducts.thumbnail} class="card-img-top" alt="..." style="width: 100%; height:180px;">
  <div class="card-body">
    <h5 class="card-title">${myProducts.title}</h5>
    <p class="card-text">${myProducts.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `
    }
})
.catch(err=> console.log(err))

function singleCard(id){
    window.location.href="./product.html?productdetail="+id
}

