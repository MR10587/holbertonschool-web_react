import CourseListRow from "./CourseListRow";
import WithLogging from "../HOC/WithLogging";

function CourseList({ courses = [] }) {
  return (
    <div className="my-10 flex justify-center">
      <table
        id="CourseList"
        className="w-[calc(100%-40px)] border-collapse text-[8px] text-black"
      >
        <thead>
          {courses.length === 0 ? (
            <CourseListRow isHeader textFirstCell="No course available yet" />
          ) : (
            <>
              <CourseListRow isHeader textFirstCell="Available courses" />

              <CourseListRow
                isHeader
                textFirstCell="Course name"
                textSecondCell="Credit"
              />
            </>
          )}
        </thead>

        {courses.length > 0 && (
          <tbody>
            {courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default WithLogging(CourseList);
