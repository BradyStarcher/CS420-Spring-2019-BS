// This is the Calculator class that is supposed
// to run through each option by adding,
// subtracting, multiplying, dividing,
// or square rooting.
// **I had trouble with readline trying
// to get user feedback when asking to put
// in number to use the calculator**

var calculator = require('./MathFunctions');

var a = 5;
var b = 4;
var c = 7;
var d = 10;
var e = 12;
var f = 81

//const readline = require('readline').createInterface
//({
  //input: process.stdin,
  //output: process.stdout
//})

//readline.question(`Give me a number!`, (number) => 
//{
  //console.log(`Number is:  ${number}!`)
  //readline.close()
//})

  

console.log("Result of 5+4: " + calculator.add(a,b));
console.log("Result of 10-7: " + calculator.subtract(d,c));
console.log("Result of 10*4: " + calculator.multiply(b,d));
console.log("Result of 12/12: " + calculator.divide(e,e));
console.log("Result of 7 squared: " + calculator.sqroot(c));