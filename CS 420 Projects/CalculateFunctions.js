var calculator = require('./MathFunctions');

var a;
var b;

const readline = require('readline').createInterface
({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Give me a number!`, (number) => 
{
  console.log(`Number is:  ${number}!`)
  readline.close()
})

  

//console.log("Result is: " + calculator.add(a,b));
//console.log("Result is: " + calculator.subtract(a,b));
//console.log("Result is: " + calculator.multiply(a,b));
//console.log("Result is: " + calculator.divide(a,b));