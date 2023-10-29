import React from "react";
import  "./htmlQuize.css";

class HtmlQuize extends React.Component{
render(){

   return<div className="HtmlQuize">

<label className="question">1. What is Html?</label>

<div className="questionFirst">
   <label>
      <input type="radio" className="option" />
      option1
   </label>
    <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
  
  </div>

{/* question box second */ }
<label className="question">2. what is html course?</label>
  <div className="questionSecond">
   <label>
      <input type="radio" />
      option1
   </label>
    <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
  
  </div>

  <label className="question">3. what is html course?</label>
  <div className="questionSecond">
   <label>
      <input type="radio" />
      option1
   </label>
    <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
 
  </div>


  <label className="question">4.what is html course?</label>
  <div className="questionSecond">
   <label>
      <input type="radio" />
      option1
   </label>
    <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
   
  </div>


  <label className="question">5. what is html course?</label>
  <div className="questionSecond">
   <label>
      <input type="radio" />
      option1
   </label>
    <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
   <label>
      <input type="radio" />
      option1
   </label>
 
  </div>


<button className="submitButton">Submit</button>    
    





   </div>
}



}
export default HtmlQuize;