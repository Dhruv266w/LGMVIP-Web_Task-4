function getHistory() {
    return document.getElementById("history").innerText;
}

function setHistory(num) {
    document.getElementById("history").innerText = num;
}

function getFinalResult() {
    return document.getElementById("final-result").innerText;
}

function setFinalResult(num) {
    document.getElementById("final-result").innerText = num;
}

let operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        if (operators[i].id == "clear") {
            setHistory("");
            setFinalResult("");
        } else if (operators[i].id == "back") {
            let finalResult = getFinalResult();
            if (finalResult) { 
                finalResult = finalResult.substr(0, finalResult.length - 1) 
                setFinalResult(finalResult);
            }
        } else {
            let finalResult = getFinalResult();
            let history = getHistory();
            if (finalResult != "") {
                history += finalResult;

                if (operators[i].id == "=") {
                    let temp = finalResult;
                    finalResult = eval(history);
                    setFinalResult(finalResult);

                    setHistory(history);
                } else {
                    history += operators[i].id; 
                    setHistory(history);
                    setFinalResult("");
                }
            }
        }
    });
}
let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        let finalResult = getFinalResult();
        finalResult += numbers[i].id;
        setFinalResult(finalResult);
    });
}