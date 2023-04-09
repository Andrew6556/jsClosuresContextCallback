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
        let result = modal.validation(link.target); 
        if (result){
            link.target.reset()
            // create_card(result)
        }
    })
})



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