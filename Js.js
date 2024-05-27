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
  let corectAnsverInOutPutTest1 = "window.alert";
  let usersAnsverInOutPutTest1 = document.getElementById("answer").value;
  checkingTheAnswerIfThereIs1Answer(
    usersAnsverInOutPutTest1,
    corectAnsverInOutPutTest1
  );
  document.getElementById("butt").innerHTML =
    "<button onclick = 'stylesForNewQ()' id = 'button'>Continue</button>";
}

function stylesForNewQ() {
  document.getElementById("outputTests").style.backgroundColor =
    "rgb(245, 246, 250)";
  document.getElementById("outputTests").style.paddingLeft = "5%";
  document.getElementById("outputTests").style.paddingTop = "5%";
  document.getElementById("outputTests").style.height = "265px";
  document.getElementById("outputTests").style.margin = "10px";
  document.getElementById("outputTests").style.padding - "10px";
}
