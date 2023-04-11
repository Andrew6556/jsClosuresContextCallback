"use strict"

export default class Data{
    constructor(){
        this.wrapper = document.createElement("div")
        this.wrapper.classList.add("dataForm", "container")

        this.wrapperTitle = document.createElement("div");
        this.wrapperTitle.classList.add("dataForm__title", "title")
        this.wrapperTitle.innerText = "Данные пользователей";

        this.wrapperContent = document.createElement("div");
        this.wrapperContent.classList.add("dataForm__content")

        this.wrapper.appendChild(this.wrapperTitle)
        this.wrapper.appendChild(this.wrapperContent)
    }
    add_card(data_form){
        let wrapper_div = document.createElement("div");
        wrapper_div.classList.add("card");
        wrapper_div.innerHTML = `
                                <div class='card__title title'>
                                    Пользователь:<span class="card__name">${data_form[0]}</span>
                                </div>
                                <div class='card__password title'>
                                    Пароль:<span class="card__password-text">${data_form[1]}</span>
                                </div>`;
        document.querySelector(".dataForm__content").appendChild(wrapper_div);
    }
}