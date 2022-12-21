let trgt=""

function showHTML(addr, event){
    event.preventDefault();
    let newTrgt = event.target.attributes.onclick.value

    hidCheckIframe = document.querySelector('#iframe').style.display;

    if(hidCheckIframe == "block" && trgt == newTrgt){
        document.querySelector("#iframe").setAttribute("style", "display:none");
        document.querySelector("#js").setAttribute("style", "display:block");
        return;
    }

    trgt = event.target.attributes.onclick.value;

    document.querySelector("#js").setAttribute("style", "display:none");
    text=event.target.attributes.text.value;
    event.target.setAttribute("style", "background-color:red");

    document.querySelector("#iframe").innerHTML=`
        <div style="border:2px solid red; border-radius:5px; display:inline-block; box-shadow:2px 2px 5px grey;">
            <span style="font-weight:bold; background:red; border-left-radius:4px;">
                UŽDUOTIS
            </span>
                ${text}
        </div>
        <iframe id="htmlResult" src="">    
        </iframe>
        `;
    result=`../../${addr}`;
    document.querySelector("#iframe").setAttribute("style", "display:block");
    document.querySelector("iframe").setAttribute("src", result);   
    
    // pridėti spalvos pakeitimą, kai mygtukas buvo peržiūrėtas ir pereita prie kito.
};

function showJS(number, event){
    event.preventDefault();
    let newTrgt = event.target.attributes.onclick.value

    checkRezultHidden = document.querySelector('#rezult').style.display;

    if(checkRezultHidden == "block" && trgt == newTrgt){
        document.querySelector("#rezult").setAttribute("style", "display:none");
        document.querySelector("#html").setAttribute("style", "display:block");
        return;
    }

    trgt = event.target.attributes.onclick.value;

    document.querySelector("#html").setAttribute("style", "display:none");
    text=event.target.attributes.text.value;
    event.target.setAttribute("style", "background-color:red");

    document.querySelector("#rezult").innerHTML=`
        <div style="border:2px solid red; border-radius:5px; display:inline-block; box-shadow:2px 2px 5px grey;">
            <span style="font-weight:bold; background:red; border-left-radius:4px;">
                UŽDUOTIS
            </span>
                ${text}
        </div>
        <div id='hw'></div>`;
    
        document.getElementById('hw').innerHTML=`
            <div style="margin:5px;">
            <span style="font-weight:bold; font-size:20px;background-color:lightgrey;">
                Kodas:
            </span>
            ${number}
            </div>
            <div style="margin:5px;">
            <span style="font-weight:bold; font-size:20px;background-color:lightgrey;">
                Rezultatas:
            </span>
            <br />
            ${number()}
            </div>
            <div id="final">
            </div>`;

        

        document.querySelector("#rezult").setAttribute("style", "display:block");

};



// ---------------------------------------------------------------------
//                             JS užduotys
// ---------------------------------------------------------------------


//atsitiktinių skaičių generavimo f-ja skirta visoms užduotims (funkcijoms)

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function f2022_11_30_1(){
let fullname='';
let names = 'Donatas';
let surname = 'Banionis';
fullname = names + " " + surname;

result = 'duotas pilnas aktoriaus(ės) vardas: ' + fullname;

if (surname.length > names.length){
    result +='. Pavardė ' + surname + ' ilgesnė už vardą ' + names;
} else if (names.length > surname.length){
    result +='. Vardas' + names + ' ilgesnis už pavardę ' + surname;
}else{
    result +='. Vardas ir pavardė vienodo ilgio';
}
return result
}

function f2022_11_30_2(){
    let vardas;
    let pavarde;
    let gimimas;
    let dabar;

    vardas = 'Vilius';
    pavarde = 'Senkus';
    gimimas = 1977;
    dabar = 2022;
    amzius = dabar - gimimas;

    return `Aš esu ` + vardas + ` ` + pavarde + ` man yra ` + amzius + ` metai(ų)`;
}

function f2022_11_30_3(){
    let aktVard;
    let aktPavard;

    aktVard = 'Dženifer';
    aktPavard = 'Lopes';

    ilgVard = aktVard.length;
    ilgPavard = aktPavard.length;

    abrvVard = aktVard[ilgVard-3]+aktVard[ilgVard-2]+aktVard[ilgVard-1];
    abrvPavard = aktPavard[ilgPavard-3]+aktPavard[ilgPavard-2]+aktPavard[ilgPavard-1];
    abrv = "Trys paskutinės vardo ir pavardės raidės: " + abrvVard + " " + abrvPavard;

    return abrv;
}

