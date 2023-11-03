/*import React from "react";
import Person from "./person_02.jpg";
import Home from "./home.jpg";
import "./htmlScore.css";
import { Link } from 'react-router-dom';
class HtmlScore extends  React.Component{

   render(){
       const { match } = this.props;
    const score = match.params.score || 0;
      return<div>
   <Link to ='/TotalScore'> 
      <img src={Home} className="HomePage" alt="Not Visible"/>
      </Link>

      <div className="ScoreContainer">
         <img src={Person} className="ProfileImg" alt="Not Visble"/>

        
         <label className="Score">Score:{score}</label>
       
         
      </div>
        
      </div>
   }

}

export default HtmlScore;
*/


import React from "react";
import Person from "./person_02.jpg";
import Home from "./home.jpg";
import "./htmlScore.css";
import { Link } from 'react-router-dom';

class HtmlScore extends React.Component {
  render() {
    const { match } = this.props;
    const score = match.params.score || 0;

    return (
      <div>
        <Link to="/TotalScore">
          <img src={Home} className="HomePage" alt="Home" />
        </Link>

        <div className="ScoreContainer">
          <img src={Person} className="ProfileImg" alt="Person" />

          <label className="Score">Score: {score}</label>
        </div>
      </div>
    );
  }
}

export default HtmlScore;
