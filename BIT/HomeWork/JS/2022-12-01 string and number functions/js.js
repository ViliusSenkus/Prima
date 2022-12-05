//-----------------Pirma užduotis-----------------

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//sukuriami kintamieji 
const rand1=rand(0, 4); //atsitiktinis skaičius
const rand2=rand(0,4);  //atsitiktinis skaičius
let division;           //dalybos reikšmė. Reikšmė nepriskiriama, kadangi abu skaičiai gali būti lygus ir nebus įmanoma  nustatyti kuris iš jų didesnis
let min;                //bus priskirta mažesnė reikšmė
let max;                //bus priskirta didesnė reikšmė

console.log('atsitiktiniai skaičiai:', rand1, rand2); //išspausdinam atsitiktinius skaičius

//nustatom mažiausią ir didžiausią reikšmes
min = Math.min(rand1, rand2);
max = Math.max(rand1, rand2);       

//tikrinam dėl galimybės dalinti ir ar skaičiai nėra vienodi, bei atliekame dalybos veiksmą
console.log('mazesnis skaicius -', min, 'didesnis skaicius -',max)
if(rand1==rand2 && (rand1!==0 || rand2!=0))
    division=1;
    else{
division =  max/min ;
division = division.toFixed(2)
}

if (min==0)
division='dalyba is nulio negalima'

//pateikiam rezultatą
console.log(`dalybos rezultatas`, division);

//iškėlimas į HTML---------------------

function show1(){
    let line1 = 'atsitiktiniai skaičiai: ' + rand1 + ` ` + rand2 + `<br />`;
    let line2 = 'mazesnis skaicius - ' + min + ' didesnis skaicius - ' + max + `<br />`;
    let line3 = 'dalybos rezultatas -'  + division;
    document.getElementById("results1").innerHTML=line1+line2+line3;
}


//-----------------Antra užduotis-----------------

let rand2_1=rand(0,25);
let rand2_2=rand(0,25);
let rand2_3=rand(0,25);

let min2=Math.min(rand2_1, rand2_2, rand2_3);
let max2=Math.max(rand2_1, rand2_2, rand2_3);

console.log(`atsitiktiniai skaiciai:`,rand2_1,rand2_2,rand2_3)
if(rand2_1!==min2 && rand2_1!==max2)
        average=rand2_1;
    else if(rand2_2!==min2 && rand2_2!==max2)
        average=rand2_2;
    else
        average=rand2_3;

if (rand2_1==rand2_2 || rand2_1==rand2_3 || rand2_2==rand2_3)
    average='vidutinės reikšmės nustatyti negalima, kadangi mažiausiai dvi reikšmės vienodos'

        console.log('vidutinė reikšmė', average);


//-iškėlimas į HTML----------------------

function show2(){
    let line1 = 'atsitiktiniai skaičiai: ' + rand2_1 + ` ` + rand2_2 + ` ` + rand2_3 + `<br />`;
    let line2 = 'vidutinė reikšmė - ' + average;
    document.getElementById("results2").innerHTML=line1+line2;
}


//-----------------Trečia užduotis-----------------

function inicials(){
    let nam=document.getElementById("vards").value;
    let surname=document.getElementById("pavards").value;
    let inicials=nam.charAt(0)+'.'+surname.charAt(0)+'.';
    inicials=inicials.toUpperCase();
    console.log(nam, surname, `inicialai yra`, inicials);
    document.getElementById("results3").innerHTML=nam+` `+surname+` inicialai yra - ` + inicials;
}
//-iškėlimas į HTML----------------------

function show3(){
    document.getElementById("results3").innerHTML=nam+` `+surname+` inicialai yra - ` + inicials;
}


//-----------------Ketvirta užduotis-----------------

let abc="abcdefghijklmnopqrstuvwxyz"
let size=abc.length-1;

let rnd4_1=rand(0,size);
let rnd4_2=rand(0,size);
let rnd4_3=rand(0,size);

let newString=abc.charAt(rnd4_1)+abc.charAt(rnd4_2)+abc.charAt(rnd4_3);
console.log(newString);

//-iškėlimas į HTML----------------------

function show4(){
    document.getElementById("results4").innerHTML=newString;
}
