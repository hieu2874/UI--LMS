import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CourseCard from "./CourseCard";
import { useLmsContext } from "./LmsContext";

function CourseList() {
  const { query, favorites, toggleFavorite, setSelectedItem } = useLmsContext();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3001/courses"); // đổi port cho đúng với json-server của bạn
        if (!res.ok) throw new Error("Không thể tải dữ liệu khóa học");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError(err.message || "Đã xảy ra lỗi");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Luôn đảm bảo query là string và chuyển sang lowercase
  const search = String(query).toLowerCase();

  // Lọc khóa học theo query
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

  if (loading) return <p>⏳ Đang tải khóa học...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

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
                  onClick={() => setSelectedItem(course)}
                  isFavorite={favorites[`course-${course.id}`]}
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

export default CourseList;
