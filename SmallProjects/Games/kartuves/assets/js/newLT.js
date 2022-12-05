const abecele="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
let ivestasZodis=""
let pasleptasZodis=[];
let pasirinktaRaide="";
let atspetaSimboliu=0;
let visoSimboliu=0;


function arZodisIrasytas(tikrinamasZodis){
    let testas="žodis įvestas";
    if (tikrinamasZodis == ""){
        testas="žodis neivestas";
    }
    return testas;
}  

function zodisMasyvan(zodis){
    let zodisMasyve=[];
    for (let i=0; i<=zodis.length-1; i++){
        zodisMasyve.push(zodis[i]);
    }
    return (zodisMasyve);
}


function arZodisIsRaidziu(){
    let testas ="žodis iš raidžių dar netikrintas";
    let zodis = zodisMasyvan();

    return zodis, testas;
    
    // for (let i=0; i<=zodis.length-1; i++){
    //         if(abecele[i] !== zodis[i]){
    //             console.log(zodis[i]);
    //             testas="ne tie simboliai";
    //         }else testas=true;
    //     }

    // return testas;
}

let zodis="+/jko9"
console.log(arZodisIrasytas(zodis));
console.log(zodisMasyvan(zodis));
//console.log(arZodisIsRaidziu(zodis));
