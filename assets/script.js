const products = [
    {
        id: 1,
        h2: "iPhone 9",
        h3: "An apple mobile which is nothing like apple",
        image: "./assets/images/iphone.png",
        old_price: "549$",
        price_after_sale: "477.85$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite.png"
    },

    {
        id: 2,
        h2: "iPhone 9",
        h3: "An apple mobile which is nothing like apple",
        image: "./assets/images/iphone.png",
        old_price: "549$",
        price_after_sale: "477.85$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite.png"
    },

    {
        id: 3,
        h2: "iPhone 9",
        h3: "An apple mobile which is nothing like apple",
        image: "./assets/images/iphone.png",
        old_price: "549$",
        price_after_sale: "477.85$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite.png"
    },

    {
        id: 4,
        h2: "iPhone 9",
        h3: "An apple mobile which is nothing like apple",
        image: "./assets/images/iphone.png",
        old_price: "549$",
        price_after_sale: "477.85$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite.png"
    },

    {
        id: 5,
        h2: "iPhone 9",
        h3: "An apple mobile which is nothing like apple",
        image: "./assets/images/iphone.png",
        old_price: "549$",
        price_after_sale: "477.85$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite.png"
    },

    {
        id: 6,
        h2: "iPhone 9",
        h3: "An apple mobile which is nothing like apple",
        image: "./assets/images/iphone.png",
        old_price: "549$",
        price_after_sale: "477.85$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite.png"
    },

    {
        id: 7,
        h2: "iPhone 9",
        h3: "An apple mobile which is nothing like apple",
        image: "./assets/images/iphone.png",
        old_price: "549$",
        price_after_sale: "477.85$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite.png"
    },

    {
        id: 8,
        h2: "iPhone 9",
        h3: "An apple mobile which is nothing like apple",
        image: "./assets/images/iphone.png",
        old_price: "549$",
        price_after_sale: "477.85$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite.png"
    },
]

i = 0
const ProductsContainer = document.querySelector(".products-container")
while (i < products.length) {
    ProductsContainer.innerHTML +=
        `<div class="card">
            <img class="card-img-top p-2 rounded-4" src="${products[i].image}">
            <div class="card-body">
                <h2 class= "card-title fs-2">${products[i].h2}</h2>
                <h3 class="card-text text-light-emphasis fs-5">${products[i].h3}</h3>
                <p class="card-text fs-2 text-success">${products[i].price_after_sale}
                    <span  class="fs-4 text-decoration-line-through text-danger">${products[i].old_price}</span>
                </p>
                <div class="button">
                <a class="btn btn-primary pt-3">
                <img src="${products[i].cart}" alt="Cart Icon" class="">
                </a>
                <p><img class="heart" src="${products[i].fav}" alt="Cart Icon" class=""></p>
            </div>
        </div>
    </div>`
    console.log(products[i])
    i += 1
}