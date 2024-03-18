import React from "react";
import QuizeApp from "./quizefiles/quizehome";
import HtmlQuize from "./quizefiles/quizesQuestions/htmlQuize";
import { Route, Routes} from 'react-router-dom';
import HtmlScore from "./quizefiles/quizesQuestions/quizeScores/htmlScore";
import CssQuize from "./quizefiles/quizesQuestions/quizeScores/cssQuize";
import JsQuize from "./quizefiles/quizesQuestions/quizeScores/jsQuize";
import ReactQuize from "./quizefiles/quizesQuestions/quizeScores/react";
import UiQuize from "./quizefiles/quizesQuestions/quizeScores/ui";



class Home extends React.Component{
   render(){
      return<div>
          <Routes>

<Route path="/" element={<QuizeApp/>}/>
<Route path="htmlquize" element={<HtmlQuize/>}/>
<Route path="score" element={<HtmlScore/>}/>
<Route path="TotalScore" element={<QuizeApp/>}/>

<Route path="HOME" element={<QuizeApp/>}/>
<Route path="cssquize" element={<CssQuize/>}/>
<Route path="jsquize" element={<JsQuize/>}/>
<Route path="reactquize" element={<ReactQuize/>}/>
<Route path="uiquize" element={<UiQuize/>}/>








</Routes>
       
      </div>
   }
}

export default Home;