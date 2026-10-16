"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let up = ",", down = ",";
for (let i = 1, j = 10; i <= 10; i++, j--) {
  up += i + ", ";
  down += j + ", ";
}
printOut(up + "<br>" + down + "<br>");
printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let secretNumber = 45; // the number we're trying to "guess" (1-60)
let guess;
let attempts = 0;

while (guess !== secretNumber) {
  guess = Math.floor(Math.random() * 60) + 1; // random number 1 to 60
  attempts++;
}

printOut("The computer guessed: " + guess + "<br>");
printOut("It took " + attempts + " attempts.<br>");
printOut(newLine);
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let secretNumber2 = 131131; // target between 1 and 1,000,000
let guess2;
let attempts2 = 0;

let startTime = Date.now();

while (guess2 !== secretNumber2) {
  guess2 = Math.floor(Math.random() * 1000000) + 1;
  attempts2++;
}

let endTime = Date.now();
let elapsed = endTime - startTime;

printOut("The computer guessed: " + guess2 + "<br>");
printOut("Number of guesses: " + attempts2 + "<br>");
printOut("Time taken: " + elapsed + " milliseconds<br>");
printOut(newLine);
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
{
  let primes = ",";

  for (let n = 2; n < 200; n++) {
    let isPrime = true;
    let divisor = 2;

    while (divisor < n) {
      if (n % divisor === 0) {
        isPrime = false;   // found a divisor, so n is not prime
      }
      divisor++;
    }

    if (isPrime) {
      primes += n + ",";
    }
  }

printOut(primes + "<br>");
}
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
{
  for (let row = 1; row <= 7; row++) {
    let line = "";

    for (let col = 1; col <= 9; col++) {
      line += "K" + col + "R" + row + " ";
    }

    printOut(line);   // after the inner loop finishes, before the outer loop repeats
  }
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
{
  const maxScore = 236;

  for (let student = 1; student <= 5; student++) {
    let score = Math.floor(Math.random() * maxScore) + 1;   // 1 to 236 inclusive
    let percentage = score / maxScore * 100;
    let grade;

    if (percentage >= 89) {
      grade = "A";
    } else if (percentage >= 77) {
      grade = "B";
    } else if (percentage >= 65) {
      grade = "C";
    } else if (percentage >= 53) {
      grade = "D";
    } else if (percentage >= 41) {
      grade = "E";
    } else {
      grade = "F";
    }

    printOut("Student " + student + ": " + score + " points (" + percentage.toFixed(1) + "%) = Grade " + grade);
  }
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
{
  // Step 2: helper that counts how often aNumber appears in aString
  function matchString(aString, aNumber) {
    let count = 0;
    for (let i = 0; i < aString.length; i++) {
      if (aString.charAt(i) === String(aNumber)) {
        count++;
      }
    }
    return count;
  }

  let throws = 0;
  let foundStraight = false;
  let foundThreePairs = false;
  let foundTower = false;
  let foundYahtzee = false;

  do {
    throws++;

    // Step 1: roll 6 dice and combine them into one string
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const d3 = Math.floor(Math.random() * 6) + 1;
    const d4 = Math.floor(Math.random() * 6) + 1;
    const d5 = Math.floor(Math.random() * 6) + 1;
    const d6 = Math.floor(Math.random() * 6) + 1;
    const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

    // Step 2: count each face
    const c1 = matchString(diceString, 1);
    const c2 = matchString(diceString, 2);
    const c3 = matchString(diceString, 3);
    const c4 = matchString(diceString, 4);
    const c5 = matchString(diceString, 5);
    const c6 = matchString(diceString, 6);

    // Step 3: the pattern string
    const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

    // Step 4 + 5: decode the pattern, print each result only the first time
    if (!foundStraight && matchString(countString, 1) === 6) {
      foundStraight = true;
      printOut("Full straight: " + throws + " throws (" + diceString + ")");
    }
    if (!foundThreePairs && matchString(countString, 2) === 3) {
      foundThreePairs = true;
      printOut("3 pairs: " + throws + " throws (" + diceString + ")");
    }
    if (!foundTower && matchString(countString, 4) === 1 && matchString(countString, 2) === 1) {
      foundTower = true;
      printOut("Tower: " + throws + " throws (" + diceString + ")");
    }
    if (!foundYahtzee && matchString(countString, 6) === 1) {
      foundYahtzee = true;
      printOut("Yahtzee: " + throws + " throws (" + diceString + ")");
    }

  } while (!foundStraight || !foundThreePairs || !foundTower || !foundYahtzee);

  printOut("Total throws needed to find all four: " + throws);
}
printOut(newLine);
