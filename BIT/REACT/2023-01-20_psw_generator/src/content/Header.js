import { useState, useEffect } from "react";

const Header = ({data, renew, setRenew}) => {

      const rand = (min, max) => {
                  min = Math.ceil(min);
                  max = Math.floor(max);
                  return Math.floor(Math.random() * (max - min + 1) + min);
            }

      const [psw, setPsw] = useState();

      useEffect (()=>{
                  if (data.difficulty===undefined) data.difficulty='medium';
                  if (data.len < 6) data.len = 6

                  if (data.cap===!false && data.low===!false && data.number===!false && data.sym===!false){
                        setPsw('No types of elements choosen')
                  }else{ switch (data.difficulty){
                        case 'simple':
                              eas(data.len);
                              break;
                        case 'medium':
                              med(data.len);
                              break;
                        case 'hard':
                              hrd(data.len);
                              break;
                        default:
                              setPsw('Something is wrong in data input or in generation')
                  }}
      },[data]);

      useEffect (()=>{
            let array=[]
            
            if (localStorage.getItem('passwords')==null){
                  array.push=psw;
                  localStorage.setItem('passwords', JSON.stringify(array));
            }else{
                  array=JSON.parse(localStorage.getItem('passwords'));
                  array.push(psw);
                  if (array.length > 10){
                  
                        array.splice(0,array.length-10)};

                  localStorage.setItem('passwords', JSON.stringify(array));
            }
            setRenew(!renew);
      },[psw])

      const letters = "aąbcčdeęėfghiįyjklmnoprsštuųūvzž";
      const symbols = "!@#$%^&*()_+-=/}{[]'?;.,:";

      const eas = (l) =>{
            
            let numOfElements = l/16;  //defining number of different type elements
            let array=[];
            let sm=[];
            let lg=[];
            let nm=[];
            let sb=[];
            let counter = 1;

            //if some of elements is not wanted - increasing number of others in password
            if (data.low===true) counter++;
            if (data.cap===true) counter++;
            if (data.number===true) counter++;
            if (data.sym===true) counter++;

            numOfElements=Math.ceil(numOfElements*(counter/1.5));


            for (let i=1; i<=numOfElements; i++){  //randomising elements one by one of different type
                  sm.push(letters[rand (0,letters.length-1)]);
                  lg.push(letters[rand (0,letters.length-1)].toUpperCase());
                  nm.push(rand (0,9));
                  sb.push(symbols[rand (0,symbols.length-1)]);
            }

            // console.log('reiksmes po foro', data.low, data.cap, data.number, data.sym);
            if (data.low===true) sm=[];
            if (data.cap===true) lg=[];
            if (data.number===true) nm=[];
            if (data.sym===true) sb=[];

            array=[...sm, ...lg, ...nm,...sb]; //joining elements to one array
            let a=[]

            let pasword="";
            for (let i=1; i<=l; i++){
                  let b=array[rand(0, array.length-1)];
                  a.push(b);

                  if ((l-array.length+1) === a.length)
                        array.splice(array.findIndex((el)=>el===b),1);
                  
                  
            }
            pasword=a.join('');
            setPsw(pasword)
      }

      const med = (l) =>{    
            let numOfElements = l/8;  //defining number of different type elements
            let array=[];
            let sm=[];
            let lg=[];
            let nm=[];
            let sb=[];
            let counter = 1;

            //if some of elements is not wanted - increasing number of others in password
            if (data.low===true) counter++;
            if (data.cap===true) counter++;
            if (data.number===true) counter++;
            if (data.sym===true) counter++;

            numOfElements=Math.ceil(numOfElements*(counter/1.5));


            for (let i=1; i<=numOfElements; i++){  //randomising elements one by one of different type
                  sm.push(letters[rand (0,letters.length-1)]);
                  lg.push(letters[rand (0,letters.length-1)].toUpperCase());
                  nm.push(rand (0,9));
                  sb.push(symbols[rand (0,symbols.length-1)]);
            }

            // console.log('reiksmes po foro', data.low, data.cap, data.number, data.sym);
            if (data.low===true) sm=[];
            if (data.cap===true) lg=[];
            if (data.number===true) nm=[];
            if (data.sym===true) sb=[];

            array=[...sm, ...lg, ...nm,...sb]; //joining elements to one array
            let a=[]

            let pasword="";
            for (let i=1; i<=l; i++){
                  let b=array[rand(0, array.length-1)];
                  a.push(b);

                  if ((l-array.length+1) === a.length)
                        array.splice(array.findIndex((el)=>el===b),1);
                  
                  
            }
            pasword=a.join('');
            setPsw(pasword)
      }

      const hrd = (l) =>{
            let array=[];

            for (let i=1; i<=l; i++){
                  let x=rand(1,4);
                  switch (x){
                        case 1:
                              if (data.low===false ){array.push(letters[rand (0,letters.length-1)])}else{i--};
                              break;
                        case 2:
                              if (data.cap===false){array.push(letters[rand (0,letters.length-1)].toUpperCase())}else{i--}
                              break;
                        case 3:
                              if (data.number===false){array.push(rand (0,9))}else{i--}
                              break;
                        case 4:
                              if (data.sym===false){array.push(symbols[rand (0,symbols.length-1)])}else{i--}
                              break;
                        default:
                              setPsw('Something is wrong in data input or in generation under hard pasword creation')
                  }
            }

            let pasword=array.join('');
            setPsw(pasword);
      }




      return(
            <div className="container">
                  <h1>Password Generator</h1>
                  <div>{psw}</div>     
            </div>

      )
}

export default Header;