import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

function Course() {
  return (
    <section className="course">
      <div className="course-block">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3.5}
          pagination={{ clickable: true }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Course;
