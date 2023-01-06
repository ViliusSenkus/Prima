function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let grauztukai = new Map();

class Vaisius{
    dydis=rand(5, 25);
    id=rand(1000000, 9999999);
    prakastas=false;

    prakasti(){
        this.prakastas=true;
    }
}

class Krepsys{
    static vaisiai=[];
    
    static pripildyti(){
        let n=Krepsys.vaisiai.length;
        for (let i=n; i<20; i++){
            let vaisius=new Vaisius;
            // console.log(vaisius);
            this.vaisiai[i]=vaisius;
        }
        
        Krepsys.vaisiai.sort((a, b)=>{
            a=a.dydis;
            b=b.dydis;
        
            if (a<b)
            return -1;
        
            if (a>b)
            return 1;
            
            return 0;
        });
        return Krepsys.vaisiai;
    }

    static isimti(){
        let l=this.vaisiai.length-1;
        if (l<0){
            console.log('nebėra ką išimti');
            return
        }
        let takenFruit=Krepsys.vaisiai[l];
        takenFruit.prakasti();
        grauztukai.set(takenFruit.id, takenFruit.prakastas);
        Krepsys.vaisiai.splice(l);
        return takenFruit;
    }
}

function fill(){
    let array=Krepsys.pripildyti();
    document.getElementById("bascet-img").innerHTML='<img src="img/full.png" alt="full basket" />';
    drawBascetTable();
}

function drawBascetTable(){
    let l = Krepsys.vaisiai.length;
    let html=`<thead>
                    <tr>
                        <th>No</th>
                        <th>id</th>
                        <th>size</th>
                        <th>status</th>
                    </tr>
                </thead>`;
            for (i=0; i<l; i++){
            html=html+`<tr>
                    <td>${i}</td>
                    <td>${Krepsys.vaisiai[i].id}</td>
                    <td>${Krepsys.vaisiai[i].dydis}</td>
                    <td>${Krepsys.vaisiai[i].prakastas}</td>
                </tr>
                `;
            }
    document.getElementById("basket-list").innerHTML=html;
    
    if (l<20)
        document.getElementById("bascet-img").innerHTML='<img src="img/part.png" alt="full basket" />';
    if (l==0)
        document.getElementById("bascet-img").innerHTML='<img src="img/empty.png" alt="full basket" />';
    
}

function takeOut(){
    Krepsys.isimti()
    let array=grauztukai;
    let size=grauztukai.size;
    document.getElementById("core-img").innerHTML='<img src="img/core.png" alt="full basket" />';
    let html=`<thead>
                <tr>
                    <th>No</th>
                    <th>id</th>
                    <th>status</th>
                </tr>
            </thead>`;
        let i=0;
    for (let [key, value] of array.entries()) {
        html=html+`<tr>
                <td>${i}</td>
                <td>${key}</td>
                <td>${value}</td>
            </tr>
            `;
            i++;
    }; 
        
    document.getElementById("core-list").innerHTML=html;
    drawBascetTable();
    
    if (size>1)
        document.getElementById("core-img").innerHTML='<img src="img/cores.png" alt="full basket" />';
}

// Krepsys.pripildyti();
// console.log(Krepsys.vaisiai);
// Krepsys.isimti();
// console.log(Krepsys.vaisiai);
// Krepsys.pripildyti();
// console.log(grauztukai);

