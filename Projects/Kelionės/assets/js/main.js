// Regionų (nav) duomenys: pavadinimas, žemėlapio paveikslėlis ir valstybių sąrašas
var imgPath = "assets/images/continents/";
var regions = {
  europa: {
    name: "Europa",
    image: imgPath + "Europa.png",
    items: ["Airija", "Albanija", "Andora", "Austrija", "Baltarusija", "Belgija",
            "Bosnija ir Hercegovina", "Bulgarija", "Čekija", "Danija", "Estija", "Graikija",
            "Islandija", "Ispanija", "Italija", "Jungtinė Karalystė", "Juodkalnija", "Kipras",
            "Kroatija", "Latvija", "Lenkija", "Lichtenšteinas", "Lietuva", "Liuksemburgas",
            "Malta", "Moldova", "Monakas", "Nyderlandai", "Norvegija", "Portugalija",
            "Prancūzija", "Rumunija", "Rusija", "San Marinas", "Serbija", "Slovakija",
            "Slovėnija", "Suomija", "Šiaurės Makedonija", "Švedija", "Šveicarija", "Ukraina",
            "Vatikanas", "Vengrija", "Vokietija"]
  },
  azija: {
    name: "Azija",
    image: imgPath + "Azija.png",
    items: ["Afganistanas", "Armėnija", "Azerbaidžanas", "Bahreinas", "Bangladešas", "Brunėjus",
            "Butanas", "Filipinai", "Gruzija", "Indija", "Indonezija", "Irakas", "Iranas",
            "Izraelis", "Japonija", "Jemenas", "Jordanija", "Jungtiniai Arabų Emyratai",
            "Kambodža", "Kataras", "Kazachstanas", "Kinija", "Kirgizija", "Kuveitas", "Laosas",
            "Libanas", "Malaizija", "Maldyvai", "Mianmaras", "Mongolija", "Nepalas", "Omanas",
            "Pakistanas", "Pietų Korėja", "Rytų Timoras", "Saudo Arabija", "Singapūras",
            "Sirija", "Šiaurės Korėja", "Šri Lanka", "Tadžikistanas", "Tailandas", "Turkija",
            "Turkmėnistanas", "Uzbekistanas", "Vietnamas"]
  },
  afrika: {
    name: "Afrika",
    image: imgPath + "Afrika.png",
    items: ["Alžyras", "Angola", "Beninas", "Botsvana", "Burkina Fasas", "Burundis",
            "Centrinės Afrikos Respublika", "Čadas", "Dramblio Kaulo Krantas", "Džibutis",
            "Egiptas", "Eritrėja", "Esvatinis", "Etiopija", "Gabonas", "Gambija", "Gana",
            "Gvinėja", "Bisau Gvinėja", "Kamerūnas", "Kenija", "Komorai",
            "Kongo Demokratinė Respublika", "Kongo Respublika", "Lesotas", "Liberija", "Libija",
            "Madagaskaras", "Malavis", "Malis", "Marokas", "Mauricijus", "Mauritanija",
            "Mozambikas", "Namibija", "Nigeris", "Nigerija", "Pietų Afrika", "Pietų Sudanas",
            "Pusiaujo Gvinėja", "Ruanda", "San Tomė ir Prinsipė", "Seišeliai", "Senegalas",
            "Siera Leonė", "Somalis", "Sudanas", "Tanzanija", "Togas", "Tunisas", "Uganda",
            "Zambija", "Zimbabvė", "Žaliasis Kyšulys"]
  },
  sAmerika: {
    name: "Šiaurės Amerika",
    image: imgPath + "-.Amerika.png",
    items: ["Antigva ir Barbuda", "Bahamos", "Barbadosas", "Belizas", "Dominika",
            "Dominikos Respublika", "Grenada", "Gvatemala", "Haitis", "Hondūras", "Jamaika",
            "JAV", "Kanada", "Kosta Rika", "Kuba", "Meksika", "Nikaragva", "Panama",
            "Salvadoras", "Sent Kitsas ir Nevis", "Sent Lusija", "Sent Vinsentas ir Grenadinai",
            "Trinidadas ir Tobagas"]
  },
  pAmerika: {
    name: "Pietų Amerika",
    image: imgPath + "p.Amerika.png",
    items: ["Argentina", "Bolivija", "Brazilija", "Čilė", "Ekvadoras", "Gajana", "Kolumbija",
            "Paragvajus", "Peru", "Surinamas", "Urugvajus", "Venesuela"]
  },
  australija: {
    name: "Australija ir Okeanija",
    image: imgPath + "Australija.png",
    items: ["Australija", "Fidžis", "Kiribatis", "Maršalo Salos", "Mikronezija", "Nauru",
            "Naujoji Zelandija", "Palau", "Papua Naujoji Gvinėja", "Saliamono Salos", "Samoa",
            "Tonga", "Tuvalu", "Vanuatu"]
  },
  lietuva: {
    name: "Lietuva",
    image: imgPath + "Europa.png",
    items: ["Vilnius", "Kaunas", "Klaipėda", "Trakai", "Palanga", "Kuršių nerija"]
  }
};

var tabbedPanels = new Spry.Widget.TabbedPanels("menu");
var menu = document.getElementById("menu");
var countriesBox = document.getElementById("valstybes");

// Tab'ai nesikeičia, keičiasi tik jų turinys pagal pasirinktą valstybę
function showCountry(name, link) {
  ["informacija", "objektai", "zemelapis", "kita"].forEach(function (id) {
    document.getElementById("panel-" + id).textContent = name;
  });

  countriesBox.querySelectorAll("a").forEach(function (a) {
    a.classList.toggle("selected", a === link);
  });

  menu.hidden = false;
  tabbedPanels.showPanel(0);
}

// Mažina šriftą, kol visos valstybės sutelpa į fiksuoto dydžio #valstybes be slinkties
function fitCountries() {
  var size = 16;
  countriesBox.style.fontSize = size + "px";
  while (countriesBox.scrollHeight > countriesBox.clientHeight && size > 6) {
    size -= 0.5;
    countriesBox.style.fontSize = size + "px";
  }
}

// Pasirinkus regioną: pakeičiamas žemėlapis ir valstybių sąrašas, tab'ai paslepiami
function showRegion(key) {
  var region = regions[key];
  if (!region) return;

  var mapImg = document.getElementById("map-img");
  mapImg.src = region.image;
  mapImg.alt = region.name;

  countriesBox.innerHTML = "";
  region.items.forEach(function (item) {
    var a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    a.addEventListener("click", function (e) {
      e.preventDefault();
      showCountry(item, a);
    });
    countriesBox.appendChild(a);
  });
  menu.hidden = true;
  fitCountries();

  document.querySelectorAll("header nav a[data-region] li").forEach(function (li) {
    li.classList.toggle("selected", li.id === key);
  });
}

document.querySelectorAll("header nav a[data-region]").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    showRegion(a.dataset.region);
  });
});

showRegion("europa");
