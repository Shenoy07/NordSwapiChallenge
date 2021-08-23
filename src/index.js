import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CommonContextProvider from "./context/CommonContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CommonContextProvider>
      <App />
    </CommonContextProvider>
  </StrictMode>,
  rootElement
);
