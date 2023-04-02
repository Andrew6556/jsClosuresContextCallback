"use strict";

let modal = document.querySelector(".modal"),
    btn   = document.querySelectorAll(".card__btn");

btn.forEach(item => {
    item.addEventListener("click",function(link){
        

        modal.querySelector(".modal__img-item").src = link.target.parentElement.querySelector(".card__image-item").src
        modal.querySelector(".modal__title").innerText = link.target.parentElement.querySelector(".card__title").innerText
        console.log(link.target.parentElement.querySelector(".card__image-item").src)
        modal.style.visibility = 'visible';
        modal.style.opacity   = "1";
    })
})