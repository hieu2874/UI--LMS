import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

function Course({ query = "", onSelectCourse, favorites = {}, toggleFavorite = () => {} }) {
  // luôn đảm bảo query là string
  const search = String(query).toLowerCase();

  const filteredCourses = courses.filter((course) => {
    const title = String(course?.title || "").toLowerCase();
    const description = String(course?.description || "").toLowerCase();
    const author = String(course?.author || "").toLowerCase();

    return (
      title.includes(search) ||
      description.includes(search) ||
      author.includes(search)
    );
  });

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
                <CourseCard
                  {...course}
                  onClick={() => onSelectCourse?.(course)}
                  isFavorite={favorites[`course-${course.id}`] || false}
                  toggleFavorite={() => toggleFavorite(course.id, "course")}
                />
              </SwiperSlide>
            ))
          ) : (
            <p>Không tìm thấy khóa học</p>
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Course;
