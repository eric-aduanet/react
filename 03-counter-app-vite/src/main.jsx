import React from "react";
import ReactDOM from "react-dom/client";
// import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
// import { ArrowFunc } from "./HelloWorldApp";
// import { App } from "./HelloWorldApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp />:w
     */}
    {/* <ArrowFunc /> */}
    <FirstApp title="Hola" subtitle="Subtitle" name="Eric" />
  </React.StrictMode>
);
