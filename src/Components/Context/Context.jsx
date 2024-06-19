import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    // New Chat
    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }
    
    // for typing effect
    const delayPara = (index,nextword) => {
        setTimeout(function (){
            setResultData(prev=>prev+nextword);
        },75*index)
    }

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    // const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true)
        setRecentPrompt(input)
        const response =  await run(input);
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i< responseArray.length; i++) {
          if (i===0 || i%2 !==1) {
            newResponse += responseArray[i];
          }
          else{
            newResponse +="<b>"+responseArray[i]+"</b>"
          }
        }
        let newResponse2 = newResponse.split('*').join('</br>');
        // setResultData(newResponse2)
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextword = newResponseArray[i];
            delayPara(i,nextword+ " ");            
        }

        setLoading(false)
        setInput("")        
    }

    const contextValue = {
        onSent,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        // prevPrompts,
        // setPrevPrompts,
        showResult,
        loading,
        resultData,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider