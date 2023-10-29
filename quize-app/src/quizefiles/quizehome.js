import React from "react";
import "./quizehome.css";
import Logo from "./quizeappimg/logo.png";
import Html from "./quizeappimg/html.png";
import Css from "./quizeappimg/css.png";
import Js from "./quizeappimg/js.png";
import ReactJs from "./quizeappimg/react.png";
import UI from "./quizeappimg/Ui.png";
import { Link } from 'react-router-dom';

class QuizeApp extends React.Component{

   render(){

      return<div className="quizeAppContainer">
         <div className="Logo">
            <img src={Logo} className="LogoImage" alt="Not Visible"/>
         </div>
         <p className="IntroHeading">
            Choose from categories below & see how many questions you can answer correctly out 5 questions!
         </p>

         <div className="QuizeOptions">
         <Link to ='/htmlquize'>
            <div className="HtmlOption">
               <img className="QuizeImageRead" src={Html} alt="Not Visible"/>
               <span>html quize</span>
            </div>
            </Link>
            <div className="CssOption">
                <img  className="QuizeImage" src={Css} alt="Not Visible"/>
                <span>css quize</span>
                </div>
            <div className="JavaScriptOption">
            <img className="QuizeImage"  src={Js} alt="Not Visible"/>
            <span>JS quize</span>
            <span></span>
            </div>
            <div className="ReactOption">
            <img className="QuizeImageRead" src={ReactJs} alt="Not Visible"/>
            <span>react quize</span>
            </div>
            <div className="UiOption">
            <img className="QuizeImage" src={UI} alt="Not Visible"/>
            <span>Ui quize</span>
            </div>
         </div>
       
       <button className="QuizeStart">Start Quize</button>
      </div>
   }

}

export default QuizeApp;