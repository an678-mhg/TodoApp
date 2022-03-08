import Ticket from "./Ticket";

function TodoTable({ todoList, changeKey, deleteTodo, handleEditTodo }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 p-2 bg-[#222] text-white mt-4 overflow-auto gap-3">
      <div className="border p-2">
        <h1 className="text-white mb-4">TODO</h1>
        <div>
          {todoList?.todos?.tickets.map((p) => (
            <Ticket
              keyCurrent="todos"
              changeKey={changeKey}
              key={p.id}
              data={p}
              deleteTodo={deleteTodo}
              handleEditTodo={handleEditTodo}
            />
          ))}
        </div>
      </div>
      <div className="border p-2">
        <h1 className="text-white mb-4">IN PROGRESS</h1>
        <div>
          {todoList?.inProgress?.tickets.map((p) => (
            <Ticket
              deleteTodo={deleteTodo}
              keyCurrent="inProgress"
              changeKey={changeKey}
              key={p.id}
              data={p}
              handleEditTodo={handleEditTodo}
            />
          ))}
        </div>
      </div>
      <div className="border p-2">
        <h1 className="text-white mb-4">DONE</h1>
        <div>
          {todoList?.done?.tickets.map((p) => (
            <Ticket
              deleteTodo={deleteTodo}
              keyCurrent="done"
              changeKey={changeKey}
              key={p.id}
              data={p}
              handleEditTodo={handleEditTodo}
            />
          ))}
        </div>
      </div>
      <div className="border p-2">
        <h1 className="text-white mb-4">NEED REVIEW</h1>
        <div>
          {todoList?.needReview?.tickets.map((p) => (
            <Ticket
              deleteTodo={deleteTodo}
              keyCurrent="needReview"
              changeKey={changeKey}
              key={p.id}
              data={p}
              handleEditTodo={handleEditTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoTable;
