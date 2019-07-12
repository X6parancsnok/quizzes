var myQuizzes = [
    {
        name: "Marvel",
        link: "marvel"
    },
    {
        name: "Test",
        link: "test"
    }
];

var quizContainer = document.getElementById('quizzes');

showQuizzes(myQuizzes,quizContainer);

function showQuizzes(quizzes, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    
    for(var i=0; i<quizzes.length; i++){
        output.push(
            '<div class="quiz">' + quizzes[i].name + '</div>'
        )
    }


/*
    // for each question...
    for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];

        // for each available answer...
        for(letter in questions[i].answers){

            // ...add an html radio button
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
            );
        }

        // add this question and its answers to the output
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    // finally combine our output list into one string of html and put it on the page*/
    quizContainer.innerHTML = output.join('');
    
}