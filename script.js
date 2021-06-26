const questionCountText = document.getElementById('QuestionCounter');
const scoreText = document.getElementById('score');
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

let questionCount = 0;
let questions = [];
let currentQuestion = {};
let correctAnswers = new Array();
let userAnswers = new Array();

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

    let availableQuestions = [...result];
    console.log(availableQuestions);
    
  
    for (let i = 0; i < availableQuestions.length; i++) {
      let questionDisplay = document.createElement('div');
     let question = document.createElement('h1');
     let quizContainer = document.getElementById('quiz');
     currentQuestion = availableQuestions[i];
     question.innerText = currentQuestion.question;
     questionDisplay.append(question);
     quizContainer.append(questionDisplay);

     let answerContainer = document.createElement('ul');
          answerContainer.setAttribute("style", "list-style-type: none");


            let correctValue = Object.values(currentQuestion.correct_answers);
          let tempAnswers = Object.entries(currentQuestion.answers)
            for (j=0; j<tempAnswers.length; j++){
              if(tempAnswers[j][1] != null) {
           let choiceLine = document.createElement("li");
          choiceLine.textContent = " " + tempAnswers[j][1];
          choiceLine.setAttribute("for", tempAnswers[j][0]);
          const radioBtn = document.createElement('input');
          radioBtn.setAttribute("type", "radio");
          radioBtn.setAttribute("class", "Answer-choices");
          radioBtn.setAttribute("name", currentQuestion.id);
          radioBtn.setAttribute("value", correctValue[j]);
          choiceLine.prepend(radioBtn);
          answerContainer.append(choiceLine);
          questionDisplay.append(answerContainer);
              }
}

      // for (const [key, value] of Object.entries(currentQuestion.answers)) {

      //   //  console.log(`${key} ${value}`);
      //   // if (value != null) {
      //     let choiceLine = document.createElement("li");
      //     choiceLine.textContent = " " + value;
      //     choiceLine.setAttribute("for", key);
      //     const radioBtn = document.createElement('input');
      //     radioBtn.setAttribute("type", "radio");
      //     radioBtn.setAttribute("class", "Answer-choices");
      //     radioBtn.setAttribute("name", currentQuestion.id);
      //     console.log("i is ", i);
      //     radioBtn.setAttribute("value", correctValue[i]);
      //     // radioBtn.setAttribute("id", `${currentQuestion.id.toString()}_${counter}`)
      //     // counter++;
      //     choiceLine.prepend(radioBtn);
      //     answerContainer.append(choiceLine);
      //     questionDisplay.append(answerContainer);
      //   // }
      // }

      // for (const [key, value] of Object.entries(currentQuestion.correct_answers)) { 
      //   if (value === "true") {
      //     correctAnswers.push({currentQuestion.id: key});
      //   }
      // }
    }   
    let radios = document.querySelectorAll('.Answer-choices');
    for(radio in radios) {
      radios[radio].onclick = function() {
        if (this.value === "true") {
         console.log('correct')
        } 
      };
    };

    // for (let j = 0; j < radios.length; j++) {
    //   radios[j].addEventListener("change", function() {
    //       let val = this.id; // this == the clicked radio,
    //       userAnswers.push(val)
    //       console.log(userAnswers)
    //       localStorage.setItem('userAnswers', userAnswers);
    //    });
    //   }
   })
  .catch(error => console.log('error', error));
 

  console.log(correctAnswers)

  let submit = document.getElementById('submitBtn');
  let score = 0;

  submit.addEventListener('click', e => {

    incrementScore = num => {
      score += num;
      scoreText.textContent = score;
      localStorage.setItem('mostRecentScore', score);
    }
    window.location.assign('/end.html');
  })

