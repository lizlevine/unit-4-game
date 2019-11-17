// GLOBAL VARIABLES

// "Crystals" object with 4 "sub-objects" defined by properties or key/value pairs

var crystals = {
  pink: {
    name: "pink-saphire",
    total: 0
  },
  white: {
    name: "diamond",
    total: 0
  },
  aqua: {
    name: "aquamarine",
    total: 0
  },
  green: {
    name: "emerald",
    total: 0
  }
};

// possible outcomes: Scoreboard

var winsTotal = 0;
var lossesTotal = 0;
var currentTotal = 0;
var targetTotal = 0;

// below are FUNCTIONS – first off, code random number generators in plain js - refactor to jQuery triggered by click events
//  starts and restarts the game;
var randomNums = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var beginGame = function() {
  // here we need to reset the game

  var currentTotal = 0;

  // set a new random number to target btwn 19-120
  targetTotal = randomNums(19, 120);

  // set values (btwn 1-12) for each gem object within main crystals object using object dot notation

  crystals.pink.total = randomNums(1, 12);
  crystals.white.total = randomNums(1, 12);
  crystals.aqua.total = randomNums(1, 12);
  crystals.green.total = randomNums(1, 12);

  // update HTML to reflect game status changes ***  in plain js - refactor to jQuery
  // statement below will prevent alert so moved them to line 73 -
  // document.getElementById("wins-total").innerHTML = winsTotal;
  // document.getElementById("losses-total").innerHTML = lossesTotal;

  //    test with alerts;

  alert("Target Score: " + targetTotal);
  alert(
    "pink:  " +
      crystals.pink.total +
      " & white: " +
      crystals.white.total +
      " & aqua: " +
      crystals.aqua.total +
      "green: " +
      crystals.green.total
  );

  // update HTML to reflect game status changes ***  in plain js - refactor to jQuery;

  document.getElementById("random-num-display").innerHTML = targetTotal;
  document.getElementById("score-count").innerHTML = currentTotal;
  //   document.getElementById("score-count").innerHTML = currentTotal;
  document.getElementById("wins").innerHTML = winsTotal;
  document.getElementById("losses").innerHTML = lossesTotal;

  //   targetTotal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

  //   pink = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   white = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   aqua = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   green = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

  // instead of all that redundancy, used instead;

  // set a different value for each of the gemstones btwn 1-12
  // update HTML to reflect all changes as game proceeds
};

// below is code random number generators triggered by click events (this part jQuery)

beginGame();

$("#pink").click(function() {
  alert("");
});
$("#white").click(function() {
  alert("");
});
$("#aqua").click(function() {
  alert("");
});
$("#green").click(function() {
  alert("");
});

// var gameStartRandom = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// var gameStart = function() {
//   currentTotal = 0;
// };

// _________________________________________________________________________________

// below is FUNCTION CALL process
// note, code taken from last weeks exercise #12 in JQ, CrystalExample... borrow this code;

// ________________________________________________________________________________
// var targetNumber = 53;

// $("#number-to-guess").text(targetNumber);

// var counter = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
// var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
// for (var i = 0; i < numberOptions.length; i++) {
// For each iteration, we will create an imageCrystal
//   var imageCrystal = $("<img>");

// First each crystal will be given the class ".crystal-image".
//   // This will allow the CSS to take effect.
//   imageCrystal.addClass("crystal-image");

// Each imageCrystal will be given a src link to the crystal image
//   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//   $("#crystals").append(imageCrystal);
// }

// This time, our click event applies to every single crystal on the page. Not just one.
// $(".crystal-image").on("click", function() {

// Determining the crystal's value requires us to extract the value from the data attribute.
// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//   var crystalValue = $(this).attr("data-crystalvalue");
//   crystalValue = parseInt(crystalValue);

// We then add the crystalValue to the user's "counter" which is a global variable.
// Every click, from every crystal adds to the global counter.
//   counter += crystalValue;

//   // All of the same game win-lose logic applies. So the rest remains unchanged.
//   alert("New score: " + counter);

//   if (counter === targetNumber) {
//     alert("You win!");
//   } else if (counter >= targetNumber) {
//     alert("You lose!!");
//   }
// });
