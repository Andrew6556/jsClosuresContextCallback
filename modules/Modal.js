"use strict";

export default class Modal{
    constructor(data_form=false){
        this.mainWrapper = document.createElement("div");
        this.mainWrapper.classList.add("modalForm","modal", );

        this.bodyWrapper = document.createElement("div");
        this.bodyWrapper.classList.add("modalForm__body","modal__body");

        this.contentWrapper = document.createElement("div");
        this.contentWrapper.classList.add("modalForm__content", "modal__content");
        if (data_form){
            this.contentWrapper.innerHTML = `
                <span class="modalForm__close modal__close">X</span>
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
            this.contentWrapper.querySelector(".form").addEventListener("submit", (link) =>{
                link.preventDefault();
                let result = this.validation(link.target); 
                if (result){
                    // create_card(result)
                    link.target.reset()
                }
            })
        }else{
            this.contentWrapper.innerHTML = `
                <span class="modalFilm__close modal__close">X</span>
                <div class="modal__img block__img">
                    <img class="modal__img-item" src="" alt="img">
                </div>
                <div class="modal__title title"></div>`;
        }
        // this.mainWrapper.appendChild(this.bodyWrapper.appendChild(this.contentWrapper))
        // this.window_visibility()
        
    }
    // validation(form){
    //     const all_inputs = form.querySelectorAll(".form__input");
    //     function error_input(input){
    //         let parent_div = input.parentElement
    //         parent_div.classList.add("form__item_error")
    
    //         let message_error = document.createElement("span")
    //         message_error.classList.add("form__error-text")
    //         message_error.innerText = "*Не заполнено данное поле";
    
    //         parent_div.appendChild(message_error)
    //     }
    //     function del_error(input){
    //         let parent_div = input.parentElement;
    //         if (parent_div.classList.contains("form__item_error")){
    //             parent_div.querySelector(".form__error-text").remove()
    //             parent_div.classList.remove("form__item_error")
    //         }
    //     }
    //     all_inputs.forEach(item =>{
    //         del_error(item)
    //         if (item.value == ""){
    //             error_input(item)
    //         }
    //     })
    //     const data_form = Array.from(all_inputs).map(item => item.value);
    //     return (data_form.includes("")) ? false : data_form;
    // }
    // window_visibility(){
    //     this.contentWrapper.querySelector(".modal__close").addEventListener("click", () =>{
    //         this.mainWrapper.classList.toggle("active")
    //     })
    // }
}