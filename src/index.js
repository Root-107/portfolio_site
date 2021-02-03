import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContext from "context/AppContext"

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
)