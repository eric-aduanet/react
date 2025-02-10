import React, { useCallback, useState } from "react";
import { useCounter } from "../hooks";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [state, setState] = useState(10);

  const incrementFather = useCallback((c) => {
    setState((value) => value + c);
  }, []);

  //   const increment = () => {
  //     setState(state + 1);
  //   };

  return (
    <>
      <h1>useCallback hook: {state}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
