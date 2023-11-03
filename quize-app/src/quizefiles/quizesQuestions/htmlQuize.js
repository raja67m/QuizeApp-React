import React from "react";
import "./htmlQuize.css";

class HtmlQuize extends React.Component {
 constructor(props){
  super(props);
  this.state={
    currentQuestion: 0,
    questions:[
      {
        questoinText: "What is HTML?",
        options: ["ProgramLanguage", "MarkupLanguage", "StyleLanguage", "A"],
        correctAnswer: "MarkupLanguage",
      },
      {
        questoinText: "Which tag uses a box?",
        options: ["div", "label", "p", "input"],
        correctAnswer: "div"
      },
      {
        questoinText: "What is the HTML paragraph tag?",
        options: ["p", "input", "a", "div"],
        correctAnswer: "p"
      }
    ],
    selectedAnswers: Array(3).fill(null),
    score: null
  }
 }
//handleOptionChange
handleOptionChange = (event, index) => {
  const selectedAnswers = this.state.selectedAnswers.slice();
  selectedAnswers[index] = event.target.value;
  this.setState({ selectedAnswers });
}

calculateScore = () => {
  const { questions, selectedAnswers } = this.state;
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (selectedAnswers[i] === questions[i].correctAnswer) {
      score++;
    }
  }

  return score;
}

//handlesubmit
handleSubmit = () => {
  const score = this.calculateScore();
  this.setState({ score });
}





 render() {
  const { questions, selectedAnswers, currentQuestion, score } = this.state; // Corrected variable name here

   return (
     <div className="HtmlQuize">
       {questions.map((question, index) => (
         <div key={index}>
           <label className="question">{question.questoinText}</label>
           <div className="questionFirst">
             {question.options.map((option, optionIndex) => (
               <label className="AnsOption" key={optionIndex}>
                 <input type="radio" name={`questions-${index}`} value={option}

                   checked={selectedAnswers[index] === option}
                   onChange={(event) => this.handleOptionChange(event, index)}
                 />
                 {option}
               </label>
             ))}
           </div>
         </div>
       ))}

 {currentQuestion === questions.length - 1 && (
         <button onClick={this.handleSubmit}>Submit</button>
       )}
       {score !== null && (
         <p>Your score is {score}</p>
       )}

     </div>
   );
 }
}

export default HtmlQuize;
