const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function isTriangle() {
  const sum = Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value)
  sum ===180 ? outputEl.innerText = "Yay🤗🤗, the angles form a triangle!" : outputEl.innerText = "Oh Oh🙄🙄! The angle doesn't form a triangle"
}

isTriangleBtn.addEventListener("click", isTriangle);