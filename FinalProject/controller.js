//help from scribd.com

$(document).ready(function() {
  var questionBank = new Array;
  var currentQuestionNumber;
  var currentAnswer;
  var numberOfQuestions;
  var gamePosition;
  var score;
  
  $.getJSON('dat.json', fucntion(data) {
  numberOfQuestions=data.quizlist.length;
  for(i = 0; i < data.quizlist.length; i++) {
    typeArray = [];
    typeArray[0] = data.quizlist[i].question;
    typeArray[1] = data.quizlist[i].response;
    questionBank[i] = typeArray;
  }
  alert(questionBank);
  gamePosition = 1;
  resetGame;
  updateQuestion();
  })//getJSON
});