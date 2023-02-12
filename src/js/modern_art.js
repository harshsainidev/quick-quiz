const modern_art = [
    {
       question: "Q1: Which artist is known for coining the term 'Surrealism'?",
       a: "Pablo Picasso",
       b: "Salvador Dali",
       c: "Vincent van Gogh",
       d: "Henri Matisse",
       ans: "ans2"
    },

    {
       question: "Q2: Which movement is associated with the use of abstract forms and shapes in art?",
       a: "Impressionism",
       b: "Expressionism",
       c: "Futurism",
       d: "Cubism",
       ans: "ans4"
    },

    {
       question: "Q3: Which artist is known for painting the work 'The Persistence of Memory'?",
       a: "Pablo Picasso",
       b: "Salvador Dali",
       c: "Vincent van Gogh",
       d: "Henri Matisse",
       ans: "ans2"
    },

    {
       question: "Q4: Which artist is known for creating the painting 'The Scream'?",
       a: "Vincent van Gogh",
       b: "Salvador Dali",
       c: "Edvard Munch",
       d: "Claude Monet",
       ans: "ans3"
    },

    {
       question: "Q5: What movement was associated with the use of bold, bright colors and thick brushstrokes?",
       a: "Impressionism",
       b: "Expressionism",
       c: "Fauvism",
       d: "Cubism",
       ans: "ans3"
    },

    {
       question: "Q6: What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
       a: "Impressionism",
       b: "Futurism",
       c: "Surrealism",
       d: "Abstract Expressionism",
       ans: "ans2"
    },

    {
       question: "Q7: Which artist is known for creating the painting 'Water Lilies'?",
       a: "Claude Monet",
       b: "Paul Cezanne",
       c: "Paul Gauguin",
       d: "Paul Klee",
       ans: "ans1"
    },

    {
       question: "Q8: Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
       a: "Henri Matisse",
       b: "Vincent van Gogh",
       c: "Salvador Dali",
       d: "Pablo Picasso",
       ans: "ans4"
    },

    {
       question: "Q9: Which artist is known for creating the painting 'Guernica'?",
       a: "Claude Mone",
       b: "Paul Cezanne",
       c: "Pablo Picasso",
       d: "Vincent van Gogh",
       ans: "ans3"
    },

    {
       question: "Q10: Which artist is known for creating the sculpture 'The Thinker'?",
       a: "Auguste Rodin",
       b: "Alexander Calder",
       c: "Jean Arp",
       d: "Henry Moore",
       ans: "ans1"
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

    const questionList = modern_art[questionCount];

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

    if(checkedAnswer === modern_art[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < modern_art.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${modern_art.length}  </h3>
        <buttom class="btn" onclick = "location.reload()"> Try Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
    
});
