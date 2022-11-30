//-----------------Pirma užduotis-----------------

let names;
let surname;
let fullname;
names = `Donatas`;
surname = `Banionis`;

fullname = names + " " + surname;
//išvedimas į konsolę
console.log(`duotas pilnas aktoriaus(ės) vardas:`, fullname);
if (surname.length > names.length){
    console.log('pavardė', surname, `ilgesnė už vardą`, names)
} else if (names.length > surname.length){
    console.log('vardas', names, `ilgesnis už pavardę`, surname)
}else{
    console.log(vienodoilgio)
}

//--------------funkcija rezultatų parodymui naršyklės lange--------------------------

// išvedamų į naršyklę kintamųjų paruošimas:
pavardeIlgesne = `Aktoriaus(ės) ` + fullname + ` pavardė ilgesnė už vardą `;
vardasIlgesnis =`Aktoriaus(ės) ` + fullname + ` vardas ilgesnis už pavardę `;
vienodoilgio = `Aktoriaus(ės) ` + fullname + `vardas ir pavardė vienodo ilgumo`;

//funkcijai reikalingo kintamojo paruošimas

let result1;

//rezultato skaičiavimas ir išvedimas į naršyklę per funkciją:
if (surname.length > names.length){
   result1 = pavardeIlgesne + "<br />" + surname
} else if (names.length > surname.length){
    result1 = vardasIlgesnis + "<br />" + names
}else{
    result1 = vienodoilgio;
};

function show1(){
    document.getElementById("results1").innerHTML=result1;
}


//-----------------Antra užduotis-----------------

let vardas;
let pavarde;
let gimimas;
let dabar;

vardas = 'Vilius';
pavarde = 'Senkus';
gimimas = 1977;
dabar = 2022;

amzius = dabar - gimimas;

console.log(`Aš esu`, vardas, pavarde, `man yra`, amzius, `metai(ų)`);

result2 = `Aš esu ` + vardas + ` ` + pavarde + ` man yra ` + amzius + ` metai(ų)`;

function show2(){
    document.getElementById("results2").innerHTML=result2
}

//-----------------Trečia užduotis-----------------

let aktVard;
let aktPavard;

aktVard = 'Dženifer';
aktPavard = 'Lopes';

ilgVard = aktVard.length;
ilgPavard = aktPavard.length;

abrvVard = aktVard[ilgVard-3]+aktVard[ilgVard-2]+aktVard[ilgVard-1];
abrvPavard = aktPavard[ilgPavard-3]+aktPavard[ilgPavard-2]+aktPavard[ilgPavard-1];
abrv = abrvVard + " " + abrvPavard;

console.log(abrv);

function show3(){
    document.getElementById("results3").innerHTML=abrv;
}