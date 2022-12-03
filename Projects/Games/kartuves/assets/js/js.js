let abc="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
let n=0;



// let hWord;  

function hidWord(){                                     //word rememebering, sand form hiding
   let hiddenWord=document.getElementById("word").value;     //assigning given word to hiddenWord variable
    console.log(hiddenWord);
    document.getElementById("hideWord").style.display="none";   //hiding input form
   
    
    //check if hiddenWord is constructed of letters (check according variable 'abc')
    let wordLength=hiddenWord.length-1;
    hiddenWord=hiddenWord.toLowerCase();
   
    for (let i=0; i<=wordLength; i++){
        for (l=0; l<=abc.length-1; l++){
            if(hiddenWord[i]==abc[l]){
            n++;
            }
        }
        if (n!=1){
        console.log(`it's not a word, no such letter exist"`, hiddenWord[i],`"`);
        }
        n=0;
    }
    return hiddenWord;
}


//hidden word panel forming function

function guessPanel(){
    let guessWord=this.hiddenWord;
    console.log(`dabar `, guessWord);
}



// letters panel forming function executed from <body> element on page load

let codeBlock="";
function abcs(){
    
    for (let i=0; i<=abc.length-1; i++){
        codeBlock=codeBlock+`<div class="letter" id="letter`+i+`">` + abc[i] + '</div>';
        document.getElementById("alphabet").innerHTML=codeBlock;
    }
}