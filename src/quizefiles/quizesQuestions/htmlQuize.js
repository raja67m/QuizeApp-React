import React from "react";
import "./htmlQuize.css";
import Questions from "./quizeScores/htmlquize.json";
import contgration from "./quizeScores/congrationsgif.gif";
class HtmlQuize extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      showCongratsPopup:false,
      showAveragePopup:false,
      showLowPopup:false
    }
  }

  //handleshowPopup 
handleCongrats=()=>{
  this.setState({
    showCongratsPopup:true
  })
}

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
         <input type="radio" />
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

          
          <p>Your scores 100</p>
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
