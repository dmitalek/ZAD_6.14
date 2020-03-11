const numDivs = 36;
const maxHits = 10;

let hits = 1;
let firstHitTime = 0;
let mistakes = 0;

function round() {
  
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).text(hits);
  DI = divSelector;
  if (hits === 1) {
    firstHitTime = getTimestamp();
  }
}

function endGame() {
 
  $("form").hide();
  $("#button-start").hide();
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  switch (mistakes) {
    case 1: spell = "ка";
          break;
    case 2: spell = "ки";
    case 3: spell = "ки";
    case 4: spell = "ки";
         break;
    default: spell = "ок"
  }
  $("#spell").text(spell);
  $("#mistakes").text(mistakes);
  hits = 1; mistakes = 0;
  $("#win-message").removeClass("d-none");
}
function comeBack() {
  $(ID).removeClass("miss");
}

function handleClick(event) {
    
  if ($(event.target).hasClass("target")) {
    $(event.target).removeClass("target");
    $(event.target).text("");
    hits = hits + 1;
    if (hits > maxHits) {
    endGame();
    }
    round();
  } else {
      $(event.target).addClass("miss");
      ID = this;
      setTimeout(comeBack,300);
      mistakes += 1;
    }
}

function init() {
  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  })
}

$(document).ready(init);
$("#button-start").click(round)