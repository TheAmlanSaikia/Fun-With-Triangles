const input = document.querySelectorAll('.angleinput');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculatesumOfAngles(Angle1, Angle2, Angle3) {
    const sumOfAngles = Angle1 + Angle2 + Angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculatesumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));
    if (sumOfAngles === 180) {
        outputEl.innerText = "Yah! The angles do form a triangle!";
    } else {
        outputEl.innerText = "Oh! The angles don't form a triangle!";
    }

}

isTriangleBtn.addEventListener("click", isTriangle)