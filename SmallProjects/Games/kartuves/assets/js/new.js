







const data=[[]];
const tabloWord=[];

function drawTablo(array){
    let string=""
    for (i=0; i<array.length; i++)
        string += "<span>"+array[i]+"</span>";
 
    return string;
}

function hide(string){
    console.log(`eilute`, string);
    len=string.length;
    for (i=0; i<len; i++){
        tabloWord.push("_");
        data.push([string[i],[i],false]);
    }
        document.getElementById("tablo").innerHTML=drawTablo(tabloWord);
        console.log(tabloWord);
        return [tabloWord, data];
    
}


function check(letter){
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