import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { PokemonApp } from "./PokemonApp.jsx";
import { TodoApp } from "./TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </StrictMode>
);
