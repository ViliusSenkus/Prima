# MTV Brown Top 20 – projekto pastabos

Statinis puslapis (be serverio, be build žingsnio) MTV Top 20 sąrašams 1989-09-16 – 2009-04-11 naršyti.
Atidaroma dukart spustelėjus `index.html`.

## Failai
- `index.html` – visas puslapis (CSS + JS viename faile).
- `data.js` – sugeneruoti duomenys: `window.MTV_DATA={songs:[[artist,title,ytUrl],...],entries:[[date,rank,songIdx],...]}`. Rankomis nerašyti.
- `build_data.py` – `data.js` generatorius iš CSV: `python build_data.py "kelias/mtv.csv"`.
- `primary_data.csv` - pirminis duomenų šaltinis. Skyriklis `;`, kodavimas cp1252, stulpeliai: Date;Rank;Artist;Title;Youtube Link;Joint for search. 2107 dainos, 19716 įrašų. YouTube nuorodos CSV yra tik 6 dainoms. Neliečiamas ir nekeičiamas, saugomas tik jei būtų poreikis pradiniam duomenų atstatymui.

## Taisyklės
- Originalūs duomenys niekada nekeičiami; puslapis tik filtruoja / rūšiuoja / rodo.
- Vartotojo nuorodos (pridėtos / ištrintos) saugomos tik `localStorage` raktu `mtv_links_v1` (`{added:{songIdx:[url]}, removed:{songIdx:[url]}}`); yra JSON eksportas / importas.
- Du rodiniai: „Savaitės“ (pradinis) ir „Dainos“ (agreguota).
- Pradinė tvarka: data mažėjančiai, savaitės viduje vieta 1→20. Rūšiuojant pagal datą didėjančiai – savaitės viduje 20→1 (rikiavimas „kaip sąrašas iš viršaus į apačią“). Datos antraštės juostos rodomos tik rūšiuojant pagal datą.
- Miniatiūros: `https://img.youtube.com/vi/<id>/mqdefault.jpg`, nuoroda atsidaro naujame skirtuke. Trynimas – × užvedus ant miniatiūros. Ant miniatiūrų jokių užrašų (CSV žymė pašalinta sąmoningai).

## Stilius (90-ųjų „MTV Brown“)
- Spalvų kintamieji `:root` bloke: ruda (`--bg #1c110a`, `--panel`, `--line`), oranžinė `--accent`, geltona `--accent2`, rožinė `--pink`, žydra `--cyan`.
- Šriftai: Impact (`--impact`) antraštėms, pavadinimams, atlikėjams (22px), datoms; kūnas Trebuchet MS.
- Elementai: pakreiptas geltonas „MTV“ logotipas, bėgantis geltonas užrašų ruožas, kampuoti (be užapvalinimų) laukai, geltonos pakreiptos filtrų antraštės, datos kaip geltoni „lipdukai“ (`.dt`) su rožiniu šešėliu, #1 vieta – geltona žvaigždė, miniatiūros su geltonu rėmu ir rožiniu šešėliu.
- Atsakas mažiems ekranams: `@media (max-width:860px)`.

## Failų įrašymo ypatumas (Claude cloud sesija → K:\)
Po failo nukopijavimo į outputs aplanką `device_commit_files` kartais įrašo seną versiją. Po kiekvieno įrašymo patikrinti dydį per `device_list_dir` ir, jei nesutampa, palaukti kelias sekundes ir įrašyti dar kartą. Naršyklėje po atnaujinimo – Ctrl+F5.
