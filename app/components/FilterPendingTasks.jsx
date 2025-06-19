export default function FilterPendingTasks({
  pendingOnly,
  onPendingOnlyChange,
}) {
  return (
    <>
      <label className="text-sm text-slate-500">
        <input
          type="checkbox"
          id="cbFilterPendingTasks"
          checked={pendingOnly}
          onChange={(e) => onPendingOnlyChange(e.target.checked)}
        />{" "}
        Only show pending tasks
      </label>
    </>
  );
}
