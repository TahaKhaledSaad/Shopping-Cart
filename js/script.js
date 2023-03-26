// // localStorage.setItem('key', "value");
// // the station that the data of users exit, to do(chick, compare, any operation)
// // key--> should named as variables.

// // setItem --> to add new item of data
// localStorage.setItem('std1', "Taha");
// localStorage.setItem('std2', "Khaled");

// // getItem --> to git an item of data
// console.log(localStorage.getItem("std1"));
// console.log(localStorage.getItem("std2"));

// // removeItem --> to remove an item of data
// localStorage.removeItem("std2");

// // clear() --> to clear all items in local storage finally
// localStorage.clear();


////////////////////////////////////////////////////////////////////////////

let userInfo = document.querySelector("#user_info");
let userData = document.querySelector("#user");
let links = document.querySelector("#links");

if (localStorage.getItem("username")) {
    // i want to remove (sign in/up) icons to put user data
    links.remove();
    // userInfo has been taken (display:none;) i want to appear it
    userInfo.style.display = "flex";
    // go to localStorage and git the user name 
    userData.innerHTML = localStorage.getItem("username")
}


let logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", () => {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1500)
})
/**
 * Doxygen documentation extensions
 * 
 * 
 */

////////////////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".products");
let products = [
    {
        id: 1,
        name: "Product No.l",
        imageUrl: "./images/0bg.jpg",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque?"
    },
    {
        id: 2,
        name: "Product No.2",
        imageUrl: "./images/2bg.jpg",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque?"
    },
    {
        id: 3,
        name: "Product No.3",
        imageUrl: "./images/3bg.jpg",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque?"
    },
    {
        id: 4,
        name: "Product No.4",
        imageUrl: "./images/4bg.jpg",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque?"
    },
    {
        id: 5,
        name: "Product No.5",
        imageUrl: "./images/5bg.jpg",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque?"
    }
]

// to draw your data in shape on website you will use this way always 
// هنعمل الشكل الأساسي اللي هيطبع على اساسه كل العناصر إن شاء الله 

function drawItems() {
    // We will intalize variable to travarse on the array of the objects that is above
    let y = products.map((item) => {
        return `
        <!-- item-n  -->
        <div class="card w-25 shadow product_item my-4">
            <img class="card-img-top" src="${item.imageUrl}" alt="">
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-text">${item.discription}</p>
                <button href="" class="btn btn-primary addToCartBtn" onClick="addToCart(${item.id})">Add to Cart</button>
                <i class="far fa-heart"></i>
            </div>
        </div>
        `
    })
    allProducts.innerHTML = y;
}

//function that above does not work untill invoke it(trigger, call)
drawItems();

/** steps :-
 * 1: design first product template in html file and make it ready to be shawn.
 * 2: copy the html code of first project and put it in back taks ``.
 * 3: search the dynamic code as image change every time and name of the product ...ect.
 * 4: put products in it default place as ---> allProducts.innerHTML= y;
*/

////////////////////////////////////////////////////////////////////////////

let cartBtn = document.querySelector(".addToCartBtn");
var counter = document.querySelector(".counter");
var cartProductDiv = document.querySelector(".cart_products div")


// var addItem = [];
var addItem = (localStorage.getItem("productsInCart")) ? JSON.parse(localStorage.getItem("productsInCart")) : [];


if (addItem) {
    addItem.map((item) => {
        cartProductDiv.innerHTML += `<p><img class="w-25 rounded mr-2" src="${item.imageUrl}" alt="">${item.name}</p>`;
    })
    
    counter.innerHTML = addItem.length;
    counter.style.display = "block";
}

// we will chick that localStorage have data or none
if (localStorage.getItem = ("username")) {
    function addToCart(id) {
        //move products names to chopping cart icon
        let choosenItem = products.find((item) => item.id === id);
        cartProductDiv.innerHTML += `<p><img class="w-25 rounded mr-2" src="${choosenItem.imageUrl}" alt="">${choosenItem.name}</p>`;
        //*******

        //move products to localStorage to move it to chopping cart page later.
        addItem = [...addItem, choosenItem];
        localStorage.setItem("productsInCart", JSON.stringify(addItem));
        //*******

        //counter
        counter.innerHTML = addItem.length;
        counter.style.display = "block";
        //*******

    }
} else {
    window.location = "login.html"; // TODO This case dont work !!!
}

////////////////////////////////////////////////////////////////////////////

let cartIcon = document.querySelector(".cartIcon");
let cart_products = document.querySelector(".cart_products");

cartIcon.addEventListener('click', () => {
    if (cart_products.style.display == "block") cart_products.style.display = "none";
    else cart_products.style.display = "block";

})

////////////////////////////////////////////////////////////////////////////

// to move data from page to another page you should use --------> LocalStorage

// go to cart.js





