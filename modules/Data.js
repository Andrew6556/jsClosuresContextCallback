"use strict"

export default class Data{
    constructor(){
        this.wrapper = document.createElement("div")
        this.wrapper.classList.add("data")

        this.wrapperTitle = document.createElement("div");
        this.wrapperTitle.classList.add("data__title")
        this.wrapperTitle.innerText = "Данные пользователей";

        this.wrapperContent = document.createElement("div");
        this.wrapperContent.classList.add("data__content")

        this.wrapper.appendChild(this.wrapperTitle)
        this.wrapper.appendChild(this.wrapperContent)
    }
    adding_to_cart(card){
        console.log(1)
        let div_card = document.createElement("div")
        div_card.classList.add("card")
        div_card.innerHTML = card.innerHTML
        document.querySelector(".basket__content").appendChild(div_card)
    }
}