
import header from "./js/header.js";

header.setLogo();
header.addNav();
document.querySelector("#search").innerHTML=header.setSearch();


import { textToHtml } from "./js/body.js";

document.querySelector('main').innerHTML=textToHtml;


import { notes, copyright } from "./js/footer.js";

notes();
copyright();

function delLink(){
    const hideItem=document.querySelector("#links");
    hideItem.previousElementSibling.addEventListener('click',()=>{
        hideItem.previousElementSibling.style.display="none";
        hideItem.firstElementChild.style.visibility="hidden";
    })
}

function delCpr(){
    const hideItem=document.querySelector("#copyright");
    hideItem.previousElementSibling.addEventListener('click',()=>{
        hideItem.previousElementSibling.style.display="none";
        hideItem.firstElementChild.style.visibility="hidden";
    })
}
delLink();
delCpr();
