import React from "react";
import { useContext } from "react";
import PageDirection from "./PageDirection";
import { PageCountContext, CurrentPageContext } from "../context/Context.js";

// Page Control component (page numbers)
export default function PageControl({ onPageChange }) {
  const pageCount = useContext(PageCountContext);
  const currentPage = useContext(CurrentPageContext);

  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(
      <button
        key={i}
        className={
          (currentPage === i
            ? "text-white bg-slate-800 border-slate-800 hover:bg-slate-800 hover:text-white"
            : "") +
          " hidden sm:inline-flex rounded-none border border-slate-300 py-2 px-3 text-center text-sm shadow-sm text-slate-600 hover:bg-slate-50 focus:text-white focus:bg-slate-800 focus:border-slate-800 cursor-pointer"
        }
        type="button"
        value={i}
        onClick={(e) => {
          onPageChange(e);
        }}
      >
        {i}
      </button>
    );
  }

  return pageCount ? (
    <>
      <PageDirection key="back" type="back" onPageChange={onPageChange} />
      {pageNumbers}
      <PageDirection key="next" type="next" onPageChange={onPageChange} />
    </>
  ) : (
    ""
  );
}
