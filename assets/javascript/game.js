// GLOBAL VARIABLES

// "Crystals" object with 4 "sub-objects" defined by properties or key/value pairs

// alert("this is a test since nothing is working right now!!");

var crystals = {
  pink: {
    name: "pink",
    total: 0
  },
  diamond: {
    name: "diamond",
    total: 0
  },
  aqua: {
    name: "aqua",
    total: 0
  },

  emerald: {
    name: "emerald",
    total: 0
  }
};

// possible outcomes: Scoreboard

var currentTotal = 0;
var targetTotal = 0;
var winsTotal = 0;
var lossesTotal = 0;

// below are FUNCTIONS – first off, code random number generators in plain js - refactor to jQuery triggered by click events
//  starts and restarts the game;
var randomNums = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// function that starts the game and resets after
var beginGame = function() {
  // the reset function
  currentTotal = 0;

  // set a new random number to target btwn 19-120
  targetTotal = randomNums(19, 120);

  // set values (btwn 1-12) for each gem object within main crystals object using object dot notation

  crystals.pink.total = randomNums(1, 12);
  crystals.diamond.total = randomNums(1, 12);
  crystals.aqua.total = randomNums(1, 12);
  crystals.emerald.total = randomNums(1, 12);

  // update HTML to reflect game status changes ***  in plain js - refactor to jQuery

//   $("#score-count").text(currentTotal);
  $("#score-total-display").text(currentTotal);
  $("#random-num-display").text(targetTotal);
  $("wins").text(winsTotal);
  $("losses").text(lossesTotal);

  //   document.getElementById("random-num-display").innerHTML = targetTotal;
  //   document.getElementById("score-total-display").innerHTML = currentTotal;
  document.getElementById("score-count").innerHTML = currentTotal;
  //   document.getElementById("wins").innerHTML = winsTotal;
  //   document.getElementById("losses").innerHTML = lossesTotal;

  // statement below will prevent alert so moved them to line 73 -
  document.getElementById("wins-total").innerHTML = winsTotal;
  document.getElementById("losses-total").innerHTML = lossesTotal;

  //    test with alerts;

  alert("Target Score: " + targetTotal);
  alert(
    "pink:  " +
      crystals.pink.total +
      " & diamond: " +
      crystals.diamond.total +
      " & aqua: " +
      crystals.aqua.total +
      "green: " +
      crystals.emerald.total
  );
};

//   targetTotal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// now we check conditions to see if user won or lost
var winLoss = function() {
  // check to see if currentTotal is larger than targetTotal
  if (currentTotal > targetTotal) {
    alert("You lost this round, try again!");
    //   console.log("You lost, try again!!");

    // increment loss counter
    lossesTotal++;

    // update HTML count
    $("#losses").text(lossesTotal);

    // reset and restart game
    beginGame();
  } else if (currentTotal === targetTotal) {
    alert("Congratulations, You Won!!");
    //   console.log("awesome, you won!!");

    // increment win counter
    winsTotal++;

    // update wins status on HTML
    $("#wins").text(winsTotal);

    // reset and restart game
    beginGame();
  }
};

// click listener that adds totals of gems clicked

var sumTotals = function(clickedGems) {
  // update currentTotal
  targetTotal += clickedGems.total;

  // update HTML to reflect currentTotal staus
  $("#score-count").text(currentTotal);

  // call winLoss function

  winLoss();

  // testing

  // console.log("your Score: " + currentTotal);
};

beginGame();

$("#pink").click(function() {
  sumTotals(crystals.pink);
});
$("#diamond").click(function() {
  sumTotals(crystals.diamond);
});
$("#aqua").click(function() {
  sumTotals(crystals.aqua);
});
$("#emerald").click(function() {
  sumTotals(crystals.emerald);
});
