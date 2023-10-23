import React from "react";
import "./quizehome.css";
import Logo from "./quizeappimg/logo.png";
import Html from "./quizeappimg/html.png";
import Css from "./quizeappimg/css.png";
import Js from "./quizeappimg/js.png";
import ReactJs from "./quizeappimg/react.png";
import UI from "./quizeappimg/Ui.png";


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
               <img className="QuizeImage" src={Html} alt="Not Visible"/>
            </div>
            <div className="CssOption">
                <img  className="QuizeImage" src={Html} alt="Not Visible"/>
                </div>
            <div className="JavaScriptOption">
            <img className="QuizeImage"  src={Html} alt="Not Visible"/>
            </div>
            <div className="ReactOption">
            <img className="QuizeImage" src={Html} alt="Not Visible"/>
            </div>
            <div className="UiOption">
            <img className="QuizeImage" src={Html} alt="Not Visible"/>
            </div>
         </div>
       
       <button className="QuizeStart">Start Quize</button>
      </div>
   }

}

export default QuizeApp;