import React, { useContext } from "react";
import "./Main.css";
import logo_icon from "../assets/chatgptlogo.png";
import sendmsg_icon from "../assets/sendmsg.png";
import user_icon from '../assets/user.png'
import { Context } from "./Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <div className="empty"></div>
        <p>ChatGpt</p>
        <button className='signup-btn'>Sign up</button>
      </div>
      <div className="main-container">
        {!showResult?<div className="greet">
          <img src={logo_icon} alt="" />
          <p>How can I help you today?</p>
          <div className="input">
            <div className="cards">
              <div className="card card1">
                <p className="p1">Design a programming game</p>
                <p className="p2">tech basics in a fun way</p>
              </div>
              <div className="card card2">
                <p className="p1">Tell me a fun fact</p>
                <p className="p2">about the Roman Empire</p>
              </div>
              <div className="card card3">
                <p className="p1">Quiz me on world capitals</p>
                <p className="p2">to enhance my geography skills</p>
              </div>
              <div className="card card4">
                <p className="p1">Write a text</p>
                <p className="p2">inviting my neighbors to barbecue</p>
              </div>
            </div>
          </div>
        </div>:
        <div className="result">
          <div className="result-title">
            <img src={user_icon} alt="" />
            <div className="result1">
            <p className="result_p1">You</p>
            <p className="result_p2">{recentPrompt}</p>
            </div>
            
          </div>
          <div className="result-data">
            <img src={logo_icon} alt="" />
            <div className="result1">
            <p className="result_p1">ChatGPT</p>
            {loading?<div className="loader">
              <hr />
              <hr />
              <hr />
            </div>:
            <p className="result_p2" dangerouslySetInnerHTML={{__html:resultData}}></p>}
            </div>
          </div>
        </div>}
        <div className="input-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="message-chatgpt"
            placeholder="Message ChatGpt"
          />
          <img onClick={() => onSent()} src={sendmsg_icon} alt="" />
        </div>
      </div>
      <div className="important-msg">
        <p>ChatGPT can make mistakes. Check important info.</p>
      </div>
    </div>
  );
};

export default Main;
