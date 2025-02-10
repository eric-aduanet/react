import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Eric",
    email: "ericaduanet@gmail.com",
  });
  const { username, email } = formState;

  const onInputChanged = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
      <h1>Formulario simple</h1>
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
      {username === "Eric" && <Message />}
    </>
  );
};
