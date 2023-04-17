/*----------------------------------------*/                                  
/*    Navigation showing and hiding       */
/*----------------------------------------*/                                  

const header = document.querySelector("header"); 
const show_hide_navigation = document.querySelector("#menu-spread-arrow");
const main = document.querySelector("main");
let show_menu = true;

show_hide_navigation.addEventListener("click", ()=>{
      if(!show_menu){
            header.classList.remove("hidden-up");
            main.classList.add("down");
            show_menu = true;
      }else{
            header.classList.add("hidden-up");
            main.classList.remove("down");
            
            show_menu = false;
      }
})


/*----------------------------------------*/                                  
/*    Scrollin (from navigation menu)     */
/*----------------------------------------*/     

// function scrollToPart(part){
//       let promise = new Promise (function (){
//             section = document.getElementById(part);
//             section.scrollIntoView({behavior: 'smooth'}, true);
//             })
//       promise.then(function (value){
//             console.log("cia")
//                   value = window.scrollY;
//                   value > 150 ? x = value - 150 : x = 0;
//                   window.scroll(0, x);
//                   })
// }

      // code works, but poore UX due to different scroll speeds. 
            window.addEventListener("hashchange",  () => {
                  setTimeout( ()=>{
                        const mediaQuery = window.matchMedia('(max-width: 900px)');
                        let x = window.scrollY;
                        if (mediaQuery.matches && (x > 200) ){
                              x -= 200;
                        }else if( x > 40 ){
                              x -= 40;
                        }
                        window.scroll(0, x);
                  }, 1000);
            });
           
            // window.addEventListener("hashchange",  () => {
            //       onscrollend = () => {
            //             const mediaQuery = window.matchMedia('(max-width: 900px)');
            //             let x = window.scrollY;
            //             if (mediaQuery.matches && (x > 200) ){
            //                   x -= 200;
            //             }else if( x > 40 ){
            //                   x -= 40;
            //             }
            //             window.scroll(0, x);
            //       }
            // });



          
/*-----------------------------------------*/                                  
/*    Home - professions changing          */
/*-----------------------------------------*/   

const profList = ["Web developer", "Frontend developer", "Backend developer", "Fullstack developer", "Web engineer",  "Frontend engineer", "Backend engineer","Fullstack engineer" ];

let key = 0;

setInterval(()=>{
            document.querySelector('#prof-list').innerHTML=profList[key];
            key++;
            if (key >= profList.length) key=0;
      },3000);


/*----------------------------------------------------------*/                                  
/*Portfolio - activate content according navigation request */
/*----------------------------------------------------------*/

const portfolioNavigation = document.querySelectorAll("#portfolio-nav li");
const portfolioInitial = document.querySelector("[portfolio='latest']");
const div=document.querySelector(".portfolio");

// first menu item activated.
fetch("resourcess/portfolio.json")
      .then(resp => resp.json())
      .then (resp => {
            for (x in resp) {
                  
                  if (resp[x].actual === "1")
                  div.innerHTML += jobs(resp[x]);
                  }
            });

// assigning eventlistener to menu items
portfolioNavigation.forEach ( li => {
      li.addEventListener('click', (e)=>{
            fetch("resourcess/portfolio.json")
            .then(resp => resp.json())
            .then(resp => showJobs(e, resp))
            .then(resp => {
                  for(x in portfolioNavigation)
                        portfolioNavigation[x].className="";
                  menu_highlight(e.target)
            })
      });
});

function showJobs(e, data){
      const list=e.target.innerHTML;
      const dataValues = Object.values(data); //all primary json objects converted to arrays.
      div.innerHTML="";
      // json data galima perkonvertuoti į masyvą su Object.values(data)  data-objekto pavadinimas
      dataValues.map((values) => {

            switch (list){
                  case 'My latest jobs' :
                        if (values.actual === "1")
                              div.innerHTML += jobs(values);
                        break;
                  case 'Best evaluated' :
                        if (values.award === "1")
                              div.innerHTML += jobs(values);
                        break;
                  case 'Landing pages' :
                        if (values.type === 'Landing pages')
                              div.innerHTML += jobs(values);
                        break;
                  case 'SPA applications' :
                        if (values.type === list)
                              div.innerHTML += jobs(values);
                        break;
                  default :
                        break;
            }
      });
}

const jobs = (values) => `<div class="scroll-view">
                              <img src="${values.pic}" />
                              <h5>${values.name}</h5>
                              <p>${values.description}</p>
                              <a href="${values.url}">Visit site</a>
                        </div>`;

//active menu item highligtning
function menu_highlight(item){
     item.className="active";
}