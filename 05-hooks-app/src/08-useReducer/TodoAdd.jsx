import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChanged } = useForm({ description: "" });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime() + 10,
      done: false,
      description: description,
    };
    onNewTodo && onNewTodo(newTodo);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Que hay que hacer?"
        className="form-control"
        onInput={onInputChanged}
      />
      <button className="btn btn-primary mt-1">Submit</button>
    </form>
  );
};
