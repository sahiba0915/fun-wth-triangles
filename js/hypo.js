const angleInput = document.querySelectorAll('.input-angle');
const calcBtn = document.querySelector('.calc-btn');
const output = document.querySelector('.hypo');

function Ishypo(){
   const sum = calculateSum(
       Number(angleInput[0].value),
       Number(angleInput[1].value)
   );
   const sqrt = Math.sqrt(sum).toFixed(2);
    output.innerHTML ="The length of hypotenuse is " + sqrt ;
}
 
function calculateSum (b, h){
    const sum = b*b + h*h ;
    return sum;
}



calcBtn.addEventListener('click', Ishypo);