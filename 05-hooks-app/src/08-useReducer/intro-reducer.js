const initialState = [
  {
    id: 1,
    todo: "Recolectar las piedras del infinito",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] Add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

console.log(todos);

let newTodo = {
  id: 2,
  todo: "Recolectar la piedra del alma",
  done: false,
};

const addTodoAction = {
  type: "[TODO] Add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
