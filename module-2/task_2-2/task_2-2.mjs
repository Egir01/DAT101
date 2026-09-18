"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//* Put your code below here!*/
let originalExpression = "2 + 3 * 2 - 4 * 6";
let newExpression = "2 + 3 * (2 - 4) * 6";
let answer = 2 + 3 * (2 - 4) * 6;
printOut(originalExpression);
printOut(newExpression);
printOut(answer);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const oneInch = 25.4 // millimeters
const meterInMillimeters = 25 * 1000;
const centimeterInMillimeters = 34 * 10;
const milimeters = meterInMillimeters + centimeterInMillimeters
const inches = milimeters / oneInch;
printOut("The number of inches in 25meters and 34 centimeters is: ");
printOut(inches); 
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3days = 3, part3hours = 12, part3minutes = 14, part3seconds = 45;
printOut("The total number of minutes in " + part3days + " days, " + part3hours + " hours, " + part3minutes + " minutes, and " + part3seconds + " seconds is: ");
let part3answer = (part3days * 24* 60) + (part3hours * 60) + part3minutes + (part3seconds / 60);
printOut(part3answer);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const totalDays = 6322.52 / (24* 60);
const wholedays = Math.floor(totalDays);
const leftoverFraction = totalDays - wholedays;
const leftoverHours = leftoverFraction * 24;
const leftoverWholeHours = Math.floor(leftoverHours);
const leftoverFractionHours = leftoverHours - leftoverWholeHours;
const leftoverMinutes = leftoverFractionHours * 60;
const wholeMinutes = Math.floor(leftoverMinutes);
const wholeseconds = ((leftoverMinutes - Math.floor(leftoverMinutes)) * 60).toFixed(0);


printOut("The total number of whole days is: " + wholedays);
printOut("The leftover hours is: " + leftoverWholeHours);
printOut("The leftover minutes is: " + wholeMinutes);
printOut("The whole seconds is: " + wholeseconds);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Exchange rate: 76 NOK = 8.6 USD
const nokRate = 76 / 8.6;   // 1 USD in NOK
const usdRate = 8.6 / 76;   // 1 NOK in USD

const amount = 54;

const usdToNok = Math.round(amount * nokRate); // 54 USD -> NOK
const nokToUsd = Math.round(amount * usdRate); // 54 NOK -> USD

printOut("The amount of " + amount + " USD in NOK is: " + usdToNok);
printOut("The amount of " + amount + " NOK in USD is: " + nokToUsd);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const quote = "There is much between heaven and earth that we do not understand.";
printOut(quote.length);
printOut(quote.charAt(19));
printOut(quote.substring(35, 8));
printOut(quote.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut(5>3); 
printOut(7<=7); 
printOut("a">"b");
printOut("1"<"a");
printOut("2500"<"abcd");
printOut("arne"!=="thomas");
printOut(2>=5);
printOut("abcd"<="bcd");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
printOut(Number("254"));
printOut(Number(parseInt("57.23")));
printOut(Number(parseFloat("23 Kroner")));
; /* Put your code below here!*/

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const r = Math.floor(Math.random() * 360)+ 1;
printOut(r); 
let t = Math.ceil(Math.random() * 360);
printOut(t);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let weeks = Math.floor(131/7);
let daysLeftover = 131 % 7;
printOut("The number of weeks in 131 days is: " + weeks);
printOut("The number of leftover days is: " + daysLeftover);
printOut(newLine);