// UPPGIFT 2    Variabler och scope

  //console.log(land); programmet kraschar.
  //console.log(student); programmet kraschar.
  console.log(ålder); //undefined den har inget värde.

{
    let student = 70;
    const land = "Afghanistan";
    console.log(land); // man kan skriva ut const inuti blocket.
    console.log(student);
    var ålder = 25;
    console.log(ålder);

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
console.log("'3' === 3:" , '3'===3); // på grund av att första trean är i sträng form och den andra inte och den måste vara exakt samma typ som den ges för att den accepterar.


console.log("NaN === NaN:" , NaN === NaN); // NaN är aldrig lika med sig själv
console.log("null === undefined:" , null == undefined); // true eftersom null är undefined
console.log("null === undefined:" , null=== undefined); // false, olika typer.

/*
 Reflektion
 "==" gör typkonvertering  och "===" på grund av att första trean är i stäng form och den andra inte och 
 den måste vara exakt samma typ som den ges för att den ska  accepteras.
 NaN är aldrig lika med sig själv null är undefined och det betyder att den har inget värde och den är tom
 === och den sista har inte samma type det är därför den blir false.

*/


// uppgift 4
const greet = (name) => {
    console.log( name);
    return "Hej " + name;
};