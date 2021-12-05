// querySelectors go up here
//var quizDisp = document.querySelector("")
var questionNumb = 0;

// make an array that contains the question and answer content
quizData = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<main>',
        b: '<script>',
        c: '<scripting>',
        d: '<ILUVUMOM>',
        answer: '<script>'
    }, {
        question: 'Where is the correct locatation to insert external JavaScript link',
        a: 'head',
        b: 'footer',
        c: 'body',
        d: 'back door',
        answer: 'body'
    }, {
        question: 'How do you write "javascript is hard" in an alert box?',
        a: 'msgBox(javascript is hard)',
        b: 'msg("javascript is hard")',
        c: 'alert("javascript is hard")',
        d: 'I just do not know',
        answer: 'alert("javascript is hard")'
    }
];
// create variables used to select question location
var questionEl = document.getElementById('question');
var alpha = document.getElementById('a');
var beta = document.getElementById('b');
var charlie = document.getElementById('c');
var delta = document.getElementById('d');
//submitButton.addEventListener('click', beginQuiz);

function beginQuiz(event) {
        event.preventDefault();
        generateQuestion();
}

// generate question with answers once the quiz has started
function generateQuestion(nowQuestion) {
        var nowQuestion = quizData[questionNumb];
        var questionEl = document.createElement("li");
        var questions = questionEl.innerHTML = "<h2 class='question'>" + nowQuestion.question + "</h2>";
        var questionsEl = document.getElementById("classes")
        questionsEl.appendChild(questionEl)
        questionEl.className = "question";
        questionEl.setAttribute("data-task-id", questionNumb);
        
        //questionEl.appendChild(nowQuestion);
        generateBtn();
        questionNumb++;
        console.log(this)
        
}

function generateBtn (nowSelection) {
        var nowSelection = quizData[questionNumb];
        var alpha = document.createElement("div")
        alpha.innerHTML = "<button class='answers' type='submit'>" + nowSelection.a + "</button>";
        var selectionsEl = document.getElementById("classes");
        selectionsEl.appendChild(alpha);
        alpha.setAttribute("data-task-id", questionNumb);

        questionNumb++;
        console.log(this);
}
generateQuestion();
        // I think i can append them to where they need to be in this function as well

// make a loop that determines whether their selection was right or wrong
        // we also have to store this data to tally up the score

// make another loop to continue on to the next question

//

    



