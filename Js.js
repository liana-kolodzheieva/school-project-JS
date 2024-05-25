function checkingTheAnswerIfThereIs1Answer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        stylesIfCorrectAnswer();
        continueButtonIfAnswerIsCorrect();
    } else {
        stylesIfWrongAnswer();
        continueButtonIfAnswerIsWrong();
    }
}
function stylesIfCorrectAnswer() {
    document.getElementById("outputTests").style.backgroundColor = "#D9EEE1";
    document.getElementById("outputTests").style.paddingLeft = "5%";
    document.getElementById("outputTests").style.paddingTop = "5%"
    document.getElementById("outputTests").style.height = "265px"
    document.getElementById("outputTests").style.margin = "10px"
    document.getElementById("outputTests").style.padding - "10px"
}

function stylesIfWrongAnswer() {
    document.getElementById("outputTests").style.backgroundColor = "#FFC0C7";
    document.getElementById("outputTests").style.paddingLeft = "5%";
    document.getElementById("outputTests").style.paddingTop = "5%"
    document.getElementById("outputTests").style.height = "265px"
    document.getElementById("outputTests").style.margin = "10px"
    document.getElementById("outputTests").style.padding - "10px"
}

function continueButtonIfAnswerIsCorrect() {
    document.getElementById("outputTests").innerHTML = '<h3 style = "color:#04AA6D"> CORRECT!' + "</br>" + "</br>" + "</br>" + "</br>" + '<button>Continue</button>'
}

function continueButtonIfAnswerIsWrong() {
    document.getElementById("outputTests").innerHTML = '<h3 style = "color:#b94a48"> WRONG!' + "</br>" + "</br>" + "</br>" + "</br>" + '<button>Continue</button>'
}

function checkingTheAnswerInOutPutTest1() {
    let corectAnsverInOutPutTest1 = "window.alert";
    let usersAnsverInOutPutTest1 = document.getElementById("answer").value;
    checkingTheAnswerIfThereIs1Answer(usersAnsverInOutPutTest1, corectAnsverInOutPutTest1)
}