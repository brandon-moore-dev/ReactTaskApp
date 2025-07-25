import React from "react";
import TaskRow from "./TaskRow";

// Task Table component
export default function TaskTable({ tasks, onChangeTask, onDeleteTask }) {
  const rows = [];
  tasks.forEach((task) => {
    rows.push(
      <TaskRow
        task={task}
        key={task.id}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  });

  function handleChangeTask(task) {
    onChangeTask(task);
  }

  function handleDeleteTask(taskId) {
    onDeleteTask(taskId);
  }

  return (
    <>
      <table className="min-w-full text-left table-auto sm:table-fixed">
        <thead>
          <tr>
            <th className="p-3 border-b border-slate-300 bg-slate-100">
              <p className="text-sm font-semibold leading-none text-slate-500">
                Id
              </p>
            </th>
            <th className="p-3 border-b border-slate-300 bg-slate-100 sm:w-3/5">
              <p className="text-sm font-semibold leading-none text-slate-500">
                Description
              </p>
            </th>
            <th className="p-3 border-b border-slate-300 bg-slate-100">
              <p className="text-sm font-semibold leading-none text-slate-500">
                Status
              </p>
            </th>
            <th className="p-3 pl-6 border-b border-slate-300 bg-slate-100">
              <p className="text-sm font-semibold leading-none text-slate-500">
                Action
              </p>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
