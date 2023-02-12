const coding = [
    {
       question: "Q1: What is the correct syntax for an if statement in Python?",
       a: "if (condition)",
       b: "if condition",
       c: "if: condition",
       d: "if condition:",
       ans: "ans4"
    },

    {
       question: "Q2: Which of the following is not a data type in JavaScript?",
       a: "String",
       b: "Number",
       c: "Boolean",
       d: "ArrayList",
       ans: "ans4"
    },

    {
       question: "Q3: Which of the following is used to declare a variable in Java?",
       a: "var",
       b: "let",
       c: "const",
       d: "int",
       ans: "ans4"
    },

    {
       question: "Q4: What is the correct syntax for a for loop in C#?",
       a: "for i = 0 to 10",
       b: "for (i = 0; i <= 10; i++)",
       c: "for (int i = 0; i <= 10)",
       d: "for i in range(0, 10)",
       ans: "ans2"
    },

    {
       question: "Q5: Which of the following is not a looping structure in PHP?",
       a: "while",
       b: "for",
       c: "do-while",
       d: "foreach",
       ans: "ans4"
    },

    {
       question: "Q6: Which of the following is not a valid operator in C++?",
       a: "+",
       b: "-",
       c: "*",
       d: "$",
       ans: "ans4"
    },

    {
       question: "Q7: In which programming language is 'print' used for displaying output?",
       a: "Python",
       b: "JavaScript",
       c: "Java",
       d: "C++",
       ans: "ans1"
    },

    {
       question: "Q8: What is the correct syntax for a function in Ruby?",
       a: "function name()",
       b: "def name",
       c: "function name",
       d: "def name()",
       ans: "ans4"
    },

    {
       question: "Q9: Which of the following is not a type of variable in Swift?",
       a: "Int",
       b: "String",
       c: "Double",
       d: "Object",
       ans: "ans4"
    },

    {
       question: "Q10: In which programming language is '#' used for commenting?",
       a: "Python",
       b: "JavaScript",
       c: "Java",
       d: "C++",
       ans: "ans4"
    },
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = coding[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)

    if(checkedAnswer === coding[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < coding.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${coding.length}  </h3>
        <buttom class="btn" onclick = "location.reload()"> Try Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
    
});
