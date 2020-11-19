"use strict";

/*****************

Untitled
Lilia Isabel Aguirre Lugo

CART345 Final Project

******************/

// Array
let wordObjects = [];

// Word objects
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

let outputArray = [];
let IAMSORRY = ['I', 'AM', 'SORRY'];
let IWASWRONG = ['I', 'WAS', 'WRONG'];


$(document).ready(setup);

// setup()
//
// Display of the words. They move accros the screen

function setup() {
  // I
  // wordI = new Word(100, 0, 1, 0, "I", 150, 0);
  wordObjects.push(new Word(100, 0, 1, 0, "I", 150, 0));
  // AM
  // wordAm = new Word(500, -100, -1, 0, "AM", 150, 1);
  wordObjects.push(new Word(500, -100, -1, 0, "AM", 150, 1));
  // SORRY
  // wordSorry = new Word(990, 50, 1, 0, "SORRY", 150, 2);
  wordObjects.push(new Word(990, 50, 1, 0, "SORRY", 150, 2));
  // WAS
  wordWas = new Word(105, 142, -1, 0, "WAS", 150, 3);
  wordObjects.push(wordWas);
  // WRONG
  wordWrong = new Word(900, -187, 1, 0, "WRONG", 150, 4);
  wordObjects.push(wordWrong);
  // LOVE
  wordLove = new Word(0, -50, -1, 0, "LOVE", 150, 5);
  wordObjects.push(wordLove);
  // YOU
  wordYou = new Word(1000, 0, 1, 0, "YOU", 150, 6);
  wordObjects.push(wordYou);
  // NEED
  wordNeed = new Word(-8, 45, -1, 0, "NEED", 150, 7);
  wordObjects.push(wordNeed);
  // HELP
  wordHelp = new Word(580, 0, 1, 0, "HELP", 150, 8);
  wordObjects.push(wordHelp);
  // PLEASE
  wordPlease = new Word(700, 142, -1, 0, "PLEASE", 150, 9);
  wordObjects.push(wordPlease);
  // STOP
  wordStop = new Word(-8, -187, 1, 0, "STOP", 150, 10);
  wordObjects.push(wordStop);
  // WANT
  wordWant = new Word(500, -140, -1, 0, "WANT", 150, 11);
  wordObjects.push(wordWant);
  // THIS
  wordThis = new Word(300, 100, 1, 0, "THIS", 150, 12);
  wordObjects.push(wordThis);
  // IN
  wordIn = new Word(1380, 142, -1, 0, "IN", 150, 13);
  wordObjects.push(wordIn);
  // MY
  wordMy = new Word(300, -187, 1, 0, "MY", 150, 14);
  wordObjects.push(wordMy);
  // OPINION
  wordOpinion = new Word(800, -50, -1, 0, "OPINION", 150, 15);
  wordObjects.push(wordOpinion);
  // DISAGREE
  wordDisagree = new Word(700, -140, 1, 0, "DISAGREE", 150, 16);
  wordObjects.push(wordDisagree);



  //Clear Screen Variable
  $clearScreen = $("#cleared");
  $clearScreen.hide();

  // Droppable Box Variable
  $droppableBox = $("#droppable");

  $droppableBox.droppable({

    drop: function (ev, ui) {
      console.log("someone dropped");
      //the who
      outputArray.push(ui.draggable[0].textContent);
      let id = parseInt(ui.draggable[0].id);
      wordObjects[id].textPosition();
      clearScreen();
    }
  })

  // Draggable
  $(".draggableBox").draggable({
    //start..
    start: function (event, ui) {
      console.log("start dragging");
      //  console.log(event);
      //  console.log(ui);

    },
    //stop..
    stop: function (event, ui) {
      console.log("stop dragging");
      //the who
      //  console.log(ui.helper.context)
    },
    drag: function (event, ui) {
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

function sentenceFormed() {
  if (id = wordObjects[0] + wordObjects[1] + wordObjects[2]) {


  }

}

function clearScreen() {

  if (JSON.stringify(outputArray) === JSON.stringify(IAMSORRY)) {
    $clearScreen.show();
    $('#clearedSentence').html(JSON.stringify(outputArray));
  }
  else if (JSON.stringify(outputArray) === JSON.stringify(IWASWRONG)) {
    $clearScreen.show();
  }
  // if (id = ) {
  //   $clearScreen.show();
  // }

}