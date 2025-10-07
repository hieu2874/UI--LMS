// CourseDetail.jsx
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => String(c.id) === id);

  if (!course) {
    return <h2>Không tìm thấy khóa học</h2>;
  }
  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p><strong>Tác giả:</strong> {course.author}</p>
      <p>{course.description}</p>
      <p><strong>Ngày:</strong> {course.date}</p>
      <p><strong>Thời gian:</strong> {course.time}</p>
      <img src={course.image} alt={course.title} />
    </div>
  );
}

export default CourseDetail;
