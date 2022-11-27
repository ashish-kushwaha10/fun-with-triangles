const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const calculate = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateArea(e) {
    e.preventDefault();
    const side1 = Number(firstSide.value);
    const side2 = Number(secondSide.value);
    const side3 = Number(thirdSide.value);

    if ( (side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2) ) {
        const semiPeri =(side1 + side2 + side3) / 2;

        const result = Math.sqrt(semiPeri * (semiPeri - side1) * (semiPeri - side2) * (semiPeri - side3)).toFixed(4);
        output.innerText = `Area of a triangle using heron's formula is ${result} units`;
    } else {
        output.innerText = "Enter valid side lengths ";
    }
}

calculate.addEventListener("submit", calculateArea);