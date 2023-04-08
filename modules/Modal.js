"use strict";

export default class Modal{
    constructor(data_form=false){
        this.mainWrapper = document.createElement("div");
        this.mainWrapper.classList.add("modalForm","modal", );

        this.bodyWrapper = document.createElement("div");
        this.bodyWrapper.classList.add("modalForm__body","modal__body");

        this.contentWrapper = document.createElement("div");
        this.contentWrapper.classList.add("modalForm__content", "modal__content");

        this.modalClose = document.createElement("span");
        this.modalClose.classList.add("modalForm__close", "modal__close")
        this.modalClose.innerText = "X";

        this.contentWrapper.appendChild(this.modalClose)
        if (data_form){
            this.contentWrapper.innerHTML = `
                <form class="form" action="#">
                    <h3 class="form__title title">Заполните ваши данные</h3>
                    <div class="form__inner">
                        <div class="form__item">
                            <label class="form__label" for="form__forName">Ваше имя</label>
                            <input class="form__input" id="form__forName" type="text" name="UserName" placeholder="Введите имя">
                        </div>
                        <div class="form__item">
                            <label class="form__label" for="form__forPassword">Ваш пароль</label>
                            <input class="form__input" id="form__forPassword" type="text" name="Password" placeholder="Введите пароль">
                        </div>
                        <button class="form__btn btn" type="submit">Отправить</button>
                    </div>
                </form>`;
            
        }else{
            this.contentWrapper.innerHTML = `
                <div class="modal__img block__img">
                    <img class="modal__img-item" src="" alt="img">
                </div>
                <div class="modal__title title"></div>`;
        }
        // modal_close.forEach(item_close=>{
            //     item_close.addEventListener("click", link =>{
            //         link.target.parentElement.parentElement.parentElement.classList.toggle("active")
            //     })
            // })
        this.mainWrapper.appendChild(this.bodyWrapper.appendChild(this.contentWrapper))
    }
}