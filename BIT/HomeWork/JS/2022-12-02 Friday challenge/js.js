//-----------------RND funkcija bendra visoms užduotims--------------------

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//-----------------Pirma užduotis-----------------

let candleAmount;
let checkOut;
let discount=0;

candleAmount=rand(5, 3000);

checkOut=candleAmount*1;

if(checkOut>=1000 && checkOut<2000){
    checkOut=candleAmount*0.97;
    discount=candleAmount-checkOut;
}
    else if (checkOut>=2000){
    checkOut=candleAmount*0.04;
    discount=candleAmount-checkOut;
    }
    else
    checkOut;

checkOut=checkOut.toFixed(2);
discount=discount.toFixed(2);
console.log(`žvakių kiekis`, candleAmount, `kaina`, checkOut, `nuolaida`, discount);



//iškėlimas į HTML---------------------

function candle(){
    candleAmount = document.getElementById("candleNo").value;
    let discount=0;
    checkOut=candleAmount*1;
    if(checkOut>=1000 && checkOut<2000)
        checkOut=candleAmount*0.97;
        else if (checkOut>=2000)
            checkOut=candleAmount*0.96;
        else
        checkOut;
    discount=candleAmount-checkOut;
    discount=discount.toFixed(2);
    checkOut=checkOut.toFixed(2);
    lines1=`užsakomas žvakių kiekis - `+ candleAmount + ` vnt. <br />`;
    lines2=`suma - ` + candleAmount + ` EUR <br />`;
    lines3=`pritaikyta nuolaida - ` + discount +`EUR <br />`;
    lines4=`galutinė kaina - <strong>` + checkOut + ` EUR </strong> <br />`;
    document.getElementById("results1").innerHTML=lines1+lines2+lines3+lines4;
}

//-----------------Antra užduotis-----------------

let rand1=rand(0,100);
let rand2=rand(0,100);
let rand3=rand(0,100);
let averageAll;
let averagePart;
let partCounter = 3;

console.log(`atsitiktiniai skaičiai:`,rand1,rand2,rand3);

averageAll=Math.round((rand1+rand2+rand3)/3);
console.log(`vidurkis -`, averageAll)

//---tikrinam ar atsitiktiniai skaičiai yra tarp 10 ir 90 ir skaičiuojam kiek jų yra.

if (rand1<10 || rand1>90){
    partCounter--;                  //mažinam skaičių kiekį
    rand1=0;                        //prilyginam skaičių nuliui (0)
}

if (rand2<10 || rand2>90){
    partCounter--;
    rand2=0;
}

if (rand3<10 || rand3>90){
    partCounter--;
    rand3=0;
}

if(partCounter==0)
    console.log(`nėra skaičių tarp 10 ir 90`);
    else{
        averagePart=Math.round((rand1+rand2+rand3)/partCounter);
        console.log(`vidurkis skaičių tarp 10 ir 90 -`, averagePart);
    }


//-iškėlimas į HTML----------------------

function avrCount(){
    let rand1=Number(document.getElementById("no1").value);
    let rand2=Number(document.getElementById("no2").value);
    let rand3=Number(document.getElementById("no3").value);
    let partCounter = 3;

    let line=`atsitiktiniai skaičiai : ` + rand1 + ` `+rand2+` `+rand3 +`<br />`;

    let averageAll=Math.round((rand1+rand2+rand3)/3);

    let line1=`vidutinė skaičių reikšmė - ` + averageAll + `<br />`;


    if (rand1<10 || rand1>90){
        partCounter--;                  
        rand1=0;                        
    }
    if (rand2<10 || rand2>90){
        partCounter--;
        rand2=0;
    }
    if (rand3<10 || rand3>90){
        partCounter--;
        rand3=0;
    }
    if(partCounter==0)
        texts=`nėra skaičių tarp 10 ir 90`;
        else{
            averagePart=Math.round((rand1+rand2+rand3)/partCounter);
            texts=`vidurkis skaičių tarp 10 ir 90 - ` + averagePart;
        }
    document.getElementById("results2").innerHTML=line+line1+texts;
}
//-----------------Trečia užduotis-----------------

let s;
let min;
let h;
let sAdd;
let countMin;

h=rand(0,23);
min=rand(0,59);
s=rand(0,59);

timeRnd1=h + ` : ` + min + ` : ` + s;
console.log(timeRnd1);

sAdd=rand(0,300);
txt2=sAdd;  //eilutė reikalinga rezultato parodymui naršyklės lange, <body> dalyje;

console.log(`pridėjus`, sAdd, `sekundžių bus:`);
if(sAdd!==0)
    countMin=Math.floor(sAdd/60);
    else
    countMin=0;

min+=countMin;
s+=sAdd-(countMin*60);

if (s>=60){
    min++;
    s-=60;
}

if (min>=60){
    h++;
    min-=60;
}

if (h>=24)
    h=0;

timeRnd2=h + ` : ` + min + ` : ` + s;
console.log(timeRnd2);



//-iškėlimas į HTML----------------------


function timing(){
    let h=Number(document.getElementById("h").value);
    let min=Number(document.getElementById("min").value);
    let s=Number(document.getElementById("s").value);
    let sAdd=Number(document.getElementById("addS").value);
    let countMin;

    time1=`duotas laikas: <br />` + h + ` : ` + min + ` : ` + s + `<br />`;

    if(sAdd!==0)
        countMin=Math.floor(sAdd/60);
        else
        countMin=0;

    min+=countMin;
    s+=sAdd-(countMin*60);

    if (s>=60){
        min++;
        s-=60;
    }
    if (min>=60){
        h++;
        min-=60;
    }
    if (h>=24)
        h=0;

    time2 = `pridėjus `+ sAdd + ` sek.gausis: <br />`+ h + ` : ` + min + ` : ` + s;
    document.getElementById("results3").innerHTML=time1+time2;
}
