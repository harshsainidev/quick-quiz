const music = [
    {
       question: "Q1: Which of the following is not a type of music notation?",
       a:"Standard notation",
       b: "Tab notation",
       c: "Morse code notation",
       d: "Graphics notation",
       ans: "ans3"
    },

    {
       question: "Q2: What is the most common time signature in classical music?",
       a: "3/4",
       b: "4/4",
       c: "5/4",
       d: "6/8",
       ans: "ans2"
    },

    {
       question: "Q3: Which of the following is not a type of instrument in a symphony orchestra?",
       a: "Violin",
       b: "Harp",
       c: "Harp",
       d: "Theremin",
       ans: "ans4"
    },

    {
       question: "Q4: What is the most common key in pop music?",
       a: "C Major",
       b: "G Major",
       c: "D Major",
       d: "A Major",
       ans: "ans1"
    },

    {
       question: "Q5: Which of the following is not a type of chord?",
       a: "Major",
       b: "Mino",
       c: "Diminished",
       d: "Flat",
       ans: "ans4"
    },

    {
       question: "Q6: Which of the following is not a type of music genre?",
       a: "Jazz",
       b: "Blues",
       c: "Rock",
       d: "Applesauce",
       ans: "ans4"
    },

    {
       question: "Q7: Which of the following is not a type of music theory?",
       a: "Harmony",
       b: "Counterpoint",
       c: "Form",
       d: "Cooking",
       ans: "ans4"
    },

    {
       question: "Q8: What is the most common tempo marking in classical music?",
       a: "Allegro",
       b: "Andante",
       c: "Adagio",
       d: "Moderato",
       ans: "ans1"
    },

    {
       question: "Q9: Which of the following is not a type of musical form?",
       a: "Sonata",
       b: "Symphony",
       c: "Concerto",
       d: "Spaghetti",
       ans: "ans4"
    },

    {
       question: "Q10: Which of the following is not a type of music notation software?",
       a: "Sibelius",
       b: "Finale",
       c: "MuseScore",
       d: "Microsoft Word",
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

    const questionList = music[questionCount];

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

    if(checkedAnswer === music[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < music.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${music.length}  </h3>
        <buttom class="btn" onclick = "location.reload()"> Try Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
    
});
