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
        if(userInput === q1.correctAnswerIndex){
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

q1.questions();
q1.checker();
