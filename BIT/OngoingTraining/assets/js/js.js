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
    setUrl(x){
        return this.url=x;
    }
    setDescription(x){
        return this.description = x;
    }
}


// Žemiau esančios kelios funkcijos ir kintamieji - abstrakcijos, reikia juos suformuoti.
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


// duomenų apie užduotį paėmimas iš txt formato failo. Kol nemoku susidėti, reikia susivedinėti pačiam ir sužymėti, kad nuskaitant būtų galima susidėti masyvą.
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

class Calendar{
    constructor(nowdate){
        this.nowdate = new Date(nowdate); //reikia keisti į paduodamą reikšmę
    };

    getYear(){
        this.year = this.nowdate.getFullYear();
        return this.year;
    }
    getMonth(){
        this.month = this.nowdate.getMonth();
        return this.month;
    }
    getMonthDay(){
        this.monthDay = this.nowdate.getDate();
        return this.monthDay;
    }

    setYear(x){
        this.year = x;
    }
    setMonth(x){
        this.month = x;
    }
    setMonthDay(x){
        this.monthDay = x;
    }
    
    getLastMonthDay(){
        let m = this.month+1
        let d = new Date(this.year, m, 0);
        this.lastMonthDay=d.getDate();
        return this.lastMonthDay;
    }

    testFunction() {
        console.log(this.year, this.getYear());
        console.log(this.lastMonthDay, this.getLastMonthDay());
    }
 
    #getFirstDay(){
        const firstDay=new Date(this.year, this.month, 1, 12);
        let firstDayOfWeek=firstDay.getDay();
        if (firstDayOfWeek==0)
            firstDayOfWeek=7;
        return firstDayOfWeek;  //gaunama pirmos mėnesio dienos savaitės diena (pirm, ... sek)
    }
    
    #findNumberOfWeeks(){
        const numberOf1WeekDays=8-this.#getFirstDay();
        let weeks = Math.ceil((this.lastMonthDay-numberOf1WeekDays)/7)+1;
        return weeks;
    };

    
    constructMonth(){
        let y=2023;
        let m=0;
        if (document.querySelector("#right").value="2"){
            y="kažkas";
            m="kažkas";
        }
    
        let dayOfWeek=this.#getFirstDay()
        let numberOfWeeks=this.#findNumberOfWeeks();
        let dayCounter = 1;
        
        let monthName=monthsEN[this.month];
    
        let html=`<table>
                <thead>${monthName}</thead>
                    <tr>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>Th</th>
                        <th>F</th>
                        <th>St</th>
                        <th>Sn</th>                            
                    </tr>`;
        // console.log(dayOfWeek, this.findNumberOfWeeks(), lastMonthDay, dayCounter, monthName, html);
        for (let i=1; i<=numberOfWeeks; i++){
            html=html+'<tr>';
            if (i==1){
                for (let z=1; z<dayOfWeek; z++)
                html=html+'<td></td>'
                
                for (let z=dayOfWeek; z<=7; z++){
                    html=html+`<td>${dayCounter}</td>`;
                    dayCounter++;
                }
            }else{
                for (let i=1; i<=7; i++){
                    if(dayCounter>=this.getLastMonthDay()+1){
                        html=html+'<td></td>'
                    }else{
                        html=html+`<td>${dayCounter}</td>`;
                        dayCounter++;
                    }
                }
            }
            html=html+'</tr>'
        }
        html=html+'</table>'
        document.querySelector("#center").innerHTML=html;
    }
}

const now=new Date();
const currentMonth = new Calendar(now);
console.log ('pagauti metai-',currentMonth.getYear(),' mėnuo-',currentMonth.getMonth(),' mėnesio diena-',currentMonth.getMonthDay());
currentMonth.setYear(2024);
currentMonth.setMonth(5);
currentMonth.setMonthDay(4);
console.log ('pakeistas data, metai -',currentMonth.year,' mėnuo-',currentMonth.month,' mėnesio diena-',currentMonth.monthDay);
console.log(currentMonth.getLastMonthDay());
// console.log(currentMonth.getFirstDay());
// console.log(currentMonth.findNumberOfWeeks());
currentMonth.constructMonth();

console.log(currentMonth.testFunction())
