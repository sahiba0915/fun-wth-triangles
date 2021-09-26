const form = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('.submit-btn');
const output = document.querySelector('.quiz');

const answers = ["90°", "one right angle", "12, 16, 20", "Equilateral triangle","100°" ];


function calculateScore(){
    let score = 0;
    let i = 0;
    const formData = new FormData(form);
    for(let value of formData.values()){
        if(value === answers[i]){
        score++;
        }
        i++;
    }
    output.innerHTML = "Your score is " + score;
    
}


submitBtn.addEventListener('click', calculateScore);