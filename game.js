const question = document.getElementById('question');


const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;



let questions = [];
// const response = fetch();
// const data = response.json();
// const api_url = "https://quizapi.io/api/v1/questions?limit=10&apiKey=q6NHZAHRcFHFl0runQZzub3k1TORxv8uEicmoSKg&multiple_correct_answers=false&difficulty=easy&category=Code&Access-Control-Allow-Origin=*"
fetch ("https://quizapi.io/api/v1/questions?limit=10&apiKey=q6NHZAHRcFHFl0runQZzub3k1TORxv8uEicmoSKg&multiple_correct_answers=false&difficulty=easy&category=Code&Access-Control-Allow-Origin=*")
.then(response => response.json()
.then(result => {
    // let availableQuesions = [...result[0].question];
    const questionArray = Array.from [result];
    const answer1 = document.getElementById("choice1");
    const answer2 = document.getElementById("choice2");
    const answer3 = document.getElementById("choice3");
    const answer4 = document.getElementById("choice4");
    const answer5 = document.getElementById("choice5");
    const answer6 = document.getElementById("choice6");
    question.innerHTML = result[4].question;   
    answer1.innerText = result[4].answers.answer_a;
    answer2.innerText = result[4].answers.answer_b;
    answer3.innerText = result[4].answers.answer_c;
    answer4.innerText = result[4].answers.answer_d;
    answer5.innerText = result[4].answers.answer_e;
    answer6.innerText = result[4].answers.answer_f;

   if (JSON.stringify(answer5) == " ") {
       document.getElementById("fifthChoice").hidden;
   } 
    console.log(result[4].question);
    console.log(result[4].answers.answer_a);
    localStorage.setItem('question', JSON.stringify(result[0].question));
    console.log(result);
    nextQuestion () => {
        questionArray.forEach(index ++);
    }
    console.log(nextQuestion());
}))
.catch(error => {
    console.log('error')
});









    

            