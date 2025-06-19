import { useState } from "react";

export default function TaskRow({ task, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.todo);
  const [taskCompleted, setTaskCompleted] = useState(task.completed);

  return (
    <tr className="hover:bg-slate-50">
      {/* Task Id */}
      <td className="px-3 py-1.5 border-b border-slate-200">
        <p className="text-sm text-slate-500">{task.id}</p>
      </td>
      {/* Task Name */}
      <td className="px-3 py-1.5 border-b border-slate-200">
        <div className="text-sm text-slate-500">
          {isEditing ? (
            <input
              key={"task" + task.id}
              id={"task" + task.id}
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              className="w-full bg-white h-8 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            />
          ) : (
            taskName
          )}
        </div>
      </td>
      {/* Task Status */}
      <td className="px-3 py-1.5 border-b border-slate-200">
        <div className="text-sm text-slate-500">
          {isEditing ? (
            <>
              <div className="relative">
                <select
                  key={"status" + task.id}
                  id={"status" + task.id}
                  value={taskCompleted ? "complete" : "pending"}
                  onChange={(e) => {
                    setTaskCompleted(e.target.value === "complete");
                  }}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                >
                  <option value="pending">Pending</option>
                  <option value="complete">Complete</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="h-5 w-5 ml-1 absolute top-2 right-2.5 text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </>
          ) : taskCompleted ? (
            "Complete"
          ) : (
            "Pending"
          )}
        </div>
      </td>
      {/* Action */}
      <td className="px-3 py-1.5 border-b border-slate-200">
        <div className="text-sm text-slate-500">
          {isEditing ? (
            <>
              <button
                type="button"
                disabled={taskName.trim().length === 0}
                onClick={() => {
                  setIsEditing(false);
                  onChangeTask({
                    ...task,
                    todo: taskName,
                    completed: taskCompleted,
                  });
                }}
                className="py-1 px-2.5 text-center text-sm text-slate-500 font-semibold hover:underline hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Save
              </button>
              <div className="hidden sm:inline">|</div>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setTaskName(task.todo);
                  setTaskCompleted(task.completed);
                }}
                className="py-1 px-2.5 text-center text-sm text-slate-500 font-semibold hover:underline hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="py-1 px-2.5 text-center text-sm text-slate-500 font-semibold hover:underline hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Edit
              </button>
              <div className="hidden sm:inline">|</div>
              <button
                type="button"
                onClick={() => onDeleteTask(task.id)}
                className="py-1 px-2.5 text-center text-sm text-slate-500 font-semibold hover:underline hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
