import React from "react";

export const TodoItem = ({ id, todo }) => {
  return (
    <li key={id} className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo}</span>
      <button className="btn btn-danger">Delete</button>
    </li>
  );
};
