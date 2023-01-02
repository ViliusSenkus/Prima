//visus iššaukiamus laukus(elementus) susidedu į kintamuosius
let controlDiv=document.querySelector('#control');
let resultDiv=document.querySelector('#result');
let fieldDiv=document.querySelector('#field');
let mole=document.querySelector('#mole');
let timerDiv=document.querySelector('#timer');
let btnStart=document.querySelector('#start');
let btnNew=document.querySelector('#new');

// kiti kintamieji
let timeRun = false; //laiko intervalo pasiekimui iš skirtingų f-jų.
let positionCounter = 0;  // pozicijos pasikeitimų skaičiuoklis
let clicksCounter = 0;     //paspaudimų skaičiuoklis
let raund = 0;            //raudų skaičiuotuvas
let result = "RESULTS:"           //rezultato atvaizdavimo HTML
let player = "Player"   //naudojama kaip žaidėjo vardas kol nėra input laukelio
let playerPoints = 0;
let computerPoints = 0;
let timer=31;
let moleColor="red";

//tikrinam lango dydi ir gražinam aukštį ir plotį iš checkSize()


checkScreen();


function checkScreen(){
    if (screen.availWidth<650 || screen.availHeight<650)
        document.querySelector('body').innerHTML="your screen is too small for this game";
}

//setting parameters
// function setParameters(event){
//     event.preventDefault();
//     console.log(player);
//     player=console.log(document.getElementById('name').value);
//     if (player=="")
//         player="Player";
//     console.log(player);
// }

function warnSize(h, w){
    if (h<550 || w<550){
        window.alert("Naršyklės langas per mažas");
        resultDiv.style.visibility="hidden";
        controlDiv.style.visibility="hidden";
    }
}

//Atsitiktinių skaičių generatorius
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function positionMole(){
    mole.addEventListener("click", countClick);
    let x = rand(1, 450);
    let y = rand(1, 450);
    mole.style.top=y+'px';
    mole.style.left=x+'px';
    colorGenerator();
    positionCounter++;
    // console.log(positionCounter+'sukimas'+x+mole.style.backgroundColor+y)
    timer--;
    showTimer(timer);
    if (positionCounter==31){
        clearInterval(timeRun);
        showResult();
    }
}

function colorGenerator(){
        let r = rand(0,255)
        let g = rand(0,255)
        let b = rand(0,255)
        moleColor=`rgb(${r},${g},${b})`
    mole.style.backgroundColor=moleColor;
}

function showTimer(t){
    timerDiv.innerHTML=t;
}

function startRound(){
        timeRun=setInterval(positionMole, 1000);
        positionCounter=0;    
}

function countClick(){
    clicksCounter++
    mole.removeEventListener("click", countClick);
}

function setWinner(){
    pp=clicksCounter;
    cp=30-clicksCounter;
    if (clicksCounter<15){
        winner="computer"
        clicksCounter=30-clicksCounter;
    }else if (clicksCounter>15){
        winner=player;
    }else{
        winner="lygiosios";
    }
    return [winner, pp, cp];
}

function showResult(){
    raund++;
    let raundData=setWinner(); //paimami rezutlatai iš setwinner f-jos, nustatančios kas laimėjo
    let winner=raundData[0];
    let pp=raundData[1];
    let cp=raundData[2];
    if (winner=="lygiosios"){
        result=`${result}<h5>RAUND-${raund}</h5>${winner}`
    }else{
        result=`${result}<br /><h5>RAUND-${raund}</h5> ${winner} WINS with ${clicksCounter} points`;
    }
    playerPoints+=pp;
    computerPoints+=cp;

    resultDiv.innerHTML=result;

    if (raund == 10){
        points = (playerPoints > computerPoints) ? playerPoints : computerPoints;
        win = (playerPoints > computerPoints) ? player : "Computer";
        
        result =`<h1>GAME WINNER IS<br />${win.toUpperCase()}<br />with ${points} points in total</h1>`;
        document.querySelector("#endResult").innerHTML=result;
        document.querySelector("#endResult").style.display="inline";
        mole.style.display="none";
        result="";
        raund = 0;
        btnNew.style.display="inline-block";
        btnStart.style.display="none";
        timerDiv.style.display="none";
    }
    
    clicksCounter=0;
    timer=31;
}

function newGame(){
    btnNew.style.display="none";
    btnStart.style.display="inline-block";
    timerDiv.innerHTML="30";
    timerDiv.style.display="block"
    resultDiv.innerHTML="RESULTS:"
    document.querySelector("#endResult").style.display="none";
    mole.style.display="block";
}