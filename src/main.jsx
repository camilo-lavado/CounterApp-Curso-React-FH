import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import "./style.css";


ReactDOM.createRoot( document.getElementById("root") ).render(
    <React.StrictMode>
        <CounterApp value='20'/>
        
    </React.StrictMode>
    );

    