const questionHtml = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];


let questions = [];
// const response = fetch();
// const data = response.json();
const api_url = "https://quizapi.io/api/v1/questions?limit=10&apiKey=q6NHZAHRcFHFl0runQZzub3k1TORxv8uEicmoSKg&multiple_correct_answers=false&difficulty=easy&category=Code&Access-Control-Allow-Origin=*"

async function getQuestions() {
const response = await fetch(api_url);
const data = await response.json();
console.log(data[4].question)
};

getQuestions();

displayQuestion => {
    document.getElementById('question').innerHTML(getQuestions())
};



    

            