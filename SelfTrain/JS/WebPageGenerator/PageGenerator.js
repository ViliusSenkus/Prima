
function createPage(){
    let styleFormal = '<style>:root{scroll-behavior: smooth;}*{box-sizing: border-box;font-family:Arial, Helvetica, sans-serif;}header,footer{background-color: rgb(36, 49, 53);color: white;text-align: center;padding: 5px;}header{margin-bottom: 5px;}footer{margin-top: 5px;}';
    let styleGeneral1 = 'main{text-align:center;display:flex;flex-direction:row-reverse;justify-content:space-between;}.shadow{box-shadow:2px 2px 5px grey;}section .shadow{margin:5px;min-width:200px;}';
    let styleGeneral2 = 'aside,section{margin:0 10px;}aside{max-width: 200px;}p{text-align: left;padding: 10px;}.flex{display: flex;flex-wrap: wrap;justify-content: center;}';
    let styleGeneral3 ='.menu{width:300px;}ul{margin:10px;padding:0;}li{list-style: none;text-align: left;padding: 5px;border-bottom: dotted 1px black;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;margin:0;background-image: linear-gradient(to right, rgb(183, 250, 255),  white 20%);transition: background 0.3s ease;}';
    let styleGeneral4 ='a{text-decoration: none;color:  rgb(36, 49, 53);}li:hover{background-image:linear-gradient(to right, rgb(183, 250, 255),  white 30%);}</style>';
    let styleGeneral = styleFormal+styleGeneral1+styleGeneral2+styleGeneral3+styleGeneral4;
    let asidePart = '<main><aside class="shadow"><h4>Latests adds</h4><ul><li>add1</li><li>add2</li></ul><p>this section will be formated after more js knowledge and practice will be gained</p></aside>';
    let headerPart= '<header><h1>NameOfPage</h1><h4>SubName</h4></header>';
    let sectionPart = '<section><div class="flex"><div class="shadow menu"><h4>ContentName</h4><ul><a href="#"><li>pagename1(AddLink)</li></a></ul><p>comentAfterMenu</p></div></div></section></main>';
    let footerPart = '<footer><p>SomeComent</p><p>created by Vilius Senkus &#169; &#174; &#8482;</p></footer>';
    pageContent = styleGeneral+headerPart + asidePart+sectionPart+footerPart; 
    document.getElementById("general").innerHTML = pageContent;
}
