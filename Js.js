function checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    stylesIfCorrectAnswer();
  } else {
    stylesIfWrongAnswer();
  }
}

function checkingTheAnswerIfThereIs2Answer(
  userAnswer1,
  userAnswer2,
  correctAnswer1,
  correctAnswer2
) {
  if (userAnswer1 === correctAnswer1 && userAnswer2 === correctAnswer2) {
    stylesIfCorrectAnswer();
  } else {
    stylesIfWrongAnswer();
  }
}

function checkingTheAnswerIfThereIs4Answers(
  userAnswer1,
  userAnswer2,
  userAnswer3,
  userAnswer4,
  correctAnswer1,
  correctAnswer2,
  correctAnswer3,
  correctAnswer4
) {
  if (userAnswer1 == correctAnswer1 && userAnswer2 == correctAnswer2 && userAnswer3 == correctAnswer3 && userAnswer4 == correctAnswer4) {
    stylesIfCorrectAnswer();
  } else {
    stylesIfWrongAnswer();
  }
}
function stylesIfCorrectAnswer() {
  document.getElementById("Tests").style.backgroundColor = "#D9EEE1";
  document.getElementById("Tests").style.paddingLeft = "5%";
  document.getElementById("Tests").style.paddingTop = "5%";
  document.getElementById("Tests").style.height = "325px";
  document.getElementById("Tests").style.margin = "10px";
  document.getElementById("Tests").style.padding - "10px";
  document.getElementById("ex").innerHTML =
    '<h3 style = "color:#04AA6D"> CORRECT!</h3>';
  document.getElementById("Test").innerHTML = " ";
  document.getElementById("Test").style.backgroundColor = "#D9EEE1";

  document.getElementById("Task").innerHTML = "";
}

function stylesIfWrongAnswer() {
  document.getElementById("Tests").style.backgroundColor = "#FFC0C7";
  document.getElementById("Tests").style.paddingLeft = "5%";
  document.getElementById("Tests").style.paddingTop = "5%";
  document.getElementById("Tests").style.height = "325px";
  document.getElementById("Tests").style.margin = "10px";
  document.getElementById("Tests").style.padding - "10px";
  document.getElementById("ex").innerHTML =
    '<h3 style = "color:#b94a48">WRONG!</h3>';
  document.getElementById("Test").innerHTML = "";
  document.getElementById("Test").style.backgroundColor = "#FFC0C7";
  document.getElementById("Task").innerHTML = "";
}

function stylesForNewQ() {
  document.getElementById("Tests").style.backgroundColor = "rgb(245, 246, 250)";
  document.getElementById("Tests").style.padding = "10px";
  document.getElementById("Test").style.paddingBottom = "30px";
  document.getElementById("Tests").style.height = "325px";
  document.getElementById("Tests").style.margin = "10px";
  document.getElementById("Tests").style.padding - "10px";
  document.getElementById("Test").style.backgroundColor = "rgb(216, 216, 216)";
  document.getElementById("ex").innerHTML =
    '<h2 style = "font-size: 24px; padding: 0;">Exercise:</h2>';
  document.getElementById("Task").innerHTML = "Some text";
  document.getElementById("Test").innerHML = "test";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = " ";
}
// Output checking

function checkingTheAnswerInOutPutTest1() {
  let corectAnsverInOutPutTest1 = ".alert";
  let usersAnsverInOutPutTest1 = document.getElementById("answer").value;
  checkingTheAnswerIfThereIs1Answer(
    usersAnsverInOutPutTest1,
    corectAnsverInOutPutTest1
  );
  document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="secondQuestionInOutPut()" style =     border: none;
  font - size: 15px;
  padding: 10px 20px;
  margin: 0;
} "> Continue </button>`;
}

function checkingTheAnswerInOutPutTest2() {
  let correctAnswer = ".log";
  let userAnswer = document.getElementById("answer2").value;
  checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer);
  document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="firstQuestionInOutPut()" 
    style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;
}"> Return </button>`;
}

// Output new

function firstQuestionInOutPut() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML =
    "1. Fill in the field so that the resulting text is displayed in a pop - up window";
  document.getElementById("Test").innerHTML =
    "<div 'id='outputTest'' 'class='test''>" +
    "window" +
    "<input style = 'margin-right:4px; height:24px; width:13%; font-size:17px; border: none;' type='text' id='answer'/>" +
    "('Hello World!');" +
    "</div>";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInOutPutTest1()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}

function secondQuestionInOutPut() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML = "2. Add the missing word";
  document.getElementById("Test").innerHTML =
    "<div 'id='outputTest'' 'class='test''>" +
    "console" +
    "<input style = 'margin-right:4px; height:24px; width:13%; font-size:17px; border: none;' type='text' id='answer2'/>" +
    "('Hello World!');" +
    "</div>";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInOutPutTest2()" style = " style = "    border: none;
  font - size: 15px;
  padding: 10px 20px;
  margin: 0; "> Sumbit </button>`;
}

//operators new

function firstQuestionInOperators() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML = "1. Use the multiplying operator";
  document.getElementById("Test").innerHTML =
    `let x = 5;` +
    `<br />` +
    `let y = 2;` +
    `<br />` +
    `let z = x` +
    `<input type="text" class="answer" id="answer3" />` +
    `y; `;
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInOperatorsTest1()" style = " style = "    border: none;
  font - size: 15px;
  padding: 10px 20px;
  margin: 0; "> Sumbit </button>`;
}

