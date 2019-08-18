//alert("test");

let questionList = [];

class Question {
    constructor(questionText, answer, correctAnswerIndex) {
        this.questionText = questionText;
        this.answer = answer;
        this.correctAnswerIndex = correctAnswerIndex;

    }

    questions() {

        console.log(this.questionText);
        for(let i = 0; i < this.answer.length; i++) {
            console.log([i] +". " + this.answer[i]);

        }

    }

    checker() {

        let userInput = parseInt(prompt("enter a answer"));
        // KEY: In your 'checker' class method you are always checking the user answer against your question 1 answer if if question 2 or 3.
        // YOUR VERSION
        //if(userInput === q1.correctAnswerIndex){
        // KEY: Should use the answer for 'this' question instance like this:
        if(userInput === this.correctAnswerIndex){
            alert("correct answer");
        }else{
            alert("wrong answer");

        }

    }

}
// let index_of_a_question = Math.floor(Math.random() * questionList.length);

let q1 = new Question('How many million miles is Earth from the Sun?',['123', '93', '150'], 1);
let q2 = new Question("What year is it?" , ["2018", "2019", 2020], 1);
let q3 = new Question("what colors are red snappers", ["blue", "yellow", "red"],3);

questionList.push(q1);
questionList.push(q2);
questionList.push(q3);

// Looks pretty good! The only thing you didn't do is the random part.
let index_of_a_question = Math.floor(Math.random() * questionList.length); // get a random index for question array
questionList[index_of_a_question].questions(); // log question/answers at that index
questionList[index_of_a_question].checker(); // use class method and get user's guess/check it
//

// YOUR version
// q1.questions();
// q1.checker();
