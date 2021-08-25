const angleInput = document.querySelectorAll('.angle-input');
const checkBtn = document.querySelector('.check-btn');
const output1 = document.querySelector('.box1');

function isTriangle() {
    const sum = calcSum(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));

    if (sum === 180) {
        output1.innerHTML = "Hurrah!!! These angles forms a triangle 🎉";
    } else {
        output1.innerHTML = "Oh Ho!!! These angles doesn't forms a triangle 😔";
    }
}

function calcSum(a1, a2, a3) {
    const sum = a1 + a2 + a3;
    return sum;
}

checkBtn.addEventListener('click', isTriangle);