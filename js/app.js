const burger = document.querySelector(".burger");
const navUl = document.querySelector("header nav ul");
const b1 = document.querySelector("burgerItem1");
const b2 = document.querySelector("burgerItem2");
const b3 = document.querySelector("burgerItem3");

burger.addEventListener('click', () => {
    navUl.classList.toggle('navToggle');
    burger.classList.toggle('toggle');
    
})
