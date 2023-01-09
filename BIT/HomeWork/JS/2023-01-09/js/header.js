export function setLogo(addr){
    const logo=``
    document.querySelector("#logo").addEventListener('click', () =>{
        const imgUrl=window.prompt('type in URL of logo');
        document.querySelector("#logo").innerHTML=`<img src="${imgUrl}" alt="" />`;
    })
}


function setNavigation(name, href){
    const button=`<a href="${href}">${name}</a>`
    return button;
}


export function addNav(){
    document.querySelector("#addNav").addEventListener('click', () =>{
        const navName=window.prompt('Button name');
        const navLink=window.prompt('Link to...');
        const navLenth=document.getElementsByTagName('li').length;
        let lastNav=document.getElementsByTagName('li')[navLenth-1];
        const li=document.createElement('li');
        lastNav.parentElement.appendChild(li);
        document.getElementsByTagName('li')[navLenth].className=" bg-info-subtle col-3 fs-5 border border-dark text-center rounded p-1 ms-1";
        document.getElementsByTagName('li')[navLenth].innerHTML=setNavigation(navName, navLink);
        if (navLenth>3){
            document.querySelector('h1').nextElementSibling.style.display="none";
            document.querySelector('#addNav').style.display="none";
        }
    })
}



export function setSearch(){
    const search=`   <div class="input-group">
                        <span class="input-group-text">
                            <i class="bi bi-google"></i>
                        </span>
                        <input type="text" class="form-control" />
                        <span class="input-group-text">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>`;
    return search;
}


export default {setLogo, setSearch, addNav}