function f2022_11_30_4(){
    let text = "Once upon a time in hollywood";
    let txtsm = text.toLowerCase();
    let txtChanged = txtsm.replaceAll(`o`, `*`);
    console.log(txtChanged);

    return txtChanged;
}

function f2022_11_30_5(){
    let count0=0;
    let count1=0;
    let count2=0;

    let rnd1 = Math.floor(Math.random()*3);
    if (rnd1==0){
    count0++;
    }else if(rnd1==1){
    count1++;
    }else{
    count2++;
    }

    let rnd2 = Math.floor(Math.random()*3);
    if (rnd2==0){
    count0++;
    }else if(rnd2==1){
    count1++;
    }else{
    count2++;
    }

    let rnd3 = Math.floor(Math.random()*3);
    if (rnd3==0){
    count0++;
    }else if(rnd3==1){
    count1++;
    }else{
    count2++;
    }

    let rnd4 = Math.floor(Math.random()*3);
    if (rnd4==0){
    count0++;
    }else if(rnd4==1){
    count1++;
    }else{
    count2++;
    }
    result = "Atsitiktiniai skaičiai: "+rnd1+" "+rnd2+" "+rnd3+" "+rnd4+"<br />";
    result += "Nuliukų - "+count0+", vienetukų - "+count1+", dvejetukų - "+count2;

    return result;
}

function f2022_12_01_1(){
    const rand1=rand(0, 4);
    const rand2=rand(0,4);
    let division;
    let min = Math.min(rand1, rand2);
    let max = Math.max(rand1, rand2);       

    if(rand1==rand2 && (rand1!==0 || rand2!=0)){
        division=1;
    }else{
    division =  max/min ;
    division = division.toFixed(2)
    }

    if (min==0)
    division='dalyba is nulio negalima'
    
    result = "atsitiktiniai skaičiai: "+ rand1 + " " + rand2 + "<br />";
    result += 'mazesnis skaicius - '+ min + ' didesnis skaicius - '+ max + '<br />';
    result += 'Dalybos rezultatas - '+ division;
    return result;
}

function f2022_12_01_2(){
    let rand2_1=rand(0,25);
    let rand2_2=rand(0,25);
    let rand2_3=rand(0,25);
    let min2=Math.min(rand2_1, rand2_2, rand2_3);
    let max2=Math.max(rand2_1, rand2_2, rand2_3);

    result='atsitiktiniai skaiciai: '+rand2_1+' '+rand2_2+' '+rand2_3+'<br />';
    if(rand2_1!==min2 && rand2_1!==max2)
            average=rand2_1;
        else if(rand2_2!==min2 && rand2_2!==max2)
            average=rand2_2;
        else
            average=rand2_3;

    if (rand2_1==rand2_2 || rand2_1==rand2_3 || rand2_2==rand2_3)
        average='vidutinės reikšmės nustatyti negalima, kadangi mažiausiai dvi reikšmės vienodos'

        result +='vidutinė reikšmė ' + average;
        return result;
}

