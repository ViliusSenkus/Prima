
const person={};
generateUserData();

function generateUserData(){
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((res) => {
        let data = res.results[0];
        document.querySelector("#photo").setAttribute("src", data.picture.large);
        person.photo=data.picture.large;
        person.name=data.name.title+" "+data.name.first+" "+data.name.last;
        person.mail=data.email;
        person.birth=new Date(data.dob.date);
        person.addr=data.location.street.number+" "+data.location.street.name;
        person.adrrFull=person.addr+" "+data.location.city+" "+data.location.country;
        person.phone=data.phone;
        person.psw=data.login.password;
        showName();
    })   
}

function showName(){
    changeAllStatus();
    document.querySelector("#data-name").textContent="Hi, My name is";
    document.querySelector("#data-value").textContent=person.name;
    document.querySelector("#person").setAttribute("status", "active");
}
function showMail(){
    changeAllStatus();
    document.querySelector("#data-name").textContent="My email address is";
    document.querySelector("#data-value").textContent=person.mail;
    document.querySelector("#mail").setAttribute("status", "active");
}
function showBirth(){
    changeAllStatus();
    document.querySelector("#data-name").textContent="My birthday is";
    document.querySelector("#data-value").textContent=person.birth.toLocaleDateString();
    document.querySelector("#birth").setAttribute("status", "active");
}
function showAddr(){
    changeAllStatus();
    document.querySelector("#data-name").textContent="My address is";
    document.querySelector("#data-value").textContent=person.addr;
    document.querySelector("#address").setAttribute("status", "active");
}
function showPhone(){
    changeAllStatus();
    document.querySelector("#data-name").textContent="My phone number is";
    document.querySelector("#data-value").textContent=person.phone;
    document.querySelector("#phone").setAttribute("status", "active");
}
function showPsw(){
    changeAllStatus();
    document.querySelector("#data-name").textContent="My password is";
    document.querySelector("#data-value").textContent=person.psw;
    document.querySelector("#psw").setAttribute("status", "active");
}



function changeAllStatus(){
    const array=document.querySelectorAll("li");
    for(i=0; i<array.length; i++)
        array[i].attributes.status.value="inactive" 
}


