const noteID=document.querySelector("#links");
const cprID=document.querySelector("#copyright");

export function notes(){
    const notes=noteID.addEventListener('click', ()=>{
        let text=noteID.innerHTML;
        text=text+'<div>'+window.prompt('Add link')+'</div>'; 
        noteID.innerHTML=text;
    })
    
}

export function copyright(x){
    const copyright=cprID.addEventListener('click', ()=>{
        let text=cprID.innerHTML;
        text=text+'<div>'+window.prompt('Add copywriter')+'©</div>'
        cprID.innerHTML=text;
    })

}