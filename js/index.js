"use strict";

import Card from "../modules/Card.js";
import Header from "../modules/Header.js";
import Modal from "../modules/Modal.js";
import Data from "../modules/Data.js";



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
];
let header = new Header(),
    data   = new Data();

header.wrapper.appendChild(data.wrapper)
document.querySelector(".wrapper").appendChild(header.wrapper)

data_films.forEach(data =>{
    let card = new Card(data);
    card.wrapper.querySelector(".card__btn_open").addEventListener("click", function(event){
        document.querySelector(".modal__img-item").src    = event.target.closest(".card").querySelector(".card__image-item").src;
        document.querySelector(".modal__title").innerText = event.target.closest(".card").querySelector(".card__title").innerText;
        document.querySelector(".modalFilm").classList.toggle("active")
    })
    document.querySelector(".films__wrapper").appendChild(card.wrapper);
})

document.querySelectorAll(".modal").forEach(item =>{
    let modal = new Modal(item);
    modal.modalWrapper.querySelector(".form")?.addEventListener("submit", (link) =>{
        link.preventDefault();
        if (modal.validation(link.target, data.add_card) !== false){
            link.target.reset()

        }
    })
})
document.querySelector(".header__form").addEventListener("click", () =>{
    document.querySelector(".modalForm").classList.toggle("active")
})

