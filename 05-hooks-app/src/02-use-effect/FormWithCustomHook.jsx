import { useState, useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHooks = () => {
  const { formState, onInputChanged, onReset } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formState;

  useEffect(() => {
    // console.log("Effect");
  }, []);
  useEffect(() => {
    // console.log("email changed");
  }, [email]);
  useEffect(() => {
    // console.log("Form changed");
  }, [formState]);
  return (
    <>
      <h1>Formulario con custom hooks</h1>
      <hr />
      <input
        type="text"
        placeholder="Username"
        className="form-control"
        name="username"
        value={username}
        onChange={onInputChanged}
      />
      <input
        type="email"
        placeholder="desarrollo@aduanet.net"
        className="form-control mt-2"
        name="email"
        value={email}
        onChange={onInputChanged}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control mt-2"
        name="password"
        value={password}
        onChange={onInputChanged}
      />
      {username === "Eric" && <Message />}
      <button className="btn btn-primary mt-2" onClick={onReset}>
        Reset
      </button>
    </>
  );
};
