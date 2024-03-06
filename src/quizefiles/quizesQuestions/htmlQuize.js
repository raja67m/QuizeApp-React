import React from "react";
import "./htmlQuize.css";
import Questions from "./quizeScores/htmlquize.json";
import contgration from "./quizeScores/congrationsgif.gif";
class HtmlQuize extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      selectedAnswers:{},
      finalScore:0,
      showCongratsPopup:false,
      showAveragePopup:false,
      showLowPopup:false
    }
  }

  // handle option is selected

  handleOptionSelect = (questionId, selectedOption) => {
    this.setState(prevState => ({
      selectedAnswers: {
        ...prevState.selectedAnswers,
        [questionId]: selectedOption
      }
    }));
  };  

// calculated the score to the fucntion:
calculateScore = () => {
  let score = 0;
  Questions.forEach(question => {
    if (this.state.selectedAnswers[question.id] === question.ans) {
      score += 1;
    }
  });
  return score;
};


  //handleshowPopup 
  handleCongrats = () => {
    const finalScore = this.calculateScore();
    this.setState({
      finalScore
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
    showCongratsPopup:false
  })
}


render() {
 return(

  <>

    <h1>Html Quize</h1>
     <div className="HtmlQuize">


           {Questions.map((item)=>(

         <div key={item.id}>
          
         <label className="question">{item.questionText}</label>
        
 {item.options.map((option,index)=>(
 <div className="questionFirst" key={index}>
   <label className="AnsOption" >
         <input   type="radio"
          onChange={() => this.handleOptionSelect(item.id, option)}
          checked={this.state.selectedAnswers[item.id] === option} />
         {option}
        </label>
        </div>


 ))}

</div>
              
            ))

          }
      <button className="submitBtn" onClick={this.handleCongrats}>Submit</button>
      {
        this.state.showCongratsPopup && (
          <div className="Popup">
            <div className="Popup-content">

            <img  className="gifImage"   src={contgration} alt="Not visible "/>

           <div className="ScoreBox">

          
          <p>Your Score: {this.state.finalScore}</p>
          <button className="ok" onClick={this.handleCancelPoup} >Ok</button>
          
          </div>
            </div>

          </div>
        )
        

        
      }

{
        this.state.showAveragePopup && (
          <div className="Popup">
            <div className="Popup-content">

            <img  className="gifImage"   src={contgration} alt="Not visible "/>

           <div className="ScoreBox">

          
          <p>Your Score: {this.state.finalScore}</p>
          <button className="ok" onClick={this.handleCancelPoup} >Ok</button>
          
          </div>
            </div>

          </div>
        )
        }

{
        this.state.showCongratsPopup && (
          <div className="Popup">
            <div className="Popup-content">

            <img  className="gifImage"   src={contgration} alt="Not visible "/>

           <div className="ScoreBox">

          
          <p>Your Score: {this.state.finalScore}</p>
          <button className="ok" onClick={this.handleCancelPoup} >Ok</button>
          
          </div>
            </div>

          </div>
        )
        }


{
        this.state.showCongratsPopup && (
          <div className="Popup">
            <div className="Popup-content">

            <img  className="gifImage"   src={contgration} alt="Not visible "/>

           <div className="ScoreBox">

          
          <p>Your Score: {this.state.finalScore}</p>
          <button className="ok" onClick={this.handleCancelPoup} >Ok</button>
          
          </div>
            </div>

          </div>
        )
      }


{
        this.state.showLowPopup && (
          <div className="Popup">
            <div className="Popup-content">

            <img  className="gifImage"   src={contgration} alt="Not visible "/>

           <div className="ScoreBox">

          
          <p>Your Score: {this.state.finalScore}</p>
          <button className="ok" onClick={this.handleCancelPoup} >Ok</button>
          
          </div>
            </div>

          </div>
        )
      }

     </div>
     </>
   );
 }
}

export default HtmlQuize;
