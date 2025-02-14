import { useGetTodosQuery } from "./store/api";

export const TodoApp = () => {
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const algo = useGetTodosQuery();
  console.log(algo);
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <h4>isLoading...</h4>
      <pre>...</pre>
      <ul>
        {/* {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))} */}
      </ul>
      <button>Next Todo</button>
    </>
  );
};
