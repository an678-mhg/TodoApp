import React from "react";
import TodoListContainer from "./containers/TodoListContainer";

const App = () => {
  return (
    <div className="bg-black h-[100vh] flex items-center justify-center flex-col">
      <h1 className="text-[30px] text-white font-[600] mb-6">
        Todo App
      </h1>
      <TodoListContainer />
    </div>
  );
};

export default App;
