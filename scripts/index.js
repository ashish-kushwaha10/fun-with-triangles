const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");
const footer = document.querySelector("#footer");

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
];

function calculateScore() {
    const formResults = new FormData(quizform) // this will catch all value of the inputs and return the array
    let score = 0;
    index = 0;
    for (let value of formResults.values()) {// it will return the value (not index or key)
        if (value == correctAnswers[index]) {
            score++;
        }
        index++;
    }
    quizform.innerHTML = `<h1>The score is ${score}</h1>`;
    footer.style.bottom =0;
    submitBtn.style.display ='none';
    
}

submitBtn.addEventListener("click", calculateScore);

