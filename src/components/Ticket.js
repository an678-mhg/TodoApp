import React, { useState, useRef } from "react";
import Button from "./Button";

const Ticket = ({
  data,
  changeKey,
  keyCurrent,
  deleteTodo,
  handleEditTodo,
}) => {
  const [edit, setEdit] = useState(false);
  const [textarea, setTextarea] = useState(data.text);

  const textAreaRef = useRef();

  const handleUpdate = (e, updatedTodo) => {
    e.preventDefault();
    if (typeof handleEditTodo !== "function") return;
    handleEditTodo(updatedTodo);
    setEdit(false);
  };

  return (
    <div className="text-white bg-[#333] p-2 mr-3 mb-3 transition-all">
      <p className="py-1 px-3 mb-2 bg-[#222]">id: {data.id}</p>
      {!edit ? (
        <p className="py-1 px-3 mb-2 bg-[#222]">text: {data.text}</p>
      ) : (
        <form
          className="flex items-center"
          onSubmit={(e) =>
            handleUpdate(e, {
              ...data,
              text: textarea,
              updatedAt: Date.now(),
            })
          }
        >
          <textarea
            ref={textAreaRef}
            className="w-full py-1 px-3 mb-2 bg-[#fff] text-black outline-none"
            rows={1}
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
          <Button
            className={"py-2 px-3 mb-2"}
            text="Update"
            onClick={() => 0}
          />
        </form>
      )}
      <p className="py-1 px-3 mb-2 bg-[#222]">
        {data.updatedAt
          ? `updatedAt: ${data.updatedAt}`
          : `createdAt: ${data.createdAt}`}
      </p>
      <p className="py-1 px-3 mb-2 bg-[#222]">key: {data.key}</p>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {data.option
          .filter((p) => p !== data.key)
          .map((p) => (
            <Button
              onClick={() => changeKey(keyCurrent, data.id, p)}
              text={p}
              key={p}
            />
          ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <Button onClick={() => deleteTodo(data.key, data.id)} text="Delete" />
        <Button onClick={() => setEdit(!edit)} text="Edit" />
      </div>
    </div>
  );
};

export default Ticket;
