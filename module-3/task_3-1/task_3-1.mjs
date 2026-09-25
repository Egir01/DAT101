"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("--- Part 1 ---");

let wakeUpTime = 7; // run with 6, then 7, then 8

if (wakeUpTime === 7) {
  printOut("I can catch the bus to school");
}

printOut("--- Part 2 ---");

wakeUpTime = 8; // run with 6, then 7, then 8

if (wakeUpTime === 7) {
    printOut("I can take the bus to school");
} else { 
    printOut("I have to take the car to school");

}

printOut("--- Part 3 ---");

wakeUpTime = 6; // run with 6, then 7, then 8

if (wakeUpTime === 7) {
    printOut("I can take the bus to school");
} else if (wakeUpTime === 6) {
    printOut("I have to take the train to school");
} else {
    printOut("I have to take the car to school");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
const part4Number = 0.00001
if (part4Number > 0){
printOut("the number is positive");
}else if (part4Number < 0) {
printOut("the number is negative");
}else{
printOut("the number is zero");
}

printOut(newLine);

let num = 5; // run with different values, e.g. 5, -3, 0

if (num >= 0) {
  printOut("Positive");
} else {
  printOut("Negative");
}

num = 0
if (num > 0) {
    printOut("Positive");
    } else if (num < 0) {
    printOut("Negative");
    } else {
    printOut("Zero");
    } 
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`The image size = ${imageUserSize}`);
if (imageUserSize >= imageMinSize) {
if (imageUserSize <= imageMaxSize) {

printOut("Thank you");
} else
printOut ("Image is too large");
}else{
printOut("Image is too small");
}

if (imageUserSize > imageMaxSize) {
printOut("Image is too large");
}
else if (imageUserSize < imageMinSize) {
printOut("Image is too small");
}
else {
printOut("Thank you");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName =
monthList[Math.floor(Math.random() * noOfMonth)];
printOut(monthName);

if (monthName.includes("r")) {
printOut("you must take vitamin D");
}else{
printOut("you dont need extra vitamin D")
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

switch (monthName) {
case "January":
case "March":
case "July":
case "August":
case "October":
case "December":
printOut("31 days in month");
break;
case "February":
printOut("28 days in month");
default:
printOut("30 days in month");

}
printOut(newLine);

printOut("--- Part 10 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Imagine you have an art gallery, but you need to refurbish the premises, so you close the galery from
//March through may, but in April you hvae temporary premises in the building next door. Use the month
//constant exercise 8 to inform the status of your gallery in that month
//if? switch case?

if (monthName === "March" || monthName === "May")
{
printOut("SORRY, the gallery is CLOSED");
}else if(monthName === "April"){
printOut("Sorry Main Galley is closed, you are welcome into the premiss next door");
}else{
printOut("Welcome to the gallery!");
}

printOut(newLine);