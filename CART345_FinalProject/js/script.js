"use strict";

/*****************

Untitled
Lilia Isabel Aguirre Lugo

CART345 Final Project

******************/

// Array
let wordObjects = [];

// Word objects
// All words are here
let wordI;
let wordAm;
let wordSorry;
let wordWas;
let wordWrong;
let wordLove;
let wordYou;
let wordNeed;
let wordHelp;
let wordPlease;
let wordStop;
let wordWant;
let wordThis;
let wordIn;
let wordMy;
let wordOpinion;
let wordDisagree;

// div
let $droppableBox;
let $clearScreen;
// p
let $sentenceDisplayed;

// Output array
// Potential sentences
let outputArray = [];
let IAMSORRY = ['I', 'AM', 'SORRY'];
let IWASWRONG = ['I', 'WAS', 'WRONG'];
let ILOVEYOU = ['I', 'LOVE', 'YOU'];
let INEEDHELP = ['I', 'NEED', 'HELP'];
let PLEASESTOP = ['PLEASE', 'STOP'];
let IWANTTHIS = ['I', 'WANT', 'THIS'];
let INMYOPINION = ['IN', 'MY', 'OPINION'];
let IDISAGREE = ['I', 'DISAGREE'];


$(document).ready(setup);

// setup()
//
// Display of the words. They move accros the screen
function setup() {
  // I
  wordObjects.push(new Word(100, 0, 1, 0, "I", 150, 0));
  // AM
  wordObjects.push(new Word(500, -100, -1, 0, "AM", 150, 1));
  // SORRY
  wordObjects.push(new Word(990, 50, 1, 0, "SORRY", 150, 2));
  // WAS
  wordObjects.push(new Word(105, 142, -1, 0, "WAS", 150, 3));
  // WRONG
  wordObjects.push(new Word(900, -187, 1, 0, "WRONG", 150, 4));
  // LOVE
  wordObjects.push(new Word(0, -50, -1, 0, "LOVE", 150, 5));
  // YOU
  wordObjects.push(new Word(1000, 0, 1, 0, "YOU", 150, 6));
  // NEED
  wordObjects.push(new Word(-8, 45, -1, 0, "NEED", 150, 7));
  // HELP
  wordObjects.push(new Word(580, 0, 1, 0, "HELP", 150, 8));
  // PLEASE
  wordObjects.push(new Word(700, 142, -1, 0, "PLEASE", 150, 9));
  // STOP
  wordObjects.push(new Word(-8, -187, 1, 0, "STOP", 150, 10));
  // WANT
  wordObjects.push(new Word(500, -140, -1, 0, "WANT", 150, 11));
  // THIS
  wordObjects.push(new Word(300, 100, 1, 0, "THIS", 150, 12));
  // IN
  wordObjects.push(new Word(1380, 142, -1, 0, "IN", 150, 13));
  // MY
  wordObjects.push(new Word(300, -187, 1, 0, "MY", 150, 14));
  // OPINION
  wordObjects.push(new Word(800, -50, -1, 0, "OPINION", 150, 15));
  // DISAGREE
  wordObjects.push(new Word(700, -140, 1, 0, "DISAGREE", 150, 16));



  //Clear Screen Variable
  $clearScreen = $("#cleared");
  // Display sentence
  $sentenceDisplayed = $("#sentenceDisplay");
  // Hide
  $clearScreen.hide();

  // Droppable Box Variable
  $droppableBox = $("#droppable");


  // Make box droppable
  $droppableBox.droppable({
    drop: function(ev, ui) {
      //the who
      outputArray.push(ui.draggable[0].textContent);
      let id = parseInt(ui.draggable[0].id);
      wordObjects[id].textPosition();
      clearScreen();
    }
  })

  // Make words draggable
  $(".draggableBox").draggable({
    //start..
    start: function(event, ui) {
      //  console.log(event);
      //  console.log(ui);
    },
    //stop..
    stop: function(event, ui) {
      //the who
      //  console.log(ui.helper.context)
    },
    drag: function(event, ui) {
      //  console.log("continuos");
    }

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
    // $('#clearedSentence').html(JSON.stringify(outputArray));
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
  }
}
