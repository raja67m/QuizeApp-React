import React from "react";

import Questions from "./reactJson.json";
import contgration from "./congrationsgif.gif";
import Average from "./averagescore.gif";
import Low from "./lowscore.gif";
import { Link } from 'react-router-dom';
import "./reactQuize.css";
import Home from "./home.jpg";
class HtmlQuize extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      selectedAnswers:{},
      finalScore:0,
      showCongratsPopup:false,
      showAveragePopup:false,
      showLowPopup:false,
      submitted: false
    }
  }

 // handle option is selected
 handleOptionSelect = (questionId, selectedOption) => {
  if (!this.state.submitted) { // Allow selection only before submission
    this.setState(prevState => ({
      selectedAnswers: {
        ...prevState.selectedAnswers,
        [questionId]: selectedOption
      }
    }));
  }
};  

// calculated the score to the fucntion:
calculateScore = () => {
  let score = 0;
  Questions.forEach(question => {
    if (this.state.selectedAnswers[question.id] === question.answer) {
      score += 1;
    }
  });
  return score;
};


  //handleshowPopup 
  handleCongrats = () => {
    const finalScore = this.calculateScore();
    this.setState({
      finalScore,
      submitted:true
    });

    if(finalScore >=7){
      this.setState({
        showCongratsPopup:true
      })
    }else if(finalScore>=4 && finalScore >=7){
      this.setState({ showAveragePopup:true})
    }
    else{
      this.setState({showLowPopup:true})
    }
  };

//popup close function
handleCancelPoup=()=>{
  this.setState({
    showCongratsPopup:false,
    showAveragePopup:false,
    showLowPopup:false
  })
}


render() {
 return(

  <div className="quize-container">

<div className="Header-container">
<Link to ='/HOME'>
<img src={Home} className="Home" alt="Not visible"/>

</Link>
<h1 className="reactTitle">React Quize</h1>

</div>
  
   
     <div className="HtmlQuize">


           {Questions.map((item)=>(

         <div key={item.id}>
          
         <label className="Reactquestion">{item.question}</label>
        
 {item.options.map((option,index)=>(
 <div className="questionFirst" key={index}>
   <label
                    className={`AnsOption ${
                      this.state.submitted ? (option === item.answer ? "correct" : "") : ""
                    }`}
                  >
          <input
                      type="radio"
                      onChange={() => this.handleOptionSelect(item.id, option)}
                      checked={this.state.selectedAnswers[item.id] === option}
                      disabled={this.state.submitted}
                    />
         {option}
        </label>
        </div>


 ))}

</div>
              
            ))

          }
             <button className={`ReactsubmitBtn ${this.state.submitted ? 'clicked' : ''}`} onClick={this.handleCongrats} disabled={this.state.submitted}>Submit</button>

   
      {
        this.state.showCongratsPopup && (
          <div className="Popup">
            <div className="Popup-content">

            <img  className="gifImage"   src={contgration} alt="Not visible "/>

           <div className="ReactScoreBox">

          
          <p>Your Score: {this.state.finalScore}</p>
          <button className="Reactok" onClick={this.handleCancelPoup} >Ok</button>
          
          </div>
            </div>

          </div>
        )
        

        
      }

{
        this.state.showAveragePopup && (
          <div className="Popup">
            <div className="Popup-content">

            <img  className="gifImage"   src={Average} alt="Not visible "/>

           <div className="ReactScoreBox">

          
          <p>Your Score: {this.state.finalScore}</p>
          <button className="Reactok" onClick={this.handleCancelPoup} >Ok</button>
          
          </div>
            </div>

          </div>
        )
        }


{
        this.state.showLowPopup && (
          <div className="Popup">
            <div className="Popup-content">

            <img  className="gifImage"   src={Low} alt="Not visible "/>

           <div className="ReactScoreBox">

          
          <p>Your Score: {this.state.finalScore}</p>
          <button className="Reactok" onClick={this.handleCancelPoup} >Ok</button>
          
          </div>
            </div>

          </div>
        )
      }

     </div>

   
     </div>
   );
 }
}

export default HtmlQuize;
