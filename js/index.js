"use strict";

import Card from "../modules/Card.js";
import Header from "../modules/Header.js";
import Modal from "../modules/Modal.js";


let data_films = [
    {
        name:"Хатико",
        url:"./img/1.jpg",
    },
    {
        name:"Джентльмены",
        url:"./img/2.webp",
    },
    {
        name:"Волк с Уолл-стрит",
        url:"./img/3.webp",
    },
]
document.querySelector(".wrapper").appendChild(new Header().wrapper)
data_films.forEach(data =>{
    let card = new Card(data);
    document.querySelector(".films__wrapper").appendChild(card.wrapper);
})

document.querySelectorAll(".modal").forEach(item =>{
    let modal = new Modal(item);
    console.log(modal.modalWrapper.querySelector(".form"))
    modal.modalWrapper.querySelector(".form")?.addEventListener("submit", (link) =>{
        link.preventDefault();
        let result = modal.validation(link.target); 
        if (result){
            link.target.reset()
            // create_card(result)
        }
    })
})


// let modal         = document.querySelectorAll(".modal"),
//     modal_close   = document.querySelectorAll(".modal__close"),
//     btn_open_card = document.querySelectorAll(".card__btn_open"),
//     btn_del_card  = document.querySelectorAll(".card__btn_del");

// modal_close.forEach(item_close=>{
//     item_close.addEventListener("click", link =>{
//         link.target.parentElement.parentElement.parentElement.classList.toggle("active")
//     })
// })

// document.querySelector(".header__form").addEventListener("click", ()=>{
//     // появление формы
//     modal[1].classList.toggle("active")
// })
// btn_open_card.forEach(item => {
//     item.addEventListener("click",function(link){
//         modal[0].classList.toggle("active")
//         return function(){
//             modal[0].querySelector(".modal__img-item").src    = link.target.parentElement.parentElement.querySelector(".card__image-item").src;
//             modal[0].querySelector(".modal__title").innerText = link.target.parentElement.parentElement.querySelector(".card__title").innerText;
//         }()
//     })
// })
// btn_del_card.forEach(item => {
//     item.addEventListener("click",function(link){
//         link.target.parentElement.parentElement.classList.add('animate');
//         setTimeout(() => link.target.parentElement.parentElement.remove(), 1000);
//     })
// })
// document.querySelector(".form").addEventListener("submit", function(link){
//     link.preventDefault();
//     let result = validation(this); 
//     if (result){
//         create_card(result)
//         link.target.reset()
//     }
// })

// function validation(form){
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

// function create_card(data_form){
//     let wrapper_div = document.createElement("div");
//     wrapper_div.classList.add("card");

//     wrapper_div.innerHTML = `
//                             <div class='card__title title'>
//                                 Пользователь:<span class="card__name">${data_form[0]}</span>
//                             </div>
//                             <div class='card__password title'>
//                                 Пароль:<span class="card__password-text">${data_form[1]}</span>
//                             </div>`;

//     document.querySelector(".users-info__wrapper").appendChild(wrapper_div);
// }