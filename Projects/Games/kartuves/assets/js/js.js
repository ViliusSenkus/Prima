let abc="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
let n=0;



// let hWord;  //assigning given word to hWord variable

function hidWord(){                         //word rememebering, sending to console and form hiding
   let hWord=document.getElementById("word").value;
    console.log(hWord);
    document.getElementById("hideWord").style.display="none";
    let len=hWord.length-1;
    console.log(len);
    
    //check if hWord is constructed of letters
   hWord=hWord.toLowerCase();
   
    for (let i=0; i<=len; i++){
        for (l=0; l<=abc.length-1; l++){
            if(hWord[i]==abc[l]){
            n++;
            }
        }
        if (n!=1){
        console.log(`it's not a word, no such letter "`, hWord[i],`"`);
        }
        n=0;
    }
}

function letterTest(hWord){                     //test if word made of letters
    let =this.hWord.length;
    console.log(len);
}