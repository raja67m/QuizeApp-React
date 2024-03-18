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
      
            <div className="HtmlOption">
            <Link to ='/htmlquize'>
               <img className="QuizeImage" src={Html} alt="Not Visible"/>
            </Link>
               <span>html quize</span>
            </div>
            

           
            <div className="CssOption">
            <Link to ='/cssquize'>
                <img  className="QuizeImage" src={Css} alt="Not Visible"/>
            </Link>

                <span>css quize</span>
                </div>
           


            <div className="JavaScriptOption">
            <Link to ='/jsquize'>
            <img className="QuizeImage"  src={Js} alt="Not Visible"/>
            </Link>
            <span>JS quize</span>
           </div>


            <div className="ReactOption">
            <Link to ='/reactquize'>
            <img className="QuizeImage" src={ReactJs} alt="Not Visible"/>
            </Link>
            <span>reactquize</span>
            </div>



            <div className="UiOption">
            <Link to ='/uiquize'>
            <img className="QuizeImage" src={UI} alt="Not Visible"/>
            </Link>
            <span>Ui quize</span>
            </div>
         </div>
      
      </div>
   }

}                                                   
export default QuizeApp;        