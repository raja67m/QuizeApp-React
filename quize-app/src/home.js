import React from "react";
import QuizeApp from "./quizefiles/quizehome";
import HtmlQuize from "./quizefiles/quizesQuestions/htmlQuize";
import { Route, Routes} from 'react-router-dom';
class Home extends React.Component{
   render(){
      return<div>
          <Routes>

<Route path="/" element={<QuizeApp/>}/>
<Route path="htmlquize" element={<HtmlQuize/>}/>


</Routes>
       
      </div>
   }
}

export default Home;