function secondQuestionInOperators() {
  stylesForNewQ();
  document.getElementById("Tests").style.height = "325px";
  document.getElementById("Task").innerHTML = "2. Use the correct operator";
  document.getElementById("Test").innerHTML =
    `let user1 = "Kate";` +
    `</br>` +
    `let user2 = "Alina";` +
    `</br>` +
    `let sum = user1 <input type="text" class="answer" id="answer4" /> " " <input type="text" class="answer" id="answer5" /> user2;`;
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInOperatorsTest2()" style = " style = "    border: none;
  font - size: 15px;
  padding: 10px 20px;
  margin: 0; "> Sumbit </button>`;
}
// //operators checking

function checkingTheAnswerInOperatorsTest1() {
  let correctAnswer = "*";
  let userAnswer = document.getElementById("answer3").value;
  checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer);
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="secondQuestionInOperators()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}

function checkingTheAnswerInOperatorsTest2() {
  let userAnswer1 = document.getElementById("answer4").value;
  let userAnswer2 = document.getElementById("answer5").value;
  let correctAnswer1 = "+";
  let correctAnswer2 = "+";
  checkingTheAnswerIfThereIs2Answer(
    userAnswer1,
    userAnswer2,
    correctAnswer1,
    correctAnswer2
  );
  document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="firstQuestionInOperators()"
    style = "border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;
}"> Return </button>`;
}

//math new
function secondQuestionInMath() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML =
    "select the correct answer which will be displayed in the console:";
  document.getElementById("exNum").innerHTML = "2. console.log(Math.ceil(6.2))";
  document.getElementById("Test").innerHTML =
    "Your answer:" +
    "<br/>" +
    "<br/>" +
    "<input type='text' class='answer' id='answer7' />";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInMathTest2()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}

function thirdQuestionInMath() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML =
    "select the correct answer which will be displayed in the console:";
  document.getElementById("exNum").innerHTML = "3. console.log(Math.floor(2.7))";
  document.getElementById("Test").innerHTML =
    "Your answer:" +
    "<br/>" +
    "<br/>" +
    "<input type='text' class='answer' id='answer8' />";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInMathTest3()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}

function firstQuestionInMath() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML =
    "select the correct answer which will be displayed in the console:";
  document.getElementById("exNum").innerHTML = "1. console.log(Math.round(4.6))";
  document.getElementById("Test").innerHTML =
    "Your answer:" +
    "<br/>" +
    "<br/>" +
    "<input type='text' class='answer' id='answer7' />";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInMathTest1()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}
function fourthQuestionInMath() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML =
    "select the correct answer which will be displayed in the console:";
  document.getElementById("exNum").innerHTML = "1. console.log(Math.trunc(2.1))";
  document.getElementById("Test").innerHTML =
    "Your answer:" +
    "<br/>" +
    "<br/>" +
    "<input type='text' class='answer' id='answer9' />";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInMathTest4()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}
//math chrking

function checkingTheAnswerInMathTest1() {
  let userAnswer = document.getElementById("answer6").value;
  let correctAnswer = "5";
  checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer);
  document.getElementById("exNum").innerHTML = "";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="secondQuestionInMath()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}

function checkingTheAnswerInMathTest2() {
  let userAnswer = document.getElementById("answer7").value;
  let correctAnswer = "7";
  checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer);
  document.getElementById("exNum").innerHTML = "";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="thirdQuestionInMath()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}

function checkingTheAnswerInMathTest3() {
  let userAnswer = document.getElementById("answer8").value;
  let correctAnswer = "2";
  checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer);
  document.getElementById("exNum").innerHTML = "";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="fourthQuestionInMath()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}

function checkingTheAnswerInMathTest4() {
  let userAnswer = document.getElementById("answer9").value;
  let correctAnswer = "2";
  checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer);
  document.getElementById("exNum").innerHTML = "";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="firstQuestionInMath()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Return </button>`;
}

//function checking
function checkingTheAnswerInFunctionTest1() {
  let userAnswer = document.getElementById("answer10").value
  let correctAnswer = "myFunction()"
  checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer)
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="secondQuestionInFunction()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}
function checkingTheAnswerInFunctionTest2() {
  let userAnswer = document.getElementById("answer11").value
  let userAnswer2 = document.getElementById("answer12").value
  let userAnswer3 = document.getElementById("answer13").value
  let userAnswer4 = document.getElementById("answer14").value
  let correctAnswer = "function"
  let correctAnswer2 = "myFunction()"
  let correctAnswer3 = "{"
  let correctAnswer4 = "}"
  checkingTheAnswerIfThereIs4Answers(userAnswer, userAnswer2, userAnswer3, userAnswer4, correctAnswer, correctAnswer2, correctAnswer3, correctAnswer4)
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="firstQuestionInFunction()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Return </button>`;
}


//function new

function secondQuestionInFunction() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML =
    "2. Execute the function named myFunction";
  document.getElementById("Test").innerHTML =
    "<input type='text' class='answer' id='answer11' />" +
    "<input type='text' class='answer' id='answer12' />" +
    "<input type='text' class='answer' id='answer13' />" +
    '<p>alert("Hello World!");</p>' +
    "<input type='text' class='answer' id='answer14' />"
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInFunctionTest2()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}



function firstQuestionInFunction() {
  stylesForNewQ();
  document.getElementById("Task").innerHTML =
    "1. Execute the function";
  document.getElementById("Test").innerHTML =
    "<p>function myFunction() {<p/>" +
    "<p>alert('Hello World!');<p/>" +
    "<p>}<p/>" +
    "<input type='text' class='answer' id='answer10' />";
  document.getElementById("butt").innerHTML = document.getElementById(
    "butt"
  ).innerHTML = `<button id="butt" onclick="checkingTheAnswerInFunctionTest1()"
    style = " style = "    border: none;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;"> Sumbit </button>`;
}