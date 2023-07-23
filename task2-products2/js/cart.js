let productsInCart = localStorage.getItem("productsInCart");
let productsCart = document.querySelector(".cart");
// let item = [];
let item = JSON.parse(productsInCart);
if (productsInCart) {
    drawCartProducts(item);
    //data in localStorage is string not objec because we convert it ----> JSON.stringfy(...)
    //and now we need to convert it to object to deal with it ---- JSON.parse(...)
}

function drawCartProducts(products) {
    // We will intalize variable to travarse on the array of the objects that is above
    let y = products.map((item,index) => {
        return `
        <!-- item-n  -->
        <div class="card shadow product_item my-4 w-25">
            <img class="card-img-top" src="${item.imageUrl}" alt="">
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-text">${item.discription}</p>
                <button href="" class="btn btn-danger addToCartBtn" onClick="removeFromCart(${index})">Remove from Cart</button>
            </div>
        </div>
        `
    })
    productsCart.innerHTML = y;
}


// var element = document.getElementById(`${item.id}`);
// element.parentNode.removeChild(element);

function removeFromCart(index) {
    //move products names to chopping cart icon
    item.splice(index, 1);
    localStorage.setItem("productsInCart", JSON.stringify(item));
    drawCartProducts(item)
}