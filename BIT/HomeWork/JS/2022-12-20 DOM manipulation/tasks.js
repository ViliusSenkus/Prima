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

function f2022_12_08_1(){
    let name1=" Petras - ";
    let name2=" Kazys - ";
    let tskPetro=0;
    let tskKazio=0;
    let winPoints=0;
    let name="";
    let line="";


    while(winPoints<222){
        res1=rand(10,20);
        res2=rand(5, 25);
        tskPetro=tskPetro+res1;
        tskKazio=tskKazio+res2;

        winPoints=(tskPetro>=tskKazio) ? tskPetro : tskKazio;
        name=(tskPetro>=tskKazio) ? name1 : name2;

        line +=name1 + " " + tskPetro + " " + name2 + " " + tskKazio +"<br />";
    }
        line +="<p>" + name1 + " " + tskPetro + " " +  name2+ " " + tskKazio + " Partiją laimėjo:"+ name + " " + winPoints +"</p>";
        return line;
}

function f2022_12_08_2(){
    let nailLength=8.5; 
    let strikes=0;
    let smallStrike=0;
    let bigStrike=0;
    let miss=0;

    //-------------maža vinis-------------//
    for (i=0; i<5; i++){
        while (nailLength>0){
            smallStrike = rand(0.5, 2);
            nailLength = nailLength - smallStrike;
            strikes++;
        }
        nailLength=8.5;
    }
    line="2.a. - 5 vinims įkalti reikės "+ strikes + " mažų smūgių <br />";



    //-------------didele vinis-------------//
    strikes=0;
    nailLenghth=8.5;
    
    for (i=0; i<5; i++){
        while (nailLength>0){
            missProbability = rand(0,1);
            if (missProbability == 1){
            bigStrike = rand(2, 3);
            nailLength = nailLength - bigStrike;
            strikes++;
            } else {
                miss++;
                strikes++;
            }
        }
        nailLength=8.5;
    }
    line += "2.b. - 5 vinims įkalti reikės" + strikes + "DIDELIŲ smūgių, įskaitant ir nepataikytus" + miss +" kartus <br />";
    return line;
}

function f2022_12_08_3(){
    let numArray=[];
    for(i=0; i<50; i++){
        numArray[i]=rand(1,200);
        for (x=0; x<numArray.length-1; x++){
            if (numArray[i]==numArray[x]){
                numArray.splice(i, 1);
                i--;
            }
        }
    }
    numString=numArray.join(` `);
    line = "<p>Atsitiktinių nesikartojančių skaičių eilutė: " + numString + "</p>";

    let sortedString=(numArray.sort());
    line +="<p>Surūšiuotų nesikartojančių skaičių eilutė: " + sortedString.join(' ') +"`</p>";

    let primeNumbers=[];
    let z;
    let counter;

    for (i=0; i<numArray.length; i++){
        z=Math.sqrt(numArray[i]);
        if (z - Math.floor(z) !== 0){
            for (x=2; x<=z; x++){
                if (numArray[i]%x == 0){
                    counter++;
                }
            }
            if (counter == 0)
            primeNumbers.push(numArray[i]);
            counter = 0;
        }
    }
    
    let result=(primeNumbers.length>0)? primeNumbers.join(` `) : `nėra pirminių skaičių`;
    line += "<p>pirminių skaičių masyvas sudarytas iš nesikartojančių skaičių masyvo: " +  result + "</p>";
    return line;
}

function f2022_12_09_1(){
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let letters="ABCD";
    let lettersArray=[];
    let rnd=0;
    let a=0;
    let b=0;
    let c=0;
    let d=0;

    for (i=0; i<200; i++){
        rnd=rand(0,3);
        lettersArray.push(letters[rnd]);
        switch (rnd){
            case 0: a++;
                break;
            case 1: b++;
                break;
            case 2: c++;
                break;
            default: d++;
        }
    }
    return lettersArray.join(` `)+`<br />pagal abecėle išrūšiuotas masyvas: `+ lettersArray.sort();
}

