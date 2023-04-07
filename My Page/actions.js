const header = document.querySelector("header");
const navigation = document.querySelector("nav");
const show_hide_navigation = document.querySelector("#menu-spread-arrow");

show_hide_navigation.addEventListener("click", ()=>{
      if(header.style.display=="none"){
            header.style.display="flex"
      }else{
            header.style.display="none"
      }
})