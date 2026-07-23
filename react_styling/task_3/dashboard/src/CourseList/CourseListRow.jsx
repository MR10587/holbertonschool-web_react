function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  const cellClass = "border border-gray-400 px-2 py-2 text-left";

  if (isHeader && textSecondCell === null) {
    return (
      <tr className="bg-table-header/66">
        <th className={`${cellClass} text-center`} colSpan="2">
          {textFirstCell}
        </th>
      </tr>
    );
  }

  if (isHeader) {
    return (
      <tr className="bg-table-header/66">
        <th className={`${cellClass} text-black`}>{textFirstCell}</th>
        <th className={`${cellClass} text-black`}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className="bg-table-rows/45">
      <td className={cellClass}>{textFirstCell}</td>
      <td className={cellClass}>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
