const questionCountText = document.getElementById('QuestionCounter');
const scoreText = document.getElementById('score');
const CORRECT_BONUS = 10;
const MAX_QUESTIONSN = 10;

let score = 0;
let questionCount = 0;
let questions = [];
let currentQuestion = {};

var myHeaders = new Headers();
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6ImFxdFhIWG1Db2MySVUxTEU1MldNdnc9PSIsInZhbHVlIjoiK2Y4VUJhVVBSUGF6Zmcxc3BTRWp2UCtqVVJMTllxQW1yazl5SzlBaTFJUmhcL1BzNlwvY01cL1FBRTQ4M1h0ZmdSWTNnd01YczF4TU5kdjU0Y3hCTEVBd0lld3FwajhibkRoWVN0V1VpTmRROUVPSWpoM1czUTc3ODFhaU1PYUNCOG8iLCJtYWMiOiIyMmRhNmNlMzkxZTgzNTVmMDNlMDY2ZmIwNTEwMWFiZGYyMTNiZmZiMWQ5YThhNWFmZDNjMDJlMWQyZThmYmRiIn0%3D; quziapi_session=eyJpdiI6IkVuMG1UdWNRdEhXUTJzS1NvM0N2QXc9PSIsInZhbHVlIjoiVTFZVm1cL3dlNHNEbzF3RWZRUU96QitMUlFFQm1lTlhsMnJ5ZGRmd1ZodXBuZ2JaM015VWlBTnV6eGVBVk5CUUdOR3VZVkVSTE1BUm1QcVNvWWxCM0trTWNlbnp1M01NUTE1RUNydHZYc2daa0FnQTdMY1dJWDkwTXlrTHhneWpkIiwibWFjIjoiZTQyZjFjNzAwNWQyNGUyZmUxODUxYzMyNGI4ZjgyZDUxMzJmNjdlYjQwMjU2NWY1OTQ3Mzc3YzQ4NmQzZjhjNyJ9");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://quizapi.io/api/v1/questions?limit=10&apiKey=q6NHZAHRcFHFl0runQZzub3k1TORxv8uEicmoSKg&multiple_correct_answers=false&difficulty=easy&category=Code&limit=5", requestOptions)
  .then(response => response.json())
  .then(result => {

    let availableQuesions = [...result];
    
  
    // let question = document.getElementById('question');

    
    for (let i = 0; i < availableQuesions.length; i++) {
     let question = document.createElement('h1');
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
     currentQuestion = availableQuesions[questionIndex];
     question.innerText = currentQuestion.question;
     let questionDisplay = document.getElementById('quiz');
     questionDisplay.append(question);


      for (const [key, value] of Object.entries(currentQuestion.answers)) {
        //  console.log(`${key} ${value}`);
        if (value != null) {
          let answerContainer = document.getElementById('answers');
          let choiceLine = document.createElement("li");
          choiceLine.textContent = " " + value;
          choiceLine.setAttribute("for", key);
          const radioBtn = document.createElement('input');
          radioBtn.setAttribute("type", "radio");
          radioBtn.setAttribute("name", "Answer-choices");
          radioBtn.id = key;
          choiceLine.prepend(radioBtn);
          answerContainer.append(choiceLine);
    
        }
  
    }

   }
  //  const radios = document.getElementsByName('Answer-choices');

  //  incrementScore = num => {
  //   score += num;
  //   scoreText.textContent = score;
  // }

  // for(radio in radios) {
  //   radios[radio].onclick = function() {
  //     if (this.id === result[0].correct_answer) {
  //      incrementScore(CORRECT_BONUS);
  //     } 
  //     localStorage.setItem('mostRecentScore', score);
  //   };
  // };

   })
  .catch(error => console.log('error', error));
