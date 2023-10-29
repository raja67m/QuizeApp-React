import React from "react";


class HtmlQuize extends React.Component{
render(){

   return<div className="HtmlQuize">

<label>1. What is Html?</label>

<div className="questionFirst">
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
   <label>
      <input type="radio" />
      option1
   </label>
  </div>

{/* question box second */ }
<label>2. what is html course?</label>
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
   <label>
      <input type="radio" />
      option1
   </label>
  </div>


    
   </div>
}



}
export default HtmlQuize;