







const data=[[`a`,1,false],[`b`,2,false]];

console.log(data,`iki funkcijos`);

function check(){
    let letter=`a`;
    for (i=0; i<data.length; i++)
        if (data[i][0] == letter)
            data[i][2]=true;
    return data;
}

console.log(check(), `po funkcjos`);


// function show(){
//     let data=check();
//     for (i=0; i<data.length; i++){
//         if (data[i][2] == true)
//     }
// }