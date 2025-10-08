
import Banner from "./banner";
import Course from "./course";
import CourseDetail from "./CourseDetail";
import CourseList from "./CourseList";

function CoursePage() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Danh sách khóa học</h2>
      <CourseList/>
    </div>
  );
}

export default CoursePage;
