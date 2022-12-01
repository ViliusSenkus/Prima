let abc="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx"



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
        console.log(`simbolis ties`, i, `vieta, yra:`, hWord.charAt(i))
        for (l=0; l<=abc.length-1; l++){
            if(hWord[i]==abc[l])
            console.log(`it's not a word`, abc.charAt(l) )
        }
        
    }
    
}

function letterTest(hWord){                     //test if word made of letters
    let =this.hWord.length;
    console.log(len);
}