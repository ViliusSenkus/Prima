let abc="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
let n=0;





// let hWord;  

function hidWord(){                                     //word rememebering, and hiding input form
   let hiddenWord=document.getElementById("word").value;     //assigning given word to hiddenWord variable
    console.log(hiddenWord);
    document.getElementById("hideWord").style.display="none";   //hiding input form
   
    
    //check if hiddenWord is constructed of letters (check according variable 'abc')
    let wordLength=hiddenWord.length-1;
    hiddenWord=hiddenWord.toLowerCase();
   
    
    if (hiddenWord==""){
          document.getElementById("codedWord").innerHTML="žodis neubuvo įvestas. Bandyk dar kartą";
          document.getElementById("codedWord").style.color="red";
          document.getElementById("codedWord").style.fontSize="2rem";
          document.getElementById("hideWord").style.display="block"; 

          
    }

    for (let i=0; i<=wordLength; i++){
        for (l=0; l<=abc.length-1; l++){
            if(hiddenWord[i]==abc[l]){          //n is used as counter for illegal symbols
            n++;
            }
        }
        if (n!=1){
            document.getElementById("codedWord").innerHTML='Tai ne žodis. Nėra tokios raidės: "'+ hiddenWord[i]+'". Bandyk dar kartą';
            document.getElementById("codedWord").style.color="red";
            document.getElementById("codedWord").style.fontSize="2rem";
            document.getElementById("hideWord").style.display="block"; 
        }
        n=0;
    }
    return hiddenWord;
}


//hidden word panel forming function

function guessPanel(){
    let guessWord=hidWord();
    console.log(`dabar `, guessWord);
    let guessLetter=choosenLetter();

    for (let i=0; i<guessWord.length-1; i++){
        if (guessWord[i]=guessLetter){
            correctLeterIndex = i;
        }
    }
    return = correctLeterIndex
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