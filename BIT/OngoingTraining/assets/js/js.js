class Task{
    constructor(date, description, url){
        this.date = date;
        this.url=url;
        this.description=description;
    }

    getDate(){
        return this.date;
    }
    getUrl(){
        return this.url;
    }
    getDescription(){
        const TaskDescription=[]; //į masyvą noriu susidėti kiekvienos užduoties aprašymą ir pavadinimą. ir po to iškelti į išorinį failą saugojimui.
        return this.description;
    }

    setDate(x){
        return this.date=x;
    }
    getUrl(x){
        return this.url=x;
    }
    getDescription(x){
        return this.description = x;
    }
}

function newTask(){
    createTaskForm();
    let description=5;
    return description;
}

function createTaskForm(){
    const form='<form ons'
}

function setTask (){} //Galbūt reikia įdėti į Task klasę

const taskas= new Task('data', 'aprašymas', 'adresas');

console.log();

function form(){ 
        //Paima atliktos užduoties įvedimo formą. Atlieka senoviškai tą patį, ką ir:
        //let form = fetch("assets/htmls/form.txt").then(res => res.text()).then(res => console.log(res));
    let form = new XMLHttpRequest();
    form.onload = function (){
        console.log(this.responseText);
        //showForm()
    };
    form.open("GET", "assets/htmls/form.txt");
    form.send();
}
function setas(){ 
    let form = new XMLHttpRequest();
    form.onload = function (){console.log('done')};
    form.open("POST", "assets/htmls/formos.txt");
    form.send("Hello word");  //error 405 - server knows the request method, but the target resource doesn't support this method
} 
// setas();



//----------------------Kalendorius--------------------------//

const monthsEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const now = new Date();
let month=now;

console.log(now.toLocaleString());

function constructMonth(y, m){
    m = m < 0  ? 11:m;
    m = m > 11 ? 0:m;
    monthName=monthsEN[m];
    html=`<table>
            <thead>Mėnesis</thead>
                <tr>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>Th</th>
                    <th>F</th>
                    <th>St</th>
                    <th>Sn</th>                            
                </tr>
                <tr>
                    <td>d</td>
                </tr>
            </table>`;
    
    findMonth(y, m);
}

function findMonth(y, m){
    const requaredDateString = `${y}-${m}-01`;
    const date=new Date(requaredDateString);
    console.log(date.getFullYear(), monthsEN[m], date.getDay());
}
findMonth(2023,02)