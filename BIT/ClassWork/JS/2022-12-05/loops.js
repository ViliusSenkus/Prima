// while

function whileLoop(){
let i = 0;
while(i<20){
    document.getElementById("whileLoop").style="margin-left:"+i+"rem;";
    i++;
}
}
function back(){
    document.getElementById("whileLoop").style="margin-left:0;";
}


//do while





function neiskaitant(){
    let abc="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
    let lett=document.getElementById("letter").value;
    let result="";
    let i=0;
    while (abc[i] != lett){
        result=result+abc[i];
        i++
    }
    document.getElementById("abc").innerHTML=result;
}
function iskaitant(){
    let abc="aąbcčdeęėfghiįyjklmnoprsštuųūvzžqwx";
    let lett=document.getElementById("letter").value;
    let result="";
    let i=0;
    do {
        result=result+abc[i];
        i++
    } 
    while (abc[i] != lett);

    document.getElementById("abc").innerHTML=result;
}