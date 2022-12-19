const abecele="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
let tabloWord=[];

// kodas funkcijos paleidimui su Enter (ne atskiru mygtuku)
// let input = document.getElementById("word");
// input.addEventListener("keydown", function(e)  {
//     if (e.code === 13)
//     getWord(document.getElementById("word").value);
// })

const hideInput = () => document.getElementById("word_input").style.display = `none`;

function getWord (word){
    if (word == ""){
        result=alert("žodis neįvestas");
        return result;
    }
    
    word=word.toLowerCase();
    let counter=0;
    for(i=0; i<word.length; i++){
        let x=0;
        while (word[i]!==abecele[x]){
            x++;
            counter++;
            if(counter>=abecele.length){
                result=alert(`nėra tokios raidės - "${word[i]}"`);
                return result;
            }
        }
        counter=0;
    }
    word=word.toUpperCase();

    hideInput();                        

    for (i=0; i<word.length; i++)
        tabloWord.push([word[i],[i],false]);

    createHTML(tabloWord);
}

function createHTML(tabloWord){
    let stringHTML="";
    for (let i=0; i<tabloWord.length; i++){
        if (tabloWord[i][2] === true){
            stringHTML += `<span>${tabloWord[i][0]}</span>`;
        }else{
            stringHTML += `<span> </span>`;
        }
    }
    
    document.getElementById("tablo").innerHTML=stringHTML; 
}


 

// --------------------------------raidžių spėjimas---------------------------------

function check(letter){         //tikrinimas ar pasirinkta raidė yra žodyje
    for (i=0; i<tabloWord.length; i++)
        if (tabloWord[i][0] == letter)
            tabloWord[i][2]=true;
createHTML(tabloWord);
}




let codeBlock="";
function abcs(){
    
    for (let i=0; i<=abecele.length-1; i++){
        let letter=abecele[i].toUpperCase();
        codeBlock=codeBlock+`<div class="letter" onclick="check('${letter}')">${letter}</div>`;
        document.getElementById("alphabet").innerHTML=codeBlock;
    }
}

// function show(){
//     let tabloWord=check();
//     for (i=0; i<tabloWord.length; i++){
//         if (tabloWord[i][2] == true)      //darant kelis žodžius turbūt čia reikėtų įdėti tarpo atpažinimą
//         tabloWord[i]=tabloWord[i][0];
//     }

//         document.getElementById("tablo").innerHTML=drawTablo(tabloWord);
//         console.log(tabloWord);

//     return tabloWord;
    
// }




// const tabloWord=[[`a`,1,false],[`b`,2,false]];

// document.write(tabloWord,`iki funkcijos`);

// function check(letter){
//     for (i=0; i<tabloWord.length; i++)
//         if (tabloWord[i][0] == letter)
//             tabloWord[i][2]=true;
//     return tabloWord;
// }

// document.write(check(`b`), `po funkcjos`);