const header = document.querySelector("header");
const navigation_show = document.querySelectorAll("#navigation_show");
const navigation = document.querySelector("nav");
const show_hide_navigation = document.querySelector("#menu-spread-arrow");
const hidden_up = document.querySelector(".hidden-up");
const main = document.querySelector("main");
console.log(main);
let show_menu = true;

show_hide_navigation.addEventListener("click", ()=>{
      if(!show_menu){
            header.classList.remove("hidden-up");
            main.classList.add("down");
            show_menu = true;
      }else{
            header.classList.add("hidden-up");
            main.classList.remove("down");
            show_menu = false;
      }
})
