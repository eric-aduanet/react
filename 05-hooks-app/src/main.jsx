import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";
// import { SimpleForm } from "./02-use-effect/SimpleForm";
// import { FormWithCustomHooks } from "./02-use-effect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-use-ref/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemorizeHook } from "./06-memos/MemorizeHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import { CounterWithCustomHook } from "./01-use-state/CounterWithCustomHook";
// import { CounterApp } from "./01-use-state/CounterApp";
// import { HooksApp } from "./HooksApp";
// import "./08-useReducer/intro-reducer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
