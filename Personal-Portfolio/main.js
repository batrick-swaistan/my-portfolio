// Menu

let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector(".navbar");

menu.onclick=() => {
    
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu")
}

window.onscroll= () =>{
    menu.classList.remove("move");
    navbar.classList.remove("open-menu")
}




// Contact form

function send(){

    let name=document.querySelector(".name");
    let email=document.querySelector(".email");
    let msg=document.querySelector(".message");
    let sendBtn=document.querySelector(".send-btn");

    if (name.value=="" || email.value=="" ||msg.value==""){
        alert("Plase fill out the form");
    }else{
        alert("Message send successfully");
       
    }
    document.getElementById("contact-form").reset();
}

// Scroll header

// let header=document.querySelector('header');

// window.addEventListener("scroll", () => {
//     header.classList.toggle("header-active",window.scrollY >0);
// });


