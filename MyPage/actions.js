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

            // window.addEventListener("hashchange",  () => {
            //       console.log("haschange")
            //       window.scrollTo(window.scrollY - 180)
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
/*    Portfolio - response according navigation request     */
/*----------------------------------------------------------*/

const portfolioNavigation = document.querySelectorAll("#portfolio-nav li");


portfolioNavigation.forEach ( li => {
      li.addEventListener('click', (e)=>{
            fetch("resourcess/portfolio.json")
            .then(resp => resp.json())
            .then (resp => showJobs(e, resp));
            
      });
});

function showJobs(e, data){
      const list=e.target.innerHTML;
      const div=document.querySelector("#portfolio-container");
      const dataValues = Object.values(data); //all primary json objects converted to arrays.
      div.innerHTML="";
      dataValues.map((values) => {

            switch (list){
                  case 'My latest jobs' :
                        if (values.actual === "1")
                              div.innerHTML +=
                                    `<div class="scroll-view">
                                          <img src="${values.pic}" />
                                          <h5>${values.name}</h5>
                                          <p>${values.description}</p>
                                          <a href="${values.url}">Visit site</a>
                                    </div>`;
                        break;
                  case 'Best evaluated' :
                        if (values.award === "1")
                              div.innerHTML += 
                              `<div class="scroll-view">
                                    <img src="${values.pic}" />
                                    <h5>${values.name}</h5>
                                    <p>${values.description}</p>
                                    <a href="${values.url}">Visit site</a>
                              </div>`;
                        break;
                  case 'Landing pages' :
                        if (values.type === 'Landing pages')
                              div.innerHTML += 
                              `<div class="scroll-view">
                                    <img src="${values.pic}" />
                                    <h5>${values.name}</h5>
                                    <p>${values.description}</p>
                                    <a href="${values.url}">Visit site</a>
                              </div>`;
                        break;
                  case 'SPA applications' :
                        if (values.type === list)
                              div.innerHTML += 
                              `<div class="scroll-view">
                                    <img src="${values.pic}" />
                                    <h5>${values.name}</h5>
                                    <p>${values.description}</p>
                                    <a href="${values.url}">Visit site</a>
                              </div>`;
                        break;
                  default :
                        break;
            }

      });
}

      