function f2022_12_09_3(){
    let letters="ABCD";
    let lettersArray1=[];
    let lettersArray2=[];
    let lettersArray3=[];
    let jointArray=[];
    let rnd1=0;
    let rnd2=0;
    let rnd3=0;

    for (i=0; i<200; i++){                           
        lettersArray1.push(letters[rand(0,3)]);
        lettersArray2.push(letters[rand(0,3)]);
        lettersArray3.push(letters[rand(0,3)]);
        jointArray.push(lettersArray1[i]+lettersArray2[i]+lettersArray3[i]);
    }
    line="Apjungtas masyvas: "+ jointArray.join(' ');

        let unicCombination=[];
        let unicValue=[];
        let counter = 0;
        let value="";
        
    for (i=0; i<jointArray.length; i++){
        for (z=0; z<jointArray.length; z++){
            if (i!==z && jointArray[i]==jointArray[z]){
            counter++;
            }
        }

        if (counter == 0){
            unicCombination.push(jointArray[i]);
        }
        
        counter=0;
        
        value=jointArray[i];
        if (value[0]!==value[1] && value[0]!==value[2] && value[1]!==value[2])
        unicValue.push(value);
    }


    line+="<p>Rastos " + unicCombination.length + " unikalios kombinacijos: " + unicCombination + "</p>";
    line+="<p>Rastos " +unicValue.length + " pasikartojančios unikalios reikšmės";
   
    let compare="";
    for (i=0; i<unicValue.length; i++){
        compare=unicValue[i];
        unicValue.splice[i,1];
        if (unicValue.includes(compare)){  
            for (z=0; z<unicValue.length; z++){
                if (unicValue[z]==compare){
                    unicValue.splice(z,1);
                    z--;
                }
            }
        }else{
            unicValue.push(compare);
        }
  
    } 

    line+=` tarp jų ${unicValue.length} skirtingų ${unicValue}</p>`;
    return line;
}

function f2022_12_09_4(){
    let x=rand(100, 299);
    let y=rand(100, 299);
    let xArray=[];
    let yArray=[];

    for (i=0; i<100; i++){
        while (xArray.includes(x))
            x=rand(100, 219);
            xArray.push(x);
        while (yArray.includes(y))
            y=rand(100, 219);
            yArray.push(y);
    }
    line=`<p> ${xArray}</p><p> ${yArray}</p>`;

    let includeArray=[];

    for (i=0; i<xArray.length; i++){
        includeArray.push(xArray[i]);
        
        if (yArray.includes(xArray[i]))
        includeArray.pop();
    }
    line += `<p>pirmo masyvo skaičiai, kurie nesikartoja antrame yra: ${includeArray.join(' ')}</p>`;

    let repeatArray=[];
                        
    for (i=0; i<xArray.length; i++){
        if (yArray.includes(xArray[i]))
        
        repeatArray.push(xArray[i]);
    }
    
    line += `<p>pirmam ir antram masyve kartojasi skaičiai: ${repeatArray.join(' ')} </p>`;
    return line;
}

function f2022_12_13_1(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
        <div>    
        <label for="text">įrašykite vardą</label><br />
        <input type="text" id="text" name="text"/><br />
        <button type="button" onclick="hiName(document.getElementById('text').value)">Pasisveikink</button>
        </ div>
        <div id="result1"></div>`
}
function hiName(name){  //prie 2022-12-13 -1-
    document.getElementById("result1").innerHTML="Labas " + name;
    } 

function f2022_12_13_2(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
    <div>
        <label for="text2">įrašykite tekstą</label><br /> 
        <textarea id="text2" name="text2" rows="4" cols="100">Tekstą rašyti čia...</textarea><br />
        <button type="button" onclick="stringLength(document.getElementById('text2').value)">Skaičiuoti ilgį</button>
        <div id="result2"></div>
    </div>`;
}
function stringLength(text){ //prie 2022-12-13 -2-
    let len=text.length;
    document.getElementById("result2").innerHTML='Duoto teksto ilgis - ' + len + ' simboliai';
};

