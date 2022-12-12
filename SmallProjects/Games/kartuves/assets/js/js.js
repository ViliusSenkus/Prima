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
    // document.getElementById("tablo").innerHTML=result;
    return result;
}


//----------------- tablo formavimas-----------------------------------//

function formTablo(){                  //h-luako eilučių skaičius, l-stulpelių skaičius.
    let data=hidWord();
    const string=data[1];
    let len=string.length;
    let h=3;
    let l=25;
    let half=Math.ceil(len/2);
    let s=0;

    if (len > 25)
        h=half+2;

    if (len % 2 == 0)
        l=26;

    let difference=13-half;
    let word=[];

    let code=`<table>`;
    for (i=0; i<h; i++){
        code=code+`<tr>`;
        for (z=0; z<l; z++){
            if (i==1 && z==difference && s<string.length){
                code=code+`<td class="hidden"></td>`;
                s++;
                difference++;
                word.push(i,z,string[s]);
            }else{
                code=code+`<td></td>`;
            }   
        }
        code=code+`</tr>`;
    }
    code=code+`</table>`
    document.getElementById("tablo").innerHTML=code;
    console.log(word);
    return [code, word];
}


//----------------------raidės tikrinimas (Naujas)------------------//
let letter=`a`;
function findLetter(letter){
    
    let data=formTablo();
    let positioned=data[1];
    let zodis=data[2];
    let openPosition=[];

    for (i=0; i<zodis.length; i++){
        if (letter==zodis[i]){
            openPosition.push(letter, positioned[0], positioned [2 + (i * 3) ])
            console.log(`raidėsPozicijos `, openPosition);
            return openPosition;
        }
    }
}

function openLetter(positionLine, positionColumn, letter){
    let data=findLetter();

}





//----------------- raidės tikrinimas-----------------------------------//

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












// letters panel forming function executed from <body> element on page load

let codeBlock="";
function abcs(){
    
    for (let i=0; i<=abc.length-1; i++){
        codeBlock=codeBlock+`<div class="letter" id="letter`+i+` onclick="choosenLetter(`+i+`)"">` + abc[i] + '</div>';
        document.getElementById("alphabet").innerHTML=codeBlock;
    }
}

function choosenLetter(letterIndex){
    letter=abc[letterIndex];
    return letter;
}





function rules(){
    let x=2
}