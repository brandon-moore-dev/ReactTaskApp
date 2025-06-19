import { useState } from "react";
import { PageCountContext, CurrentPageContext } from "../context/Context.js";

import AddTask from "../components/AddTask";
import FilterPendingTasks from "../components/FilterPendingTasks";
import SearchTasks from "../components/SearchTasks";
import TaskTable from "../components/TaskTable";
import PageControl from "../components/PageControl";

export async function clientLoader({ params }) {
  const tasks = await fetch("https://dummyjson.com/todos/?delay=1000&limit=124")
    .then((res) => res.json())
    .catch((error) => console.error(error));
  return tasks;
}

export function HydrateFallback() {
  return <p>Loading Tasks...</p>;
}

export default function Tasks({ loaderData }) {
  const [tasks, setTasks] = useState(loaderData.todos);
  const [pendingOnly, setPendingOnly] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ROWS_PER_PAGE = 10;

  let currentTasks = tasks;

  if (pendingOnly) {
    currentTasks = currentTasks.filter((t) => !t.completed);
  }

  if (filterText.trim().length !== 0) {
    currentTasks = currentTasks.filter(
      (t) => t.todo.toLowerCase().indexOf(filterText.toLowerCase()) > -1
    );
  }

  const pageCount = Math.ceil(currentTasks.length / ROWS_PER_PAGE);

  currentTasks = currentTasks.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    (currentPage - 1) * ROWS_PER_PAGE + ROWS_PER_PAGE
  );

  let nextId =
    tasks.reduce(
      (prev, current) => (prev.id > current.id ? prev.id : current.id),
      0
    ) + 1;

  function handleChangePendingOnly(nextPendingOnly) {
    setPendingOnly(nextPendingOnly);
    setCurrentPage(1);
  }

  function handleChangeFilterText(nextFilterText) {
    setFilterText(nextFilterText);
    setCurrentPage(1);
  }

  function handleAddTask(taskName) {
    if (taskName.trim().length !== 0) {
      setTasks([
        ...tasks,
        {
          id: nextId++,
          todo: taskName,
          completed: false,
        },
      ]);
    }
  }

  function handleChangeTask(nextTask) {
    setTasks(
      tasks.map((t) => {
        if (t.id === nextTask.id && nextTask.todo.trim().length !== 0) {
          return nextTask;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  function handlePageChange(e) {
    if (e.target.value === "back") {
      setCurrentPage(parseInt(currentPage) - 1);
    } else if (e.target.value === "next") {
      setCurrentPage(parseInt(currentPage) + 1);
    } else {
      setCurrentPage(parseInt(e.target.value));
    }
  }

  return (
    <>
      <div className="z-0 flex justify-center mt-4">
        <div className="w-full sm:w-1/2">
          <div className="flex flex-row justify-center sm:justify-start mb-4">
            <h3 className="text-2xl font-semibold text-slate-800">Task List</h3>
          </div>
          <div className="sm:flex sm:flex-row sm:justify-between sm:items-end sm:flex-wrap mb-4">
            <div className="flex mb-4 sm:mb-auto sm:flex-wrap">
              <AddTask onAddTask={handleAddTask} />
            </div>
            <div className="relative mb-4 sm:mb-auto">
              <SearchTasks onFilterTextChange={handleChangeFilterText} />
            </div>
            <div className="flex justify-center">
              <FilterPendingTasks
                pendingOnly={pendingOnly}
                onPendingOnlyChange={handleChangePendingOnly}
              />
            </div>
          </div>
          <div className="justify-center sm:mb-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <TaskTable
              tasks={currentTasks}
              currentPage={currentPage}
              pageCount={pageCount}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
              onPageChange={handlePageChange}
            />
            <div className="flex flex-row justify-center overflow-hidden">
              <div className="flex">
                <PageCountContext value={pageCount}>
                  <CurrentPageContext value={currentPage}>
                    <PageControl
                      onPageChange={handlePageChange}
                    />
                  </CurrentPageContext>
                </PageCountContext>
              </div>
              <div className="text-nowrap ml-4 py-2 text-sm text-slate-500 font-semibold">
                {pageCount > 0
                  ? `Page ${currentPage} of ${pageCount}`
                  : "No data"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
