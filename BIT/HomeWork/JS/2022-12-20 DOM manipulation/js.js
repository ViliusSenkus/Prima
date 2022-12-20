const as = {
    names: 'Vilius',
    surname: 'Senkus',
    profession: 'Full Stack Developer',
    phone: '+370 671 16246',
    eMail: 'vilius.s@outlook.com',
    website: 'viliussenkus.github.io/Prima/',
    city: 'Vilnius',
    country: 'Lithuania',
    facebookLink: 'https://www.facebook.com/vi.se.940',
    skypeLink:'',
    codeOpenLink:'',
    instagramLink:'',
    photo:'https://scontent.fvno7-1.fna.fbcdn.net/v/t1.6435-9/72094070_1278098799039690_7671159190949199872_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=PBHTDHzFv6oAX_td_oK&_nc_ht=scontent.fvno7-1.fna&oh=00_AfB-9cavvE4YvieRfpii8Lqj9wef13vYXT8zRxf6OBAd-g&oe=63C97F47',
}

let person = {...as};
console.log(person.phone);
//---------------------------------duoto Objekto duomenys---------------------------

function createID(){
    
    
    document.querySelector("#photo").style.backgroundImage=`url('${person.photo}'`;
    document.querySelector("#photo").style.backgroundSize="contain";
    document.getElementsByTagName('h2')[0].innerHTML=`${person.names} ${person.surname}`;
    document.getElementsByTagName('h4')[0].innerHTML=person.profession;

    document.getElementById('phone').innerHTML=person.phone;
    document.getElementById('email').innerHTML=person.eMail;
    document.getElementById('website').innerHTML=person.website;
    document.getElementById('city').innerHTML=`${person.city}, ${person.country}`;

    document.getElementsByTagName
   

    document.getElementsByTagName('a')[0].getAttributeNode('href').value=person.facebookLink;
    document.getElementsByTagName('a')[1].getAttributeNode('href').value=person.skypeLink;
    document.getElementsByTagName('a')[2].getAttributeNode('href').value=person.codeOpenLink;
    document.getElementsByTagName('a')[3].getAttributeNode('href').value=person.instagramLink;    
}
//-----------------surenkami duomenys i6 formos ir pateikiami vizitineje korteleje----

function change(){
    person = {};
    person.photo=document.getElementById("foto").value;
    person.names=document.getElementById("name").value;
    person.surname=document.getElementById("surname").value;
    person.profession=document.getElementById("prof").value;
    person.phone=document.getElementById("ph").value;
    console.log(person.phone);
    person.eMail=document.getElementById("mail").value;
    person.website=document.getElementById("web").value;
    person.city=document.getElementById("cit").value;
    person.country=document.getElementById("country").value;
    person.facebookLink=document.getElementById("faceb").value;
    person.skypeLink=document.getElementById("skype").value;
    person.codeOpenLink=document.getElementById("codeop").value;
    person.instagramLink=document.getElementById("insta").value;
    createID();
}