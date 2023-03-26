let productsInCart = localStorage.getItem("productsInCart");
let productsCart = document.querySelector(".cart");

if (productsInCart) {
    //data in localStorage is string not objec because we convert it ----> JSON.stringfy(...)
    //and now we need to convert it to object to deal with it ---- JSON.parse(...)
    let item = JSON.parse(productsInCart);
    drawCartProducts(item);
}

function drawCartProducts(products) {
    // We will intalize variable to travarse on the array of the objects that is above
    let y = products.map((item) => {
        return `
        <!-- item-n  -->
        <div class="card w-25 shadow product_item my-4">
            <img class="card-img-top" src="${item.imageUrl}" alt="">
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-text">${item.discription}</p>
                <button href="" class="btn btn-danger addToCartBtn" onClick="removeFromCart(${item.id})">Remove from Cart</button>
            </div>
        </div>
        `
    })
    productsCart.innerHTML = y;
}


// var element = document.getElementById(`${item.id}`);
// element.parentNode.removeChild(element);

function removeFromCart(id) {
    //move products names to chopping cart icon
    let theItem = products.find((item) => item.id === id);
    console.log(theItem.id)
}