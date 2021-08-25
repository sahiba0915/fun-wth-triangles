const angleInput = document.querySelectorAll('.input-angle');
const calcArea = document.querySelector('.calc-area');
const output = document.querySelector('.area');

function AreaOfTriangle() {
    const product = calcProduct(
        Number(angleInput[0].value),
        Number(angleInput[1].value)
    );
    const area = Number(product / 2);
    output.innerHTML = "The area of the triangle is " + area;
}


function calcProduct(b, h) {
    const product = b * h;
    return product;
}

calcArea.addEventListener('click', AreaOfTriangle);