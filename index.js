import { menuArray } from "./data.js";

const plusBtn = document.getElementById("addBtn")

const orderArr = []



function menu() {
    let menuHtml =``

    menuArray.forEach((item) => {
        menuHtml +=`
        <div class="menuItem">
            <div class="foodImg">${item.emoji}</div>
                <div class="itemInfo">
                    <p class="itemName">${item.name}</p>
                    <p class="ingridients">${item.ingredients.join(', ')}</p>
                    <p>$${item.price}</p>
                </div>
            <div class="extMenu" id="addBtn">+</div>
        </div>
        `
    })
    return menuHtml
}


















function render (){
    document.getElementById("foodList").innerHTML = menu()
}


render()







