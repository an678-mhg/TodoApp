import React from "react";
import { v4 } from "uuid";
import Button from "./Button";

const TodoInput = ({ addTodo, text, setText }) => {
  const handleAddTodo = (newTodo) => {
    if (typeof addTodo !== "function") return;
    if (!text.trim()) return alert("Please enter content for ticket!");

    addTodo(newTodo);
    setText("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo({
          id: v4(),
          text: text,
          key: "todos",
          createdAt: Date.now(),
          option: ["todos", "done", "needReview", "inProgress"],
        });
      }}
      className="flex items-center"
    >
      <input
        className="p-2 w-full outline-none"
        type="text"
        placeholder="Nhập....."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button
        onClick={() => 0}
        className="py-3 px-3 text-white text-[20px]"
        text={"Add"}
      />
    </form>
  );
};

export default TodoInput;
