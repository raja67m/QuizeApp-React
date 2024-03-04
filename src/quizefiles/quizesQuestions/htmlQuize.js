import React from "react";
import "./htmlQuize.css";
import Questions from "./quizeScores/htmlquize.json";
class HtmlQuize extends React.Component {

render() {
 return(
  <div className="HtmlConatiner">


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
     

     </div>
</div>
   );
 }
}

export default HtmlQuize;
