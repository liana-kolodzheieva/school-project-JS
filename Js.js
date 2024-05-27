function checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    stylesIfCorrectAnswer();
    document.getElementById("task").innerHTML =
      '<h3 style = "color:#04AA6D"> CORRECT!';
    document.getElementById("ex").innerHTML = " ";
    document.getElementById("outputTest").innerHTML = " ";
    document.getElementById("outputTest").style.backgroundColor = "#D9EEE1";
  } else {
    stylesIfWrongAnswer();
    document.getElementById("task").innerHTML =
      '<h3 style = "color:#b94a48"> WRONG!';
    document.getElementById("ex").innerHTML = " ";
    document.getElementById("outputTest").innerHTML = " ";
    document.getElementById("outputTest").style.backgroundColor = "#FFC0C7";
  }
}
function stylesIfCorrectAnswer() {
  document.getElementById("outputTests").style.backgroundColor = "#D9EEE1";
  document.getElementById("outputTests").style.paddingLeft = "5%";
  document.getElementById("outputTests").style.paddingTop = "5%";
  document.getElementById("outputTests").style.height = "265px";
  document.getElementById("outputTests").style.margin = "10px";
  document.getElementById("outputTests").style.padding - "10px";
}

function stylesIfWrongAnswer() {
  document.getElementById("outputTests").style.backgroundColor = "#FFC0C7";
  document.getElementById("outputTests").style.paddingLeft = "5%";
  document.getElementById("outputTests").style.paddingTop = "5%";
  document.getElementById("outputTests").style.height = "265px";
  document.getElementById("outputTests").style.margin = "10px";
  document.getElementById("outputTests").style.padding - "10px";
}

function checkingTheAnswerInOutPutTest1() {
  let corectAnsverInOutPutTest1 = ".alert";
  let usersAnsverInOutPutTest1 = document.getElementById("answer").value;
  checkingTheAnswerIfThereIs1Answer(
    usersAnsverInOutPutTest1,
    corectAnsverInOutPutTest1
  );
  document.getElementById("butt").innerHTML =
    '<button id="butt" onclick="secondQuestionInOutPut()" style = "width: 46px; height: 16px; margin: 0px; padding: 0px"> Sumbit </button>';
}

function stylesForNewQ() {
  document.getElementById("outputTests").style.backgroundColor =
    "rgb(245, 246, 250)";
  document.getElementById("outputTests").style.padding = "10px";
  document.getElementById("outputTest").style.paddingBottom = "30px";
  document.getElementById("outputTests").style.height = "265px";
  document.getElementById("outputTests").style.margin = "10px";
  document.getElementById("outputTests").style.padding - "10px";
  document.getElementById("outputTest").style.backgroundColor =
    "rgb(216, 216, 216)";
  document.getElementById("ex").innerHTML =
    '<h2 style = "font-size: 24px; padding: 0;">Exercise:</h2>';
  document.getElementById("task").innerHTML = "Some text";
  document.getElementById("outputTest").innerHTML = "test";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = " ";
}

function secondQuestionInOutPut() {
  stylesForNewQ();
  document.getElementById("task").innerHTML = "Add the missing word";
  document.getElementById("outputTest").innerHTML =
    "<div 'id='outputTest'' 'class='test''>" +
    "console" +
    "<input style = 'margin-right:4px; height:24px; width:13%; font-size:17px; border: none;' type='text' id='answer2'/>" +
    "('Hello World!');" +
    "</div>";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML =
    '<button id="butt" onclick="checkingTheAnswerInOutPutTest2()" style = "width: 46px; height: 16px; margin: 0px; padding: 0px"> Return </button>';
}

function checkingTheAnswerInOutPutTest2() {
  let correctAnswer = ".log";
    let userAnswer = document.getElementById("answer2").value;
    checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer)
}
