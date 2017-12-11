var answer = document.getElementById('guess-input').name;

function guessAnswer() {
  $("button.guess-submit").click(function(event) {
    var guess = $('#guess-input').val();
    guess = guess.toLowerCase();
    
    if(guess === answer) {
      $('#correct').show();
      $('#wrong').hide();
    }
    else {
      $('#wrong').show().fadeOut(1000);
      $('#guess-input').val();
    }
  })
}

function enterSubmit() {
  $("#guess-input").keyup(function(event) {
    if(event.keyCode === 13) {
      $("#guess-submit").click();
    }
  })
  guessAnswer();
}

enterSubmit();

if($('#correct').css('display') === 'block') {
  alert('hi');
}