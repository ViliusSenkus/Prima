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

document.querySelectorAll('header nav > a').forEach(el => 
      el.addEventListener("click",  (e) => {
            e.preventDefault();
            const header_height = document.querySelector('header').offsetHeight;
            const target = el.getAttribute('href');
            if(target !== "#"){
                  const target_block = document.querySelector(target);
                  const target_Y = (target_block.offsetTop);
                  window.scrollTo({top: target_Y - header_height});
            } else {
                  window.scrollTo({top:0})
            }
      })
);
      
      

// gathering information requered for page position fix during resizing.
      

let relative_position = 0;

window.addEventListener('scroll', () => {
      const document_height = document.querySelector('body').offsetHeight;
      const current_position = window.pageYOffset;      
      relative_position = current_position / document_height;
      console.log("rel " + relative_position);
})
window.addEventListener("resize", () => {
            const document_height = document.querySelector('body').offsetHeight;
            const new_position = document_height * relative_position;
            window.scrollTo({top:new_position});
            console.log("new " + new_position);
})



          
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
                              <h4>${values.name}</h4>
                              <p>${values.description}</p>
                              <a href="${values.url}">Visit site</a>
                        </div>`;

//active menu item highligtning
function menu_highlight(item){
     item.className="active";
}