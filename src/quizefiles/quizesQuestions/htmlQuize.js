import React from "react";
import "./htmlQuize.css";
import Questions from "./quizeScores/htmlquize.json";
import contgration from "./quizeScores/congrationsgif.gif";
import Average from "./quizeScores/averagescore.gif";
import Low from "./quizeScores/lowscore.gif";
import { Link } from 'react-router-dom';
import Home from "./quizeScores/home.jpg";

class HtmlQuize extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedAnswers: {},
      finalScore: 0,
      showCongratsPopup: false,
      showAveragePopup: false,
      showLowPopup: false,
      submitted: false // Track whether the quiz has been submitted
    };
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

  // calculated the score to the function
  calculateScore = () => {
    let score = 0;
    Questions.forEach(question => {
      if (this.state.selectedAnswers[question.id] === question.ans) {
        score += 1;
      }
    });
    return score;
  };

  // handle showPopup
  handleCongrats = () => {
    const finalScore = this.calculateScore();
    this.setState({
      finalScore,
      submitted: true
    });

    // Show appropriate popup based on score
    if (finalScore >= 7) {
      this.setState({ showCongratsPopup: true });
    } else if (finalScore >= 4 && finalScore < 7) {
      this.setState({ showAveragePopup: true });
    } else {
      this.setState({ showLowPopup: true });
    }
  };

  // popup close function
  handleCancelPopup = () => {
    this.setState({
      showCongratsPopup: false,
      showAveragePopup: false,
      showLowPopup: false
    });
  };

  render() {
    return (
      <div className="quize-container">
        <div className="Header-container">
          <Link to="/HOME">
            <img src={Home} className="Home" alt="Home" />
          </Link>
          <h1>Html Quize</h1>
        </div>
        <div className="HtmlQuize">
          {Questions.map((item) => (
            <div key={item.id}>
              <label className="question">{item.questionText}</label>
              {item.options.map((option, index) => (
                <div className="questionFirst" key={index}>
                  <label
                    className={`AnsOption ${
                      this.state.submitted ? (option === item.ans ? "correct" : "") : ""
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
          ))}
          <button className={`submitBtn ${this.state.submitted ? 'clicked' : ''}`} onClick={this.handleCongrats} disabled={this.state.submitted}>
            Submit
          </button>
          {this.state.showCongratsPopup && (
            <div className="Popup">
              <div className="Popup-content">
                <img
                  className="gifImage"
                  src={contgration}
                  alt="Congratulations"
                />
                <div className="ScoreBox">
                  <p>Your Score: {this.state.finalScore}</p>
                  <button className="ok" onClick={this.handleCancelPopup}>
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
          {this.state.showAveragePopup && (
            <div className="Popup">
              <div className="Popup-content">
                <img className="gifImage" src={Average} alt="Average score" />
                <div className="ScoreBox">
                  <p>Your Score: {this.state.finalScore}</p>
                  <button className="ok" onClick={this.handleCancelPopup}>
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
          {this.state.showLowPopup && (
            <div className="Popup">
              <div className="Popup-content">
                <img className="gifImage" src={Low} alt="Low score" />
                <div className="ScoreBox">
                  <p>Your Score: {this.state.finalScore}</p>
                  <button className="ok" onClick={this.handleCancelPopup}>
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HtmlQuize;
