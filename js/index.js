"use strict";

let modal        = document.querySelector(".modal"),
    btn          = document.querySelectorAll(".card__btn_open"),
    btn_del_card = document.querySelectorAll(".card__btn_del");

document.querySelector(".modal__close").addEventListener("click",() => {
    modal.classList.toggle("active")
})

btn.forEach(item => {
    item.addEventListener("click",function(link){
        modal.classList.toggle("active")
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
    modal.querySelector(".modal__img-item").src    = link.target.parentElement.parentElement.querySelector(".card__image-item").src
    modal.querySelector(".modal__title").innerText = link.target.parentElement.parentElement.querySelector(".card__title").innerText
}