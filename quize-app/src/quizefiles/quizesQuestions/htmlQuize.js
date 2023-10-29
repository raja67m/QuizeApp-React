import React from "react";
import  "./htmlQuize.css";
import { Link } from 'react-router-dom';
class HtmlQuize extends React.Component{

   constructor(props) {
      super(props);
      this.state = {
        selectedOptions: {},
        correctAnswers: {
          1: 'Option1',
          2: 'Option2',
          3: 'Option3',
          4: 'Option4',
          5: 'Option5',
        },
        isSubmitEnabled: false,
        errorMessage: '',
      };
    }
  // handleOptionChange
  handleOptionChange = (event) => {
   const { name, value } = event.target;
   this.setState((prevState) => ({
     selectedOptions: {
       ...prevState.selectedOptions,
       [name]: value,
     },
   }));
 };

 // CalculateScore
 calculateScore = () => {
   const { selectedOptions, correctAnswers } = this.state;
   let score = 0;
   for (const questionNumber in correctAnswers) {
     if (selectedOptions[questionNumber] === correctAnswers[questionNumber]) {
       score++;
     }
   }
   return score;
 };

 // Handle the submit button click
  handleSubmit = () => {
    const { selectedOptions, correctAnswers } = this.state;

    // Check if all questions have been answered
    for (const questionNumber in correctAnswers) {
      if (!selectedOptions[questionNumber]) {
        this.setState({
          errorMessage: 'Please answer all questions before submitting.',
        });
        return;
      }
    }

    // All questions have been answered, so enable the submit button and redirect
    this.setState({ isSubmitEnabled: true });
    this.props.history.push(`/score/${this.calculateScore()}`);
  };







render(){

   return<div className="HtmlQuize">

<label className="question">1. What is Html?</label>

<div className="questionFirst">
   <label className="AnsOption">
      <input type="radio" className="option" 
      
      value='Option1'
      checked={this.state.selecedOptions==='Option1'}
      onChange={this.handleOptionChange}
      
      />
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option2'
       checked={this.state.selecedOptions==='Option2'}
       onChange={this.handleOptionChange} />
      option1
   </label>
   <label className="AnsOption">
      <input type="radio" 
       value='Option3'
       checked={this.state.selecedOptions==='Option3'}
       onChange={this.handleOptionChange}/>
      option1
   </label>
   <label className="AnsOption">
      <input type="radio" 
       value='Option4'
       checked={this.state.selecedOptions==='Option4'}
       onChange={this.handleOptionChange}/>
      option1
   </label>
  
  </div>

{/* question box second */ }
<label className="question">2. what is html course?</label>
  <div className="questionSecond">
  <label className="AnsOption">
      <input type="radio" 
       value='Option1'
       checked={this.state.selecedOptions==='Option1'}
       onChange={this.handleOptionChange}/>
      option1
   </label>
   <label className="AnsOption">
      <input type="radio" 
       value='Option2'
       checked={this.state.selecedOptions==='Option2'}
       onChange={this.handleOptionChange}/>
      option1
   </label>
   <label className="AnsOption">
      <input type="radio" 
       value='Option3'
      checked={this.state.selecedOptions==='Option3'}
      onChange={this.handleOptionChange}/>
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option4'
       checked={this.state.selecedOptions==='Option4'}
       onChange={this.handleOptionChange} />
      option1
   </label>
  
  </div>

  <label className="question">3. what is html course?</label>
  <div className="questionSecond">
  <label className="AnsOption">
      <input type="radio" 
       value='Option1'
      checked={this.state.selecedOptions==='Option1'}
      onChange={this.handleOptionChange}/>
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option2'
       checked={this.state.selecedOptions==='Option2'}
       onChange={this.handleOptionChange} />
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option3'
       checked={this.state.selecedOptions==='Option3'}
       onChange={this.handleOptionChange}/>
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option4'
       checked={this.state.selecedOptions==='Option4'}
       onChange={this.handleOptionChange} />
      option1
   </label>
 
  </div>


  <label className="question">4.what is html course?</label>
  <div className="questionSecond">
  <label className="AnsOption">
      <input type="radio"
       value='Option1'
      checked={this.state.selecedOptions==='Option1'}
      onChange={this.handleOptionChange} />
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option2'
       checked={this.state.selecedOptions==='Option2'}
       onChange={this.handleOptionChange} />
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option3'
       checked={this.state.selecedOptions==='Option3'}
       onChange={this.handleOptionChange} />
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option4'
       checked={this.state.selecedOptions==='Option4'}
       onChange={this.handleOptionChange} />
      option1
   </label>
   
  </div>


  <label className="question">5. what is html course?</label>
  <div className="questionSecond">
  <label className="AnsOption">
      <input type="radio" 
       value='Option1'
       checked={this.state.selecedOptions==='Option1'}
       onChange={this.handleOptionChange}/>
      option1
   </label>
   <label className="AnsOption">
      <input type="radio" 
       value='Option2'
       checked={this.state.selecedOptions==='Option2'}
       onChange={this.handleOptionChange}/>
      option1
   </label>
   <label className="AnsOption">
      <input type="radio"
       value='Option3'
       checked={this.state.selecedOptions==='Option3'}
       onChange={this.handleOptionChange} />
      option1
   </label>
   <label className="AnsOption">
      <input type="radio" 
       value='Option4'
       checked={this.state.selecedOptions==='Option4'}
       onChange={this.handleOptionChange}/>
      option1
   </label>
 
  </div>

  <Link to ='/score'> 
<button className="submitButton"
onClick={this.handleSubmit}
disabled={!this.state.isSubmitEnabled}
>Submit</button>

</Link>

{this.state.errorMessage &&(
   <div className="errorMessage">{this.state.errorMessage}</div>
)}




   </div>
}



}
export default HtmlQuize;