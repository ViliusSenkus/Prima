
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



// raidžių panelės formavimas

let codeBlock="";
function abcs(){
    
    for (let i=0; i<=abc.length-1; i++){
        codeBlock=codeBlock+`<div class="letter" id="letter`+i+` onclick="choosenLetter(`+i+`)"">` + abc[i] + '</div>';
        document.getElementById("alphabet").innerHTML=codeBlock;
    }
}