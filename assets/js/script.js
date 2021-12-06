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
function generateQuestion() {
        var nowQuestion = quizData[questionNumb];
        var questionEl = document.createElement("li");
        questionEl.innerHTML = "<h2 class='question'>" + nowQuestion.question + "</h2>";
        var questionsEl = document.getElementById("classes")
        questionsEl.appendChild(questionEl)
        questionEl.className = "question";
        questionEl.setAttribute("data-task-id", questionNumb);
        
        //questionEl.appendChild(nowQuestion);
        generateBtn();
        questionNumb++;
        //console.log(this)
        
}

function generateBtn () {
        var nowSelection = quizData[questionNumb];
        // create the div for the buttons to reside in 
        var selection = document.getElementById("classes")
        selection.className = 'big';

        // create the a button
        var alpha = document.createElement("button");
        alpha.textContent = "A:" + nowSelection.a;
        alpha.setAttribute("data-task-id", questionNumb);
        selection.appendChild(alpha);
        // create the b button
        var beta = document.createElement("button");
        beta.textContent = "B:" + nowSelection.b;
        beta.setAttribute("data-task-id", questionNumb);
        selection.appendChild(beta);
        // create the c button
        var charlie = document.createElement("button");
        charlie.textContent = "C:" + nowSelection.c;
        charlie.setAttribute("data-task-id", questionNumb);
        selection.appendChild(charlie);
        // create the d button
        var delta = document.createElement("button");
        delta.textContent = "D:" + nowSelection.d;
        delta.setAttribute("data-task-id", questionNumb);
        selection.appendChild(delta);

        //questionNumb++;
       
}


generateQuestion();

        // I think i can append them to where they need to be in this function as well

// make a loop that determines whether their selection was right or wrong
        // we also have to store this data to tally up the score

// make another loop to continue on to the next question

//

    