function f2022_12_13_3(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
        <div>
            <label for="vards">Vardas</label><br />
            <input type="text" id="vards" name="vards"/><br />
            <label for="pavards">Pavardė</label><br />
            <input type="text" id="pavards" name="pavards" /><br />
            <button type="button" onclick="fullName(document.getElementById('vards').value, document.getElementById('pavards').value)">Suliek</button>
            <div id="result3"></div>
        </div>`;
}
function replace(string){ //prie 2022-12-13 -3-
    before=string[0];
    string=string.slice(1);
    after=before.toUpperCase();
    string=after.concat(string);
    return string;
}
function fullName(name, last_name){ //prie 2022-12-13 -3-
    name=replace(name);
    last_name=replace(last_name);
    let fullname=name+" "+last_name;
    document.getElementById("result3").innerHTML=fullname;
}

function f2022_12_13_4(){
        let x=rand(0,5);
        let y=rand(0,5);
        let z=rand(0,5);
        return x+"," + y + ","+ z;
}

function f2022_12_13_5(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
    <div>
        <label for="nuo">Mažiausias masyvo skaitmuo</label><br />
        <input type="text" id="nuo" name="nuo" /><br />
        <label for="iki">Didžiausias masyvo skaitmuo</label><br />
        <input type="number" id="iki" name="iki" /><br />
        <label for="kiekis">Masyvo ilgis</label><br />
        <input type="number" id="kiekis" name="kiekis" /><br />
        <button class="button" onclick="formArray(document.getElementById('nuo').value, document.getElementById('iki').value, document.getElementById('kiekis').value)">
                Sudaryti masyvą
        </button><br />
        <div id="result5"></div>
    </div>
    `;
}
function toNumber(value){ //prie 2022-12-13 -5-
    if (isNaN(value))
        return `reikšmė nėra skaičius`;
        
        value=parseInt(value);
        return value
}
function formArray(from, to, limit){ //prie 2022-12-13 -5-
    from=toNumber(from);
    to=toNumber(to);
    limit=toNumber(limit);
    if (typeof from !== "number" || typeof to !== "number" || typeof limit !== "number")
      return document.getElementById("result5").innerHTML="paduotos reikšmės nėra skaičiai";

    
    let fixedArray=[];

    for (i=0; i<limit; i++)
        fixedArray.push(rand(from, to));                  

   document.getElementById("result5").innerHTML=`masyvas: `+ fixedArray;
}

function f2022_12_14_a1(){
    let x=rand(5,25);
    let y=rand(5,25);
    let array=[x, y];
    for(let i=2; i<10; i++)
        array[i]=(array[i-1]+array[i-2]);

    return array;
}

function f2022_12_14_a2(){
    let string="abcdefghijklmnopqrstuvwxyz"
    let outterArray=[];
    
    for (i=0; i<10; i++){
        length=rand(2,20);
        let innerArray=[];
        for (let z=0; z<length; z++){
            innerArray[z]=string[rand(0,string.length-1)];
        }
        outterArray.push(innerArray.sort());
    }
    return outterArray;
}

