"use strict";

let modal         = document.querySelectorAll(".modal"),
    modal_close   = document.querySelectorAll(".modal__close"),
    btn_open_card = document.querySelectorAll(".card__btn_open"),
    btn_del_card  = document.querySelectorAll(".card__btn_del");

modal_close.forEach(item_close=>{
    item_close.addEventListener("click", link =>{
        // Удаление класса внезависмости от формы
        link.target.parentElement.parentElement.parentElement.classList.toggle("active")
        // Мне вот это самому не нравится но лучше способа не нашел:(
    })
})

document.querySelector(".header__form").addEventListener("click", ()=>{
    // появление формы
    modal[1].classList.toggle("active")
})
btn_open_card.forEach(item => {
    item.addEventListener("click",function(link){
        modal[0].classList.toggle("active")
        console.log(modal)
        get_card_details(link)
    })
})

btn_del_card.forEach(item => {
    item.addEventListener("click",function(link){
        link.target.parentElement.parentElement.classList.add('animate');
        setTimeout(() => link.target.parentElement.parentElement.remove(), 1000);
    })
})

function get_card_details(link){
    modal[0].querySelector(".modal__img-item").src    = link.target.parentElement.parentElement.querySelector(".card__image-item").src;
    modal[0].querySelector(".modal__title").innerText = link.target.parentElement.parentElement.querySelector(".card__title").innerText;
}