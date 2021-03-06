"use strict";

/*****************

Untitled
Lilia Isabel Aguirre Lugo

CART345 Final Project

******************/

// Array
let wordObjects = [];

// div
let $droppableBox;
let $clearScreen;
let $titleScreen;
// p
let $sentenceDisplayed;

// Output array
// Potential sentences
let outputArray = [];
let idArray = [];
let IAMSORRY = ['I', 'AM', 'SORRY'];
let IWASWRONG = ['I', 'WAS', 'WRONG'];
let ILOVEYOU = ['I', 'LOVE', 'YOU'];
let INEEDHELP = ['I', 'NEED', 'HELP'];
let PLEASESTOP = ['PLEASE', 'STOP'];
let IWANTTHIS = ['I', 'WANT', 'THIS'];
let INMYOPINION = ['IN', 'MY', 'OPINION'];
let IDISAGREE = ['I', 'DISAGREE'];

// Annyang commands
let speech = {
  'i am sorry': iAmSorrySaid,
  'i was wrong': iWasWrongSaid,
  'i love you': iLoveYouSaid,
  'i need help': iNeedHelpSaid,
  'please stop': pleaseStopSaid,
  'i want this': iWantThisSaid,
  'in my opinion': inMyOpinionSaid,
  'i disagree': iDisagreeSaid
}


$(document).ready(setup);

// setup()
//
// Display of the words. They move accros the screen
function setup() {

  //All divs are called
  //
  //Clear Screen
  $clearScreen = $("#cleared");
  // Hide
  $clearScreen.hide();
  // Display sentence
  $sentenceDisplayed = $("#sentenceDisplay");
  // Droppable Box Variable
  $droppableBox = $("#droppable");
  // Title screen
  $titleScreen = $("#titleScreen");
  // Clicking allows for project to start
  $titleScreen.click(start);

  //List of Words
  //
  // I
  wordObjects.push(new Word(100, 200, 1, 0, "I", 150, 0));
  // AM
  wordObjects.push(new Word(500, 85, -1, 0, "AM", 1050, 1));
  // SORRY
  wordObjects.push(new Word(990, 310, 1, 0, "SORRY", 800, 2));
  // WAS
  wordObjects.push(new Word(105, 325, -5, 0, "WAS", 1050, 3));
  // WRONG
  wordObjects.push(new Word(900, 85, 5, 0, "WRONG", 3000, 4));
  // LOVE
  wordObjects.push(new Word(0, 250, -1, 0, "LOVE", 800, 5));
  // YOU
  wordObjects.push(new Word(1000, 130, 4, 0, "YOU", 1050, 6));
  // NEED
  wordObjects.push(new Word(-8, 200, -3, 0, "NEED", 1050, 7));
  // HELP
  wordObjects.push(new Word(580, 270, 3, 0, "HELP", 3000, 8));
  // PLEASE
  wordObjects.push(new Word(700, 325, -3, 0, "PLEASE", 3000, 9));
  // STOP
  wordObjects.push(new Word(-8, 120, 2, 0, "STOP", 800, 10));
  // WANT
  wordObjects.push(new Word(500, 300, 5, 0, "WANT", 1050, 11));
  // THIS
  wordObjects.push(new Word(300, 345, 1, 0, "THIS", 1050, 12));
  // IN
  wordObjects.push(new Word(1380, 330, 5, 0, "IN", 1050, 13));
  // MY
  wordObjects.push(new Word(300, 160, 5, 0, "MY", 1050, 14));
  // OPINION
  wordObjects.push(new Word(800, 250,4, 0, "OPINION", 3000, 15));
  // DISAGREE
  wordObjects.push(new Word(700, 150, 3, 0, "DISAGREE", 3000, 16));
  //
  // // Decoy
  wordObjects.push(new Word(0, 290, 10, 0, "DO", 1050, 17));
  wordObjects.push(new Word(450, 130, -5, 0, "NOT", 1050, 18));
  wordObjects.push(new Word(990, 270, -10, 0, "KNOW", 800, 19));
  wordObjects.push(new Word(105, 250, -9, 0, "HOW", 1050, 20));
  wordObjects.push(new Word(900, 130, -10, 0, "TO", 3000, 21));
  wordObjects.push(new Word(0, 220, -5, 0, "SURE", 800, 22));
  wordObjects.push(new Word(1000, 260, -1, 0, "IS", 1050, 23));
  wordObjects.push(new Word(-8, 240, -10, 0, "IT", 1050, 24));
  wordObjects.push(new Word(580, 345, -5, 0, "INCORRECT", 3000, 25));
  wordObjects.push(new Word(700, 85, 1, 0, "UNSURE", 3000, 26));
  wordObjects.push(new Word(-8, 150, -10, 0, "INSECURE", 800, 27));
  wordObjects.push(new Word(500, 180, -2, 0, "IMPOSTER", 1050, 28));
  wordObjects.push(new Word(300, 290, 10, 0, "FRAUD", 1050, 29));
  wordObjects.push(new Word(1380, 230, 1, 0, "UNFORGIVABLE", 1050, 30));
  wordObjects.push(new Word(300, 245, 10, 0, "CAN", 1050, 31));
  wordObjects.push(new Word(800, 300, -3, 0, "LIAR", 3000, 32));
  wordObjects.push(new Word(700, 110, -5, 0, "DISHONEST", 3000, 33));

}


