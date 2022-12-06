//-----------------globalūs kintamieji------------------------------------//
const abecele="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";

function hidWord(){
    let zodis=document.getElementById("word").value;
    let result="viskas gerai";
    if (zodis == ""){
        result="žodis neįvestas";
    }

    let zodisMasyve=[];
    for (i=0; i<zodis.length; i++)
        zodisMasyve.push(zodis[i]);

    let counter=0;
    for(i=0; i<zodisMasyve.length; i++){
        let x=0;
        while (zodisMasyve[i]!==abecele[x]){
            x++;
            counter++;
            if(counter>=35){
                result=`nėra tokios raidės - "`+zodisMasyve[i]+`"`;
                break;
            }
        }
        counter=0;
    }
    console.log(result);
    return zodisMasyve;
}
//----------------- į konsolę išvedami rezultatai-----------------------------------//




// let ivestasZodis=""
// let pasleptasZodis=[];
// let pasirinktaRaide="";
// let atspetaSimboliu=0;
// let visoSimboliu=0;