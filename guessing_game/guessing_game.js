 var images = [
         { kind: "wombat", src: "https://farm8.staticflickr.com/7163/6642873613_89c447df26_o.jpg" },
        { kind: "wombat", src: "http://4.bp.blogspot.com/_X1IWXuEbgXI/S7r6QmBIqPI/AAAAAAAACbo/gkCdqFOxbbM/s640/wombat+australia.jpg" },
        { kind: "capybara", src: "http://www.zooborns.com/.a/6a010535647bf3970b019b02308fe1970b-800wi" },
        { kind: "capybara", src: "http://a-z-animals.com/media/animals/images/original/capybara7.jpg" },
        { kind: "capybara", src: "http://www.zooborns.com/.a/6a010535647bf3970b019b02308ed6970b-800wi" },
        { kind: "wombat", src: "http://resources0.news.com.au/images/2011/07/07/1226089/905572-wombat.jpg" }
      ];

var currentImage = 0;
var correctCount = 0;

function next() {
  currentImage++;
  setImage();
}

function setImage() {
  $("#current").attr("src", images[currentImage].src);
}

function isCorrect(answer) {
  return $("a.button#" + answer).attr("id") === images[currentImage].kind;
}

function handleCorrect() {
  return correctCount++;
}

function handleIncorrect() {
  return false;
}

function last() {
  return $("#result").html("You have guessed " + correctCount + " / " + images.length);
}

$(function() {
  setImage();

  $("a.button").click(function() {
    if(isCorrect(this.id)) {
      handleCorrect();
    }
    if(currentImage >= 5) {
      last();
    } else {
      next();
    }
  });
});