// Start
//
// When the user clicks the screen
// the project starts
function start() {

  // Setup annyang
  if (annyang) {
    annyang.addCommands(speech);
    annyang.start();
  }
  // Hide title screen
  $titleScreen.hide()
  // Hide
  $clearScreen.hide();


  // Make box droppable
  $droppableBox.droppable({
    drop: function(ev, ui) {
      // Identifies words in droppable box
      outputArray.push(ui.draggable[0].textContent);
      let id = parseInt(ui.draggable[0].id);
      idArray.push(id);
      wordObjects[id].textPosition();
      clearScreen();

    }
  })
  resetDroppableBox();

  // Make words draggable
  $(".draggableBox").draggable({
    //start..
    start: function(event, ui) {},
    //stop..
    stop: function(event, ui) {},
    drag: function(event, ui) {}
  });


  // Loop
  //
  // Animation for words
  function loop() {

    for (let i = 0; i < wordObjects.length; i++) {
      wordObjects[i].move();
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}


// Clear Screen
//
// When a sentence is formed, the screen will
// fade into white with the sentence displayed
function clearScreen() {

  if (JSON.stringify(outputArray) === JSON.stringify(IAMSORRY)) {
    $sentenceDisplayed.text("I AM SORRY");
    $clearScreen.fadeIn('slow');
  } else if (JSON.stringify(outputArray) === JSON.stringify(IWASWRONG)) {
    $sentenceDisplayed.text("I WAS WRONG");
    $clearScreen.fadeIn('slow');
  } else if (JSON.stringify(outputArray) === JSON.stringify(ILOVEYOU)) {
    $sentenceDisplayed.text("I LOVE YOU");
    $clearScreen.fadeIn('slow');
  } else if (JSON.stringify(outputArray) === JSON.stringify(INEEDHELP)) {
    $sentenceDisplayed.text("I NEED HELP");
    $clearScreen.fadeIn('slow');
  } else if (JSON.stringify(outputArray) === JSON.stringify(PLEASESTOP)) {
    $sentenceDisplayed.text("PLEASE STOP");
    $clearScreen.fadeIn('slow');
  } else if (JSON.stringify(outputArray) === JSON.stringify(IWANTTHIS)) {
    $sentenceDisplayed.text("I WANT THIS");
    $clearScreen.fadeIn('slow');
  } else if (JSON.stringify(outputArray) === JSON.stringify(INMYOPINION)) {
    $sentenceDisplayed.text("IN MY OPINION");
    $clearScreen.fadeIn('slow');
  } else if (JSON.stringify(outputArray) === JSON.stringify(IDISAGREE)) {
    $sentenceDisplayed.text("I DISAGREE");
    $clearScreen.fadeIn('slow');

    // If a sentence is not recognised,
  } else if (outputArray.length >= 3) {
    resetDroppableBox();
  }
  // Reset when screen is cleared
  $clearScreen.click(function() {
    start();
  });
}


// Reset Droppable Box
//
// Everything in droppable box is reset
// and speed increases
function resetDroppableBox() {
  for (let i = 0; i < idArray.length; i++) {
    wordObjects[idArray[i]].reset();
    // the project resets
    idArray = [];
    outputArray = [];
    $droppableBox.empty();
  }
}


// Functions for annyang commands
//
// This allows the screen to fade into white
// with the sentence displayed when participant
// speaks
function iAmSorrySaid() {
  $sentenceDisplayed.text("I AM SORRY");
  $clearScreen.fadeIn('slow');
  // Reset when screen is cleared
  $clearScreen.click(start);
}

function iWasWrongSaid() {
  $sentenceDisplayed.text("I WAS WRONG");
  $clearScreen.fadeIn('slow');
  // Reset when screen is cleared
  $clearScreen.click(start);
}

function iLoveYouSaid() {
  $sentenceDisplayed.text("I LOVE YOU");
  $clearScreen.fadeIn('slow');
  // Reset when screen is cleared
  $clearScreen.click(start);
}

function iNeedHelpSaid() {
  $sentenceDisplayed.text("I NEED HELP");
  $clearScreen.fadeIn('slow');
  // Reset when screen is cleared
  $clearScreen.click(start);
}

function pleaseStopSaid() {
  $sentenceDisplayed.text("PLEASE STOP");
  $clearScreen.fadeIn('slow');
  // Reset when screen is cleared
  $clearScreen.click(start);
}

function iWantThisSaid() {
  $sentenceDisplayed.text("I WANT THIS");
  $clearScreen.fadeIn('slow');
  // Reset when screen is cleared
  $clearScreen.click(start);
}

function inMyOpinionSaid() {
  $sentenceDisplayed.text("IN MY OPINION");
  $clearScreen.fadeIn('slow');
  // Reset when screen is cleared
  $clearScreen.click(start);
}

function iDisagreeSaid() {
  $sentenceDisplayed.text("I DISAGREE");
  $clearScreen.fadeIn('slow');
  // Reset when screen is cleared
  $clearScreen.click(start);
}
