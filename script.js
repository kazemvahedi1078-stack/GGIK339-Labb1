
// UPPGIFT 2    Variabler och scope

  //console.log(land); programmet kraschar.
  //console.log(student); programmet kraschar.
  console.log(ålder); //undefined den har inget värde.

{
    let student = 70;
    var ålder = 25;
    const land = "Afghanistan";

    console.log(student);
    console.log(ålder);
    console.log(land); // man kan skriva ut const inuti blocket.

}
  // efter {}
  //console.log(land); att nå const utanför blocket är omöjlig och programmet kraschar.
 //console.log(student); det är samma med nyckerordet let den funkar bara inuti.
   console.log(ålder);// skriver ut den i både fallen utanför och inuti.



/* Reflektion

let fungerar bara när man anropar den inuti blocken, före och efter blocken programmet kraschar.
const fungerar bara när man anropar den inuti blocken, före och efter blocken programmet kraschar.
var är inte {} beroende och den fungerar inuti och efter men när den anropas före blocken, blir den undefined 
för att den har inget värde.

*/

// UPPGIFT 3

console.log("'2' == 2:", '2' == 2 )// true eftersom den gör typkonvertering
console.log("'3' === 3:" , '3'===3); // false på grund av att första trean är i sträng form och den andra inte och den måste vara exakt samma typ.

let check;  // undefined variabel
console.log("ternary test" ,check ? " är truthy" : " är falsy"); // kolla om undefined är truthy eller falsy.


console.log("NaN === NaN" , NaN === NaN); // false, NaN är aldrig lika med sig själv
console.log("null === undefined" , null == undefined); // true eftersom null är undefined
console.log("null === undefined" , null=== undefined); // false, olika typer.

/*
 Reflektion
== gör först en typkonvertering, vilket kan göra att olika datatyper ändå blir lika.
=== kräver samma värde och samma datatyp, därför blir vissa jämförelser falska.

När ett uttryck står för sig självt i en if-sats eller en ternary operator kontrolleras
om uttrycket är truthy eller falsy. Det innebär att uttrycket avgör om koden körs eller inte.
I detta fall check är undefined och det blir falsy på grund av att den har inget värde

NaN är ett ogiltigt tal och är aldrig lika med sig själv.
undefined betyder att ett värde saknas.
null betyder att värdet är tomt men avsiktligt.
null och undefined är lika med == men inte med === eftersom de är olika typer.
*/


// uppgift 4
// En funktion som tar ett namn som parameter och retunerar "Hej" + name
function greet(name) {
    console.log("INUTI funktionen", name);
    return "Hej " + name; 
}

// Här anropar jag funktionen utanför
 console.log(greet("Kazem"));

 //den globala variabeln
let name = 'Kazem';
//Skriver ut
console.log(name);

// här byter jag värde till den globala variabeln
name = 'Morteza';
console.log(name);

/*
Reflektion
Jag skapar en funktion som tar ett namn som parameter och returnerar texten "Hej" tillsammans med namnet. 
Jag anropade funktionen både direkt i en console.log och med en separat variabel som också heter name. 
Eftersom variabeln name ligger utanför funktionen påverkar den inte funktionsparametern, 
men jag kan ändå använda båda på olika sätt.

När jag ändrar den globala variabeln name ändras bara värdet utanför funktionen. 
Funktionen använder fortfarande det värde som skickas in vid anropet. 
Det visar tydligt skillnaden mellan ett lokalt värde (parametern) och ett globalt värde (variabeln utanför funktionen).

På så sätt ser man skillnaden mellan en parameter i en funktion och en variabel i det globala scopet.
*/


