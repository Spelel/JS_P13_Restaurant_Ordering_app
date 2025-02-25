import { menuArray } from "./data.js";

let cartArray = []

document.addEventListener('click', (e)=> {
    if (e.target.classList.contains("extMenuBtn")) {      
        addBtn(e.target.id)
        renderCart()
    } 
})

function addBtn(itemId){
    const selectedItem = menuArray.find(item => item.id === parseInt(itemId));

    if (selectedItem) {
        cartArray.unshift({
            name: selectedItem.name,
            price: selectedItem.price
        });
    }
    
    console.log(cartArray);
}


function menu() {
    let menuHtml =``

    menuArray.map((item) => {
        menuHtml +=`
        <div class="menuItem">
            <div class="foodImg">${item.emoji}</div>
                <div class="itemInfo">
                    <p class="itemName">${item.name}</p>
                    <p class="ingridients">${item.ingredients.join(', ')}</p>
                    <p>$${item.price}</p>
                </div>
            <div class="extMenu">
                <button class="extMenuBtn" id="${item.id}">+</button>
            </div>
        </div>
        `
    })
    return menuHtml
}

function cartMenu() {
    if (cartArray.length === 0) {
        return `<div class="yourOrder">Your cart is empty</div>`;
    }

    let cartHtml = `<div class="yourOrder">Your Order</div>`;

    const totalPrice = cartArray.reduce((sum, item) => sum + item.price, 0);

    cartArray.forEach((product, index)=> {
        cartHtml += `
            <div class="orderListItems">
                <div class="oneItem">
                    <div id="menuItem">${product.name}</div>
                    <div>
                        <button class="removeBtn" data-index="${index}">remove</button>
                    </div>  
                    <div class="price" id="price">$${product.price}</div>
                </div>
            </div>
        `;
    });

    cartHtml += `
    <div class="lineEndOrder"></div>
        <div class="receipt">
            <div class="payValue">Total price:</div>
            <div class="totalSum">$${totalPrice}</div>
        </div>
        <div class="btn">
            <button class="completeOrderBtn">Complete order</button>
        </div>
    `;

    return cartHtml;
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeBtn")) {
        const index = parseInt(e.target.getAttribute("data-index"));
        cartArray.splice(index, 1); // Remove the item
        renderCart(); // Re-render the cart
    }
});



function renderCart() {
    document.getElementById("cartMenu").innerHTML = cartMenu();
}


function render (){
    document.getElementById("foodList").innerHTML = menu()
    
}
render()






