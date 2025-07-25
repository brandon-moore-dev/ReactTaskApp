import React from "react";
import { useState } from "react";

// Add Task component (text input and button)
export default function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTaskName("");
    onAddTask(taskName);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="txtAddTask"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-4/5 sm:w-auto bg-white h-8 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          placeholder="Enter task..."
        />
        <button
          id="btnAddTask"
          type="submit"
          disabled={taskName.trim().length === 0}
          className="flex-none sm:flex-wrap ml-2 rounded-md bg-slate-800 h-8 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:cursor-pointer focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Add Task
        </button>
      </form>
    </>
  );
}
