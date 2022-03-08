import React, { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoTable from "../components/TodoTable";

const TodoListContainer = () => {
  const [todoList, setTodoList] = useState({
    todos: {
      key: "todos",
      tickets: [],
    },
    inProgress: {
      key: "inProgress",
      tickets: [],
    },
    done: {
      key: "done",
      tickets: [],
    },
    needReview: {
      key: "needRreview",
      tickets: [],
    },
  });

  const [text, setText] = useState("");

  const addTodo = (newTodo) => {
    setTodoList({
      ...todoList,
      todos: {
        ...todoList.todos,
        tickets: [...todoList.todos.tickets, newTodo],
      },
    });
  };

  const changeKey = (keyCurent, id, newKey) => {
    const cloneTicket = todoList[keyCurent].tickets.filter(
      (p) => p.id === id
    )[0];

    const newTodo = [...todoList[keyCurent].tickets.filter((p) => p.id !== id)];

    setTodoList({
      ...todoList,
      [newKey]: {
        ...todoList[newKey],
        tickets: [...todoList[newKey].tickets, { ...cloneTicket, key: newKey }],
      },
      [keyCurent]: { ...todoList[keyCurent], tickets: newTodo },
    });
  };

  const handleEditTodo = (updatedTodo) => {
    const newTodo = todoList[updatedTodo.key].tickets.map((p) => {
      if (p.id === updatedTodo.id) {
        return updatedTodo;
      }

      return p;
    });

    setTodoList({
      ...todoList,
      [updatedTodo.key]: { ...todoList[updatedTodo.key], tickets: newTodo },
    });
  };

  const deleteTodo = (key, id) => {
    const checkDelete = window.confirm("Bạn đã hoàn thành công việc này?");
    if (!checkDelete) return;
    const newTodo = [...todoList[key].tickets.filter((p) => p.id !== id)];
    setTodoList({ ...todoList, [key]: { ...todoList[key], tickets: newTodo } });
  };

  return (
    <div className="w-full max-w-[calc(100%-32px)] h-[500px] bg-[#222] overflow-auto">
      <TodoInput setText={setText} text={text} addTodo={addTodo} />
      <TodoTable
        changeKey={changeKey}
        todoList={todoList}
        setTodoList={setTodoList}
        deleteTodo={deleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default TodoListContainer;
