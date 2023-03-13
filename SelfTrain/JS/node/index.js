// Node.js training
const kelias = require("path");

// console.log(__dirname);
// console.log(kelias.basename(__filename));
function griebk(flag){
      let reiksme=(process.argv.indexOf(flag)+1);
      return process.argv[reiksme];
}

let vardas=griebk("--vardas");
 //grazins tai kas eis po --vardas, kadangi grab f-joj +1

// console.log(vardas);

// !!!!!!!!!!!!!!Paleidžiant programą po node index reikia nurodyti kokius nori kintamuosiuos bet būtinai "--vardas" ir dar vieną rekšmę po jo kad matytusi veikimas.

let klausimai=[
      "Koks vardas?",
      "Kiek metų?",
      "Ko nori?"
];
let atsakymai =[];

function paklausimas(indeksas=0){
      process.stdout.write(`\n\n ${klausimai[indeksas]}`);
      process.stdout.write('Ats.: ');
}
 //on prideda event'a "exit" pabaigus procesą, "data" - gavus duomenų. Turi būti ir daugiau.
process.stdin.on("data", (duomenys) => {
      if (klausimai.length>atsakymai.length){
      paklausimas(atsakymai.length);
      atsakymai.push(data.toString().trim());
      }else{
            process.exit()
      }
})

process.on("exit", function(){   
     process.stdout.write(`\n\n\n jusu atsakymai : ${atsakymai[1]}, ${atsakymai[2]}, ${atsakymai[3]}`)
});

