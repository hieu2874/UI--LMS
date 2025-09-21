
import CourseItem from "./CourseItem";

function Course() {
  return (
    <section className="course">
      <div className="course-block">
        {courses.map((item) => (
          <CourseItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Course;
