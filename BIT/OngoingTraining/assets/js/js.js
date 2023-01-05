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

const nowdate = new Date();
let month = nowdate.getMonth();
let year = nowdate.getFullYear();
let monthDay = nowdate.getDate();

function constructMonth(){
    let y=2023;
    let m=0;
    if (document.querySelector("#right").value="2"){
        y="kažkas";
        m="kažkas";
    }

    let dayOfWeek=findFirstDay(year, month)
    let numberOfWeeks=findNumberOfWeeks(year, month);
    let lastMonthDay=findLastMonthDay(year, month);
    let dayCounter = 1;
    
    monthName=monthsEN[month];

    html=`<table>
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
    
    for (let i=1; i<=numberOfWeeks; i++){
        html=html+'<tr>';
        if (i==1){
            for (let z=1; z<dayOfWeek; z++)
            html=html+'<td></td>'
            
            for (let z=dayOfWeek; z<=7; z++){
                html=html+`<td>${dayCounter}</td>`;
                counter++;
            }
        }else{
            for (let i=1; i<=7; i++){
                if(counter>=lastMonthDay+1){
                    html=html+'<td></td>'
                }else{
                    html=html+`<td>${dayCounter}</td>`;
                    counter++;
                }
            }
        }
        html=html+'</tr>'
    }
    html=html+'</table>'
    document.querySelector("#center").innerHTML=html;
}

function findFirstDay(){
    const firstDay=new Date(year, month, 1, 12);
    let firstDayOfWeek=firstDay.getDay();
    if (firstDayOfWeek==0)
        firstDayOfWeek=7;
        console.log(firstDayOfWeek);
    return firstDayOfWeek;
}


function findNumberOfWeeks(){
    
};

function findLastMonthDay(){
    let nextMonthDays=[29, 30, 31, 32];
    nextMonthDays.map((i)=>{
        let lastDay = new Date(nowdate).setDate(i);
        lastDay=new Date(lastDay);
        nextMonth=lastDay.getMonth();
        console.log('nowdate', nowdate.getMonth(), ' nextMonth ', nextMonth, )
        if(nextMonth!=nowdate.getMonth())
            return i-1;
    });
};    

// gal susikurti kalendoriaus klasę ir iš jos darytis 3 mėnsių objketus (nowMonth, prevMonth, nextMonth), o sukant kalendorių būtų galima tiesiog priskirti vienam objektui, kito parametrus.

class Month{
    constructor(){
        
    };

    findLastMonthDay(){
        let nextMonthDays=[29, 30, 31, 32];
        nextMonthDays.map((i)=>{
            let lastDay = new Date(nowdate).setDate(i);
            lastDay=new Date(lastDay);
            nextMonth=lastDay.getMonth();
            console.log('nowdate', nowdate.getMonth(), ' nextMonth ', nextMonth, )
            if(nextMonth!=nowdate.getMonth())
                return i-1;
        });
    };

    findFirstDay(){
        const firstDay=new Date(year, month, 1, 12);
        let firstDayOfWeek=firstDay.getDay();
        if (firstDayOfWeek==0)
            firstDayOfWeek=7;
            console.log(firstDayOfWeek);
        return firstDayOfWeek;
    }
    
    findNumberOfWeeks(){
        const numberOf1WeekDays=findFirstDay()-7;
        const lastMonthDay=findLastMonthDay();
        const weeks=(lastMonthDay-numberOf1WeekDays)/7
        weeks = weeks%7==0? weeks
        let counter=1;
        for (i=2; i<=6; i++){

        }
    };
}