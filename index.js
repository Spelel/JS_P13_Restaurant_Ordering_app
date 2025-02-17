import { menuArray } from "./data.js";

// let cartArry = []

document.addEventListener('click', (e)=> {
    if ((e.target.id)) {
        console.log(e.target.id)
        orderList(e.target.id)

    } 
})



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


function orderList (){
    let cartHtml = ``

    menuArray.map((info) => {
        cartHtml +=`
        <div class="yourOrder">Your order</div>
            <div class="orderListItems">
                
                <div class="oneItem">
                    <div id="menuItem">${info.name}</div>
                    <div>
                        <button class="removeBtn" id="removeBtn">remove</button>
                    </div>  
                    <div class="price" id="price">$${info.price}</div>
                </div>

                
                <div class="lineEndOrder"></div>
                
                
                <div class="receipt">
                    <div class="payValue">Total price:</div>
                    <div class="totalSum">$$</div>
                </div>
                
                <div class="btn">
                    <button class="completeOrderBtn">Complete order</button>
                </div>

            </div>
        `
    })
    return cartHtml
}















function render (){
    document.getElementById("foodList").innerHTML = menu()
    // document.getElementById("cartMenu").innerHTML = orderList()
}
render()