function f2022_12_14_1(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
    <div>
        <label for="number">Skaičius</label><br />
        <input type="number" id="number" name="number"/><br />

        <label for="exp">kokiu laipnsiu pakelti</label><br />
        <input type="number" id="exp" name="exp" /><br />

        <button type="button" onclick="exp(document.getElementById('number').value, document.getElementById('exp').value)">Pakelk laipsniu</button>

        <div id="result"></div>
    </div>`;
}
function exp(number, exp){ // prie 2022-12-14 -1-
    result=Math.pow(number, exp);
     document.getElementById("result").innerHTML=number + ` pakėlus ` + exp +
     ` laipsniu, gausis ` + result;
     return result;
 }

 function f2022_12_14_2(){
    document.querySelector("#rezult").lastElementChild.innerHTML +=('<div id="final"></div>');
    document.getElementById("final").innerHTML=`
        <div>
            <label for="heading">įveskite antraštės tekstą</label><br />
            <input type="text" id="heading" name="heading"/><br />
            
            <button type="button" onclick='hh1(document.getElementById("heading").value)''>
                Suformuok antraštę    
            </button>
            <div id="header"></div>
        </div>`;
 }
 const hh1 = (heading) => {string= "<h1>"+heading+"</h1>";  // prie 2022-12-14 -2-
                document.getElementById("header").innerHTML=string + "<br />" + otherHeading(heading, rand(1,6));
 }
 function otherHeading(heading,headSize){  // prie 2022-12-14 -2-
    heading=heading.replaceAll(1, headSize);
    result = `<h`+headSize+`>`+heading+`</h`+headSize+`>`;
    return result;
}

function f2022_12_14_4(){
    function isPrimary(number){
        let result=false;
        let x=0;
        if (number == 1 || number == 2){
            result=true;
            return result;
        }

        let i=2;
        while (i<number){
            x=number%i;
            if (x==0){
                result=false;
                return result;
            }else{
                result=true;
            }
            i++;
        }
        
        return result;
    }

    function isNotPrimary(number){
        let result=true;
        let x=0;
        
        if (number == 1 || number == 2){
            let result=false;
            return result;
        }
        let i=2;
        while (i<number){
            x=number%i;
            if (x>0){
                result=false
            }else{
                result=true;
                return result;
            }
            i++
        }
        return result;
    }
    return isPrimary(10)+isNotPrimary(10);
}

function f2022_12_14_5(){
    let lastArray=[]
        for(let i=0; i<100; i++)
            lastArray.push(rand(997, 15991));
        
        for(i=0; i<lastArray.length; i++){
            if  (!isPrimary(lastArray[i]) || lastArray[i]<5000){
            lastArray.splice(i,1);
            i--;
            }
        }
    return lastArray;

    function isPrimary(number){
        let result=false;
        let x=0;
        if (number == 1 || number == 2){
            result=true;
            return result;
        }

        let i=2;
        while (i<number){
            x=number%i;
            if (x==0){
                result=false;
                return result;
            }else{
                result=true;
            }
            i++;
        }   
        return result;
    }
}

function f2022_12_16_1(){
    let arr=[]
    for (i=0; i<10; i++){
        let innerArray=[];

        for (z=0; z<5; z++){
            let number=rand(5,25);
            innerArray.push(number);
        }
        arr.push(innerArray);
    }
    
    line=arr.toString();
    console.log(arr);

    let count=0;
    for (x in arr){
        for (z of arr[x]){
            if (z>10){
                count++;
            }
        
        }
    }        
    line += `<br />masyve yra ${count} elementai didesni už 10`;

    let maxIn=0;
    for (x in arr){
        let z=Math.max(...arr[x])
        if (maxIn <= z)
            maxIn = z;
        }        
    line += `<br />didžiausia masyvo reikšmė ${maxIn}`;

    let noOfIndexes=0
    for (x in arr){
        for (y in arr[x]){
            if (noOfIndexes< y) {
            noOfIndexes=y;
            }
        }
    }
    
    
    let elements="";
    for (y=0; y<=noOfIndexes; y++){
        sum = 0;
        elements="";
        for (i=0; i<arr.length; i++){
            if (arr[i][y] == undefined)
            arr[i][y]=0;

            sum = sum + arr[i][y];
            elements = elements + ' ' + arr[i][y];
        }
        line += '<br />' + y + ' indekse esnačių skaitmenų '+ elements + ` suma lygi ` + sum ;
    }

    for (i=0; i<10; i++){
        for (z=5; z<7; z++){
            let number=rand(5,25);
            arr[i][z]=number;
        }
    }
        console.log(arr);
        line +="<br />" + arr;



        let newArray=[];
        for (y=0; y<7; y++){
            let sum=0;
            for (i=0; i<arr.length; i++)
                sum = sum + arr[i][y];
            
        newArray.push(sum);
        }
        console.log(newArray);
        line +="<br />"+ newArray;
return line;
}

function f2022_12_16_3(){
    let array=[];
    let innerArray=[];

    for (i=0; i<10; i++){
        let length=rand(0,5);
        
        if (length==0){
            number=rand(0,10);
            array.push(number);
        }else{
            for (z=0; z<length; z++){
                number=rand(0,10);
                innerArray[z]=number;
            }
        }

        if (innerArray.length>0)
        array.push(innerArray);
        innerArray=[];
    }
    line = array.toString();
    console.log(array);



    let sum=0;
    for (i=0; i<array.length; i++){
        if (!Array.isArray(array[i])){
            sum = sum + array[i];
        }else{
            for (z=0; z<array[i].length; z++)
            sum += array[i][z];
        }
    }
    line += "<br />Masyvo elementų suma: " + sum;



    array.sort((a, b)=>{  
        if (isNaN(a)){
        sumA=0;
        for (i=0; i<a.length;i++)
        sumA=sumA+a[i];

        a=sumA;
        }
        
        if (isNaN(b)){
        sumB=0;
        for (i=0; i<b.length;i++)
        sumB=sumB+b[i];

        b=sumB;
        }

        if (a<b)
        return -1;

        if (a>b)
        return 1;
        
        return 0;
    });
    console.log(array);
    line += "<br /> išrikiuotas masyvas: <br />"+array;
    return line;
}

function f2022_12_20(){
    document.getElementById('hw').innerHTML=`<a href="index.html">Nuoroda į puslapį</a>`;
}

function f2022_12_22(){
    document.getElementById('hw').innerHTML=`<a href="../2022-12-22/index.html">Nuoroda į puslapį</a>`;
}