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

//console.log(myQuizzes[1].name)

var quizContainer = document.getElementById('quizzes');

showQuizzes(myQuizzes,quizContainer);

function showQuizzes(quizzes, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    
    for(var i=0; i<quizzes.length; i++){

        // add this question and its answers to the output
        output.push(
            '<a href="https://x6parancsnok.github.io/' + quizzes[i].link + 'quiz">• ' + quizzes[i].name + '</a> </br>' 
        );
    }
    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
    
}