function f2022_12_01_3(){

    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
    <p>Įrašyk vardą ir pavardę ir paspaudus mygtuką gausi inicialus</p>
        <form style="text-align:left; line-height: 1.5rem;">
            <label for="vards">Vardas</label>
            <input type="text" id="vards">
            <label for="pavards">Pavardė</label>
            <input type="text" id="pavards"><br />
            <button type="button" onclick='inicials()' style="background-color:lightgrey; color:black; font-weight:normal;">
                Suformuoti inicialus
            </button>
        </form>
        <div id="results3">
        </div>
    `;
}
function inicials(){ //prie 2022-12-01 -3-
    let nam=document.getElementById("vards").value;
        let surname=document.getElementById("pavards").value;
        let inicials=nam.charAt(0)+'.'+surname.charAt(0)+'.';
        inicials=inicials.toUpperCase();
        document.getElementById("results3").innerHTML=nam+` `+surname+` inicialai yra - ` + inicials;
};

function f2022_12_01_4(){
    let abc="abcdefghijklmnopqrstuvwxyz"
    let size=abc.length-1;
    let rnd4_1=rand(0,size);
    let rnd4_2=rand(0,size);
    let rnd4_3=rand(0,size);
    let newString=abc.charAt(rnd4_1)+abc.charAt(rnd4_2)+abc.charAt(rnd4_3);
    console.log(newString);
    return newString;
}

function f2022_12_02_1(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
        <form>
            <img src="../2022-12-02 Friday challenge/candle.png" alt="candle" style="height:50px"/>
            <label for="candelNo">Kiekis</label>
            <input type="number" id="candleNo" min="0" step="100" placeholder="0-4000">
            <button type="button" onclick="candle()">Skaičiuoti kainą</button>
        </form>    
        <div id="results1"></div>`
};
function candle(){ //prie 2022-12-02 -1-
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

function f2022_12_02_2(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
        <form>
            <label for="no1">Įveskite skaičius</label>
            <input type="number" id="no1" min="0" max="100" placeholder="0-100" value="50">
            <input type="number" id="no2" min="0" max="100" placeholder="0-100" value="50">
            <input type="number" id="no3" min="0" max="100" placeholder="0-100" value="50">
            <button type="button" onclick="avrCount()">Skaičiuoti vidurkius</button>
        </form> 
        <div id="results2">
        </div>`;
}
function avrCount(){ //prie 2022-12-02 -2-
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

function f2022_12_02_3(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
        <form>
            <label for="h">Įveskite valandas</label>
            <input type="number" id="h" min="0" max="23" placeholder="0-23" value="12">
            <label for="min">minutes</label>
            <input type="number" id="min" min="0" max="59" placeholder="0-59" value="30">
            <label for="s">sekundes</label>
            <input type="number" id="s"  min="0" max="59" placeholder="0-59" value="30"><br />
            <label for="addS">Kiek sekundžių pridėti?</label>
            <input type="number" id="addS"  min="0" max="359" placeholder="0-359" value="159"><br />
            <button type="button" onclick="timing()">Perskaičiuoti laiką</button>
        </form>
        <div id="results3">
        </div>`;
}
function timing(){ //prie 2022-12-02 -3-
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

function f2022_12_05_0(){
    let x=0;
    let line="";
    while(x<400){
        if(x>0 && x % 50==0){
            line=line+"<br />";
        }
        line=line+"*";
        x++;
    }
    return line;
}

function f2022_12_05_1(){
      let h = rand(1, 6)
      line = '<h'+h+'>'+h+' dydžio antraštė</h'+h+'>';
      return line;
}

function f2022_12_05_2(){
    let n1 = Math.floor(Math.random()*20)-10;
    let n2 = Math.floor(Math.random()*20)-10;
    let n3 = Math.floor(Math.random()*20)-10;
    let green=`<span style="color:green;">`;
    let red=`<span style="color:red;">`;
    let blue=`<span style="color:blue;">`;
    let clspan=` </span>`;
    let res=""
    
    if (n1<0){
        res=green+n1+clspan;
    }else if (n1>0){
        res=blue+n1+clspan;
    }else
        res=red+n1+clspan;
    
    if (n2<0)
        res=res+green+n2+clspan;
    else if (n2>0)
        res=res+blue+n2+clspan;
    else
        res=res+red+n2+clspan;
    
    if (n3<0)
        res=res+green+n3+clspan;
    else if (n3>0)
        res=res+blue+n3+clspan;
    else 
        res=res+red+n3+clspan;

    return res;
}

function f2022_12_05_3(){
    let vowel="aeiuo";
    let vowelUp=vowel.toUpperCase();
    let text1="An American in Paris";
    i=0;
    while (i<vowel.length-1){
        text1=text1.replaceAll(vowel[i],"");
        text1=text1.replaceAll(vowelUp[i],"");
        i++
    }
    line = text1+"<br />";

    let text2="Breakfast at Tiffany's";
    i=0;
    while (i<vowel.length-1){
        text2=text2.replaceAll(vowel[i],"");
        text2=text2.replaceAll(vowelUp[i],"");
        i++
    }
    line += text2+"<br />";

    
    let text3="2001: A Space Odyssey";
    i=0;
    while (i<vowel.length-1){
        text3=text3.replaceAll(vowel[i],"");
        text3=text3.replaceAll(vowelUp[i],"");
        i++
    }
    line += text3+"<br />";

    let text4="It's a Wonderful Life";
    i=0;
    while (i<vowel.length-1){
        text4=text4.replaceAll(vowel[i],"");
        text4=text4.replaceAll(vowelUp[i],"");
        i++
    }
    line += text4+"<br />";
    return line;
}

function f2022_12_05_4(){
    i=0;
    let num;
    let numrow="<span";
    let counter=0;
    while (i<300){
        num=rand(0,300);
        if (num>150)
        counter++;
        if (num>275)
        numrow = numrow + `style="color:red;">` + num + ` </span><span `;
        else
        numrow=numrow+`>`+num+` </span`;
        i++
    }
    line=numrow + '><br />skaičių, kurių reikšmė virš 150 yra:'+counter+'vnt.';
    return line;
}

function f2022_12_05_5(){
    i=1;
    row="";
    while(i<3000){
        if (i%77==0)
        row=row+i+", ";
        i++;
    }
    return row.slice(0, row.length-2);
}

function f2022_12_06_1(){
    let line="<div style='line-height:0.45rem'>";
    for (let x=1; x<100;x++){
        for (let i=1; i<100; i++){
            line+="*";
        }
        line +="<span><br />";
    }
    
    line +='<br /><br />';
    
    let size = 100;
    for (let x=1; x<size; x++){
            for (let i=1; i<size; i++){
                if (x==i || x==100-i)
                    line +=`<span style="color:red">*</span>`;
                else 
                    line += "*";
            }
            line += "<br />";
        }
        
    return line+='</div>';
}

function f2022_12_06_3(){
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let coinSide="";
    let line="metama kol iškris H - ";

    while (coinSide!=="H"){
        let x=rand(0,1);
        if(x==0)
            coinSide="H";
        else
            coinSide="S";
            
            line += coinSide;
    }
    line += `<br />metama kol 3 kartus iškris H - `;
    let counter=0;
    while (counter<3){
        let x=rand(0,1);
        if(x==0){
            coinSide="H";
            counter++
        }
        else
            coinSide="S";

            line += coinSide;
    }
    line +=`<br />metama kol 3 kartus iš eilės iškris H - `;
    counter=0;
    while (counter<3){
        let x=rand(0,1);
        if(x==0){
            coinSide="H";
            counter++
        }
        else{
            coinSide="S";
            counter=0;
        }
            line += coinSide;
    }
    line += `<br />`;
    return line;
}

function f2022_12_06_4(){
    let masyvas=[];
    let line="";
    size = 30;
    for (let x=0; x<size; x++){
        masyvas[x]=rand(5,25);
        line += x+' indekso rekšmė yra - ',masyvas[x], '<br />';
    }    
    // ------------5.a užduotis ------------------------
    counter=0;
    for (let x=0; x<masyvas.length; x++){
        if(masyvas[x]>10)
        counter++;
    }    
    line += 'Masyve yra ' + counter + ' reikšmių didesnių už 10<br />';

    // ------------5.b užduotis ------------------------
    counter=0;
    for (let i=0; i<masyvas.length; i++){
        if(masyvas[i]>counter){
            counter=masyvas[i];
        }
    }
    line += 'Didžiausias masyvo reikšmė - '+ counter + '<br />';

    // ------------5.c užduotis ------------------------
    counter=0;
    for( let i=0; i<masyvas.length; i+=2) //0 index'as skaičiuojamas prie porinių.
        counter=counter+masyvas[i];
        
        line += 'skaitmenų su poriniais indeksais suma lygi - ' + counter + `<br />`;

    // ------------5.d užduotis ------------------------
    let newArray=[];
        for (let i=0; i<masyvas.length; i++)
            newArray[i]=masyvas[i]-i;
    
    line +='senas masyvas:<br />' +masyvas + '<br />Perskaičiuotas masyvas:<br />' +newArray, '<br />';
    
    // ------------5.e užduotis ------------------------
    let papildymas=10;
    let newLength=masyvas.length+papildymas;
    let x;
    for (let i=masyvas.length; i<newLength; i++){
        x=rand(5,25);
        masyvas[i]=x;
    }
    line += 'papildytas masyvas:<br />'+masyvas;

    // ------------5.f užduotis ------------------------
    let oddIndex=[];
    let evenIndex=[];

    evenIndex.push(masyvas[0]);
    for (z=1; z<masyvas.length; z++){
    (z % 2 == 0) ? evenIndex.push(masyvas[z]) : oddIndex.push(masyvas[z]);
    }

   line += `masyvo reikšmės `+masyvas+`<br/>`;
   line += `  lyginių indeksų reikšmės: `+evenIndex+`<br/>`;
   line += `nelyginių indeksų reikšmės: `+oddIndex+ `<br/>`;

    // ------------5.g užduotis ------------------------

    for (i=0; i<masyvas.length; i++)
        // (i % 2 == 0 && masyvas[i] > 15) ? masyvas[i]=0 : i=i;
        masyvas[i]=(i % 2 == 0 && masyvas[i] > 15)? 0 : masyvas[i];

   line += `nurodyti skaičiai masyve pakeisti nuliais. Perdarytas masyvas: `+masyvas+`<br/>`;

    // ------------5.h užduotis ------------------------
    for (i=0; i<masyvas.length; i++)
        if (masyvas[i]>10 ){
        masyvas.splice(i, 1);
        i--;
    }

   line += `masyvas be didelių skaičių: `+ masyvas;
        return line;
    }