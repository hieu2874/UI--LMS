import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";


function Course({query, onSelectCourse}) {
  const filteredCourses = courses.filter((course) =>
   course.title.toLowerCase().includes(query.toLowerCase()) ||
   course.description.toLowerCase().includes(query.toLowerCase()) ||
   course.author.toLowerCase().includes(query.toLowerCase())
);
  return (
    <section className="course">
      <div className="course-block">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3.5}
          pagination={{ clickable: true }}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard {...course} onClick={() => onSelectCourse(course)} />
              </SwiperSlide>
            ))
          ) : (
            <p>khong tim thay khoa hoc  </p>
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Course;
