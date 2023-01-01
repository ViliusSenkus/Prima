let d;
let t;
let startCaunt = false;

function getTime(event){
    event.preventDefault();
    clearInterval(startCaunt);
    d=document.querySelector("[name='day']").value;
    t=document.querySelector("[name='time']").value;
    arg=`${d} , ${t}`;
    countDown(arg);
}

function countDown(date="2024-01-01, 0:0:0"){
    startCaunt = setInterval(()=>{
        let startDate=new Date();
        let stopDate = new Date(date);
        let secGap = Math.round((stopDate-startDate)/1000);
        let minGap = Math.floor(secGap/60);
        let hGap = Math.floor(minGap/60);
        let dayGap = Math.floor(hGap/24);

        let restH=hGap-(dayGap*24);
        let restM=minGap-(hGap*60);
        let restS=secGap-(minGap*60);

        let gap= "It's Current Time";

        if (secGap==0){
            myEvent();
            return
        }

        if ((stopDate-startDate)<-1000*60)
            gap='Your time has allready passed'; 

        if (secGap >= 1 && gap!='Desired time has passed more than a minute ago'){
            gap = `${restS} sek.`;
            if (minGap >=1)
                gap=`${restM} min. ${gap}`;
                if (hGap >=1)
                    gap=`${restH} val. ${gap}`;
                    if (dayGap >=1)
                        gap=`${dayGap} d. ${gap}`;    
        }
        document.querySelector("#laikas").innerHTML=`<p class="center text-danger fs-2 fw-bold">${gap}</p>`;
    }, 1000);
}

function myEvent(){
    clearInterval(startCaunt);
    //below any code you want to execute on neaded time is reached
    document.querySelector("#laikas").innerHTML="<p class='center text-danger fs-2 fw-bold'>It's PARTY time</p>";
}