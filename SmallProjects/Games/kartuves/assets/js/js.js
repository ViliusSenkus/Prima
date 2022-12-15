const abecele="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
const data=[];
const tabloWord=[];

// kodas funkcijos paleidimui su Enter (ne atskiru mygtuku)
//let input = document.getElementById("word");
// input.addEventListener("keydown", function(e)  {
//     if (e.code === "Enter")
//     tablo();
// })

const hideInput = () => document.getElementById("word_input").style.display = `none`;

function getWord (word, createHTML){
    if (word == ""){
        result=alert("žodis neįvestas");
        return result;
    }
    console.log(`žodis yra - `, word);
    
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
    for (i=0; i<tabloWord.length; i++)
        if (tabloWord[i][2] == true){
            stringHTML += `<span>${tabloWord[i]}{</span>`;
        }else{
            stringHTML += `<span> </span>`;
        }
    
    document.getElementById("tablo").innerHTML=createHTML(); 
}


 

// --------------------------------raidžių spėjimas---------------------------------

function check(letter){         //tikrinimas ar pasirinkta raidė yra žodyje
    for (i=0; i<data.length; i++)
        if (data[i][0] == letter)
            data[i][2]=true;

    for (i=0; i<data.length; i++)
        if (data[i][2] == true)      //darant kelis žodžius turbūt čia reikėtų įdėti tarpo atpažinimą
        tabloWord[i]=data[i][0];
    

    document.getElementById("tablo").innerHTML=drawTablo(tabloWord);
    console.log(tabloWord);
            
    return data;
}

// function show(){
//     let data=check();
//     for (i=0; i<data.length; i++){
//         if (data[i][2] == true)      //darant kelis žodžius turbūt čia reikėtų įdėti tarpo atpažinimą
//         tabloWord[i]=data[i][0];
//     }

//         document.getElementById("tablo").innerHTML=drawTablo(tabloWord);
//         console.log(tabloWord);

//     return tabloWord;
    
// }




// const data=[[`a`,1,false],[`b`,2,false]];

// document.write(data,`iki funkcijos`);

// function check(letter){
//     for (i=0; i<data.length; i++)
//         if (data[i][0] == letter)
//             data[i][2]=true;
//     return data;
// }

// document.write(check(`b`), `po funkcjos`);