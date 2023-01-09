const a = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
let article = await a.text();

function format(){
    article=article.replaceAll("[","");
    article=article.replaceAll("]", "");
    let textArray=article.split('","');
    return textArray
}

let html="";
let tekstas=format();
export const textToHtml=tekstas.map((i)=>html=`<div>${i}</div>`);