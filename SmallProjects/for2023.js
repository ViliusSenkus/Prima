let d;
let t;
let startCaunt = false;

function getTime(event){
    clearInterval(startCaunt);
    event.preventDefault();
    d=document.querySelector("[name='day']").value;
    t=document.querySelector("[name='time']").value;
    arg=`${d} , ${t}`;
    timeBackCount(arg);
}

function timeBackCount(date="2024-01-01, 0:0:0"){
    startCaunt = setInterval(()=>{
        let startDate=new Date();
        let stopDate = new Date(date);
        let secGap = Math.round((stopDate-startDate)/1000);
        let minGap = Math.floor(secGap/60);
        let hGap = Math.floor(minGap/60);
        let dayGap = Math.floor(hGap/24);

        let restH=hGap-(dayGap*24);
        let restM=minGap-(hGap*60);
        let restS=secGap-(minGap*60);

        let gap= "It's Current Time"; //may change value to any text to be showen when neaded time is reached

        if (secGap==0){
            myEvent();
            return
        }

        if ((stopDate-startDate)<-1000*60)
            gap='Your time has allready passed'; 

        if (secGap >= 1 && gap!='Desired time has passed more than a minute ago'){
            gap = `${restS} sek.`;
            if (minGap >=1)
                gap=`${restM} min. ${gap}`;
                if (hGap >=1)
                    gap=`${restH} val. ${gap}`;
                    if (dayGap >=1)
                        gap=`${dayGap} d. ${gap}`;    
        }
        document.querySelector("#laikas").innerHTML=`<p class="center text-danger fs-2 fw-bold">${gap}</p>`;
    }, 1000);
}

function myEvent(){
    clearInterval(startCaunt);
    //below any code you want to execute on neaded time is reached
    document.querySelector("#laikas").innerHTML="<p class='center text-danger fs-2 fw-bold'>It's PARTY time</p>";

}

let eil=[
    "Prie upelio stačiau senį,*Sniego senį – besmegenį.*Kur reikėjo smegenų,*Dėjau gabalus ledų.**Ant galvos užmoviau puodą*Ir įspaudžiau rankon šluotą,*Nosies vieton – morką ilgą*Ir buvau labai laiminga.",
    "Pasidirbau gražutes*Tvirto medžio rogutes.**Nuo kalnelio važiavau*Už karklelio užkliuvau**Už karklelio užkliuvau,*Iš rogučių išvirtau",
    "Eglutė skarota,*Eglutė žalia.*Meškutė gauruota*Ją lanko šile.**Jos liauną kamieną*Kalena geniai,*Naujų metų dieną*Ją puoš mokiniai.",
    "Ledo rūmuose nuo seno*Senis Šaltis sau gyveno.*Ir turėjo jis anūką —*Šaltanosį Ledinuką.**Geras buvo tas anūkas —*Šaltanosis Ledinukas:*Nesurūgęs, nesustiręs,*Bet… kur eina, ten ir girias:**— Moku kalti ledo tiltus,*Moku malti sniego miltus…*Zuikį puikį — užpustyti,*Ežį kežį — Užmigdyti.**Miega varlės pūstažandės*Ir barsukas kietasprandis.*Ką barsukas! Aš ir mešką*Kai paspaudžiu — šonai braška…**Visą žemę, jei norėčiau,*Aš sušaldyti galėčiau!",
    "Vienąkart per sniego pūgą*Šaltis vedasi anūką.*O anūkas*Ledinukas*-Rateliu*Su snaigėm sukas.**Žiūri — važy sėdi ponas,*Nuo arielkos net raudonas,*Ir į kailinius storiausius*Storas ponas įsirausęs,*Ir kelius, ir ilgas kojas*Zebrų kailiais apsiklojęs.",
    "Po sniegu jauku ir šilta.*Pūgos kloja baltą šilką.*Po sniegu, po sniegu*Miega pasaka vaikų.**Bet Kalėdų tylią naktį**Pasaką reikės pasekti,*Eglutes reikės uždėgti*Tą Kalėdų tylią naktį.*Iš pūgų, speigų, pusnų -*Kelkis, pasaka vaikų!",
    "Gyvu sidabru nušviestas,*Mėnesienoj skendi miestas.*O gatve - negali būti!*Veda laikrodis eglutę!**Tyliai tyliai jiedu ėjo,*Niekas jų nepastebėjo.*Na, nebent gudrus kepėjas,*Tas, iš pasakų atėjęs.*Tas, kuris po ledo tiltu*Iš pūgos baltučių miltų*Tarsi mėnesio ragus*Kepė miestui pyragus.",
    "Nuo sakų, sniegų ir vėjo -*Visas kambarys kvepėjo.*O ant eglės tiek meduolių,*Tiek saldainių ir karolių,*Sviedinukų ir lėlių,*Ir stiklinių obuolių.**O palietęs žalią šaką,*Laikrodukas eglei šneka -**Ti-ku ta-ku,*Ti-ku ta-ku,*Man sena*Rodyklė sako,*Kad visai nepavėluota*Į gražiausią metų puotą.",
    "Važiavo žiema ledo tiltu*Ir vežėsi pusmaišį miltų*Galvojo: bus kaip iš rago*Sausainių, riestainių, pyrago**Sėdėsiu viena sau po uosiu*Ir valgysiu - niekam neduosiu*Tik ratas užliuvo už vėjo*Ir miltai visi išbyrėjo.**Vaikai atsikėlę iš miego*Už lango pamatė daug sniego.",
    "Apšerkšniję mūsų žiemos –*Balta, balta – kur dairais –*Ilgas pasakas mažiemus*Seka pirkioj vakarais.**Apie klaidžią sniego pūgą,*Saulės nukirptas kasas –*Apie žąsiną moliūgą,*Kur išskrido į dausas.**Apie vilką, baltą mešką,*Burtus, išdaigas velnių,*Apie vandenis, kur teška*Iš sidabro šulinių.",
    "Pusnynuos nykštukai miega,*Aukso žuvys po ledu –*Bėga ragana per sniegą,*Nepalikdama pėdų.**Našlaitėlė gero būdo –*O jos pamotė pikta …*Bet… senelė užusnūdo.*Ir jos pasaka baigta."
];

function textConfig(t){
    let counter=0;
    let balses=["a","ą","e","ę","ė","i","į","y","o","u","ų","ū"];

    for (i=0; i<t.length; i++){
        counter=0;
        let r=t[i].toLowerCase();   
        balses.map(z=>{
        if (z==r)
            counter++;          
        });
        
        if (counter==0){
            if (t[i]==","|| t[i]=="." || t[i]=="!" || t[i]=="?" || t[i]==" " || t[i]=="-" || t[i]=="*"){
                continue
            }
            t=t.replace(t[i],"_");
        }
    }
    t=t.replaceAll(" ", "<span class='tarpas'> </span>");
    t=t.replaceAll("*","<br />");
    return t  
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectEil(){
    x=rand(0, eil.length-1);
    btn='<button onclick="show(x)" class="btn btn-info">Rodyti normaliai</button>';
    document.querySelector("#smth").innerHTML=textConfig(eil[x])+"<br />"+btn;
}

function show(nr){
    let showEil=eil[nr].replaceAll("*","<br />");
    // console.log(document.querySelector("#smth").lastElementChild);
    document.querySelector("#smth").innerHTML=showEil;
}


