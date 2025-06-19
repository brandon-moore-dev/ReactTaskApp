import { useContext } from "react";
import { PageCountContext, CurrentPageContext } from "../context/Context.js";

export default function PageDirection({ type, onPageChange }) {
  const pageCount = useContext(PageCountContext);
  const currentPage = useContext(CurrentPageContext);

  const buttonClasses =
    type === "back"
      ? "rounded-md rounded-r-none border border-r-0 border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      : "rounded-md rounded-l-none border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 hover:cursor-pointer focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

  const disabled =
    type === "back" ? currentPage === 1 : currentPage === pageCount;

  const path =
    type === "back"
      ? "M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
      : "M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z";

  return (
    <button
      className={buttonClasses}
      type="button"
      value={type}
      disabled={disabled}
      onClick={onPageChange}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="pointer-events-none w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d={path}
          clipRule="evenodd"
          className="pointer-events-none"
        />
      </svg>
    </button>
  );
}
