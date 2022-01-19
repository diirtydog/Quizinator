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
        question: 'Where is the correct location to insert external JavaScript link',
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


function beginQuiz(event) { 
        event.preventDefault();
        generateQuestion();
};
var questionElement = document.querySelector('#btn')

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

        // for (let i = 0; i < quizdata.length; i++) {
        //         // event listener maybe
        //         nowQuestion = document.setAttribute(quizData[questionNumb++]);


        // 
        questionNumb++;
        // event listener 

        //console.log(this)
        
}

function generateBtn () {
        var nowSelection = quizData[questionNumb];
        // select the div for the buttons to reside in 
        var selection = document.getElementById("classes")
        

        // create the a button
        var alpha = document.createElement("button");
        alpha.textContent = "A:" + nowSelection.a;
        alpha.setAttribute("data-task-id", nowSelection.a);
        selection.appendChild(alpha);
        alpha.className = 'btn';
        // create the b button
        var beta = document.createElement("button");
        beta.textContent = "B:" + nowSelection.b;
        beta.setAttribute("data-task-id", nowSelection.b);
        selection.appendChild(beta);
        beta.className = 'btn';
        // create the c button
        var charlie = document.createElement("button");
        charlie.textContent = "C:" + nowSelection.c;
        charlie.setAttribute("data-task-id", nowSelection.c);
        selection.appendChild(charlie);
        charlie.className = 'btn';
        // create the d button
        var delta = document.createElement("button");
        delta.textContent = "D:" + nowSelection.d;
        delta.setAttribute("data-task-id", nowSelection.d);
        selection.appendChild(delta);
        delta.className = 'btn';


        questionNumb++;
       
};

//alpha.addEventListener('click')
        //if (answer === alpha) {
        //scorePlus();
        ////questionNumb++;
//};// create variables used to select question location
var questionEl = document.getElementById('question');
var alpha = document.getElementById('btna');
var beta = document.getElementById('btnb');
var charlie = document.getElementById('btnc');
var delta = document.getElementById('btnd');
var answer = document.getElementById("answer");
//submitButton.addEventListener('click', beginQuiz);
function loadQuiz() {
        var questionNumbData = quizData[i ];

        questionEl.innerText = questionNumbData.question;
        alpha.innerText = questionNumbData.a;
        beta.innerText = questionNumbData.b;
        charlie.innerText = questionNumbData.c;
        delta.innerText = questionNumbData.d;

        

};
//alpha.addEventListener("click", () => {
        //questionNumb++;

        //if (questionNumb < quizData.length) {
                //loadQuiz();
        //} else {
                //alert("Your Finished")
        //}

//});


generateQuestion();

//var button  = document.getElementById('btna').addEventListener('click', buttonClick);

function buttonClick() {
        if (button === answer)
        
        console.log('button clicked')
}
//var getParticipantName = function() {
        //var name = "";
        //while (name === '' || name === null) {
                ///name = prompt('What is your name for the high score?');
        //}
        //return highscore;
//}
//var participantInfo = {
        //name: getParticipantName(),
        ///score: 5
//};
        // I think i can append them to where they need to be in this function as well

// make a loop that determines whether their selection was right or wrong
        // we also have to store this data to tally up the score

// make another loop to continue on to the next question

//

    



