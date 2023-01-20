let cart = []

function addToCart(title, price,) {
    cart.push({productTitle: title, productPrice: price,
    productQuantity: 1})

    console.log(cart)
    
    // etter å ha lagt til et produkt, oppdater handle liste visning
    renderCart()
    //så må vi oppdatere label med antall produkter
    document.querySelector("#cart .label").innerHTML = cart.length
    document.querySelector("#cart-view").classList.remove("hidden")
}
//kommentar: funksjons metode for totalprice
function calculatePrice() {
    let total = 0
    cart.map(prod => total += prod.productPrice)
    document.getElementById("total").innerHTML = total
}

function renderCart() {
    // tom variabel for å bygge html til produkter
    let listHtml = ""
    let totalPrice = 0
    // gå gjennom cart-arrayen, lag li for hvert produkt
    cart.map((prod, index) => listHtml += `<li id="prod-${index}" >
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete" onClick="deleteProduct(${index})">x</button>
    </li>`)
    //kommentar: metode nr.2 for totalpris
    //cart.map(price => totalPrice += price.productPrice)

    //bruke en selector for å finne riktig ul, og skrive inn list html.
    document.querySelector("#cart-view ul").innerHTML = listHtml
    //document.querySelector("#total").innerHTML = totalPrice
    calculatePrice()

}

function deleteProduct(index) {
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(() => {
    cart.splice(index, 1)
    renderCart()
    }, 700)
    
}

function toggleCart() {
    document.querySelector("#cart-view").classList.toggle("hidden")
}




/*function Total(price){
    cart.map({productPrice: price++})
    document.getElementById("total").innerHTML = totalPrice
    
}*/

/*function total() {
    cart.map(price => totalPrice += ` <p>Total kr. <span id="total">${prod.price}</span>,-</p>`)
    document.getElementById("total").innerHTML = totalPrice
}*/

/*function total() {
    cart.map(productPrice)
}*/



/*function deleteProduct() {
    let del = ""
    cart.map(product => del += Array.splice())
    document.querySelector("delete").classList.remove("product")

}*/

