import React from "react";
import QuizeApp from "./quizefiles/quizehome";
import HtmlQuize from "./quizefiles/quizesQuestions/htmlQuize";
import { Route, Routes} from 'react-router-dom';
import HtmlScore from "./quizefiles/quizesQuestions/quizeScores/htmlScore";
class Home extends React.Component{
   render(){
      return<div>
          <Routes>

<Route path="/" element={<QuizeApp/>}/>
<Route path="htmlquize" element={<HtmlQuize/>}/>
<Route path="score" element={<HtmlScore/>}/>
<Route path="TotalScore" element={<QuizeApp/>}/>

</Routes>
       
      </div>
   }
}

export default Home;