//-----------------globalūs kintamieji------------------------------------//
const abecele="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
// let zodisM=hidWord();
let h=0;

// kodas funkcijos paleidimui su Enter (ne mygtuku)
//let input = document.getElementById("word");
// input.addEventListener("keydown", function(e)  {
//     if (e.code === "Enter")
//     tablo();
// })

function hidWord(){
    
    //tikriname ar kas nors įvesta.

    let zodis=document.getElementById("word").value;
    let result=true;
    if (zodis == ""){
        result="žodis neįvestas";
    }

    //tikriname ar nėra neleistinų simbolių.

    zodis=zodis.toLowerCase();
    let counter=0;
    for(i=0; i<zodis.length; i++){
        let x=0;
        while (zodis[i]!==abecele[x]){
            x++;
            counter++;
            if(counter>=35){
                result=`nėra tokios raidės - "`+zodis[i]+`"`;
                break;
            }
        }
        counter=0;
    }

    //parengiame patikrinimo rezultatą:

    result = (result === true) ? zodis : result;
    return [result, zodis]; 
}

//----------------- į div'ą "tablo" išvedami rezultatai-----------------------------------//
function tablo(){
    let data=hidWord();
    let result=data[0];
    const  zodis=data[1];
    
    if (result === zodis) {
        result=[];
        let draw="<span> * </span>"
        let length=zodis.length;
        for (i=0; i<length; i++)
            result[i] = draw;
    }
    document.getElementById("tablo").innerHTML=result;
    return result;
}

//----------------- žodžio tikrinimas-----------------------------------//

let raide="a"

function checkLetter(){
    let data=hidWord();
    let hidden=tablo();
    const  zodis=data[1];
    let length=zodis.length;
    for (i=0; i<length; i++){
    hidden[i] = (zodis[i] == raide) ? hidden[i]=`<span> `+raide+` </span>` : hidden[i]=`<span> * </span>`;
    }
    document.getElementById("tablo").innerHTML=hidden;
}





// let ivestasZodis=""
// let pasleptasZodis=[];
// let pasirinktaRaide="";
// let atspetaSimboliu=0;
// let visoSimboliu=0;