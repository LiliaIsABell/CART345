// Word
//
// A class that represents the words that will be "swimming"
// around the blue box.

class Word {
  constructor(x, y, speed, color, text, size, index) {
    //Position
    this.x = x;
    this.y = y;
    //Speed
    this.vx = speed;
    //Color
    this.fillColor = color;

    // Text
    this.text = text;
    this.textSize = size;
    this.index = index;
    this.htmlElementWord = $('<p>');
    $(this.htmlElementWord).text(this.text);
    $(this.htmlElementWord).attr("id", this.index);
    $(this.htmlElementWord).addClass('draggableBox');
    $(this.htmlElementWord).appendTo('#background');
    $(this.htmlElementWord).css({
      top: this.y + "px"
    });
    $(this.htmlElementWord).css({
      left: this.x + "px"
    });


  }
  // Text Position
  //
  textPosition() {
    $(this.htmlElementWord[0]).remove();
    $(this.htmlElementWord[0]).removeAttr("style");
    $(this.htmlElementWord[0]).appendTo('#droppable');
    $(this.htmlElementWord[0]).removeClass('draggableBox');
    $(this.htmlElementWord[0]).addClass('styleBox');
  }

// Reset
// 
  reset(){
    this.htmlElementWord = $('<p>');
    $(this.htmlElementWord).text(this.text);
    $(this.htmlElementWord).attr("id", this.index);
    $(this.htmlElementWord).addClass('draggableBox');
    $(this.htmlElementWord).appendTo('#background');
    $(this.htmlElementWord).css({
      top: this.y + "px"
    });
    $(this.htmlElementWord).css({
      left: this.x + "px"
    });
  }

  // Move
  //
  move() {

    this.x = this.x + this.vx;
    this.htmlElementWord[0].style.left = ($(this.htmlElementWord).position().left + this.vx) + "px";
    this.handleWrapping();

  }

  // Handle Wrapping
  //
  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += window.innerWidth;
      this.htmlElementWord[0].style.left = this.x + "px";
    } else if (this.x > window.innerWidth) {
      this.x = 0;
      this.htmlElementWord[0].style.left = this.x + "px";
    }
  }


}
