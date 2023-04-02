"use strict";

let modal        = document.querySelector(".modal"),
    btn          = document.querySelectorAll(".card__btn_open"),
    btn_del_card = document.querySelector(".header__logIn");

document.querySelector(".modal__close").addEventListener("click",() => {
    modal.style.visibility = 'hidden';
    modal.style.opacity    = "0";
})

btn.forEach(item => {
    item.addEventListener("click",function(link){
        console.log(1)
        // get_card_details(link)
        // link.target.parentElement.remove()
        modal.style.visibility = 'visible';
        modal.style.opacity    = "1";
        get_card_details(link)
    })
})
function get_card_details(link){
    modal.querySelector(".modal__img-item").src    = link.target.parentElement.parentElement.querySelector(".card__image-item").src
    modal.querySelector(".modal__title").innerText = link.target.parentElement.parentElement.querySelector(".card__title").innerText
}
// btn_del_card.addEventListener("click", function(e){
//     console.log(e.target)
// })