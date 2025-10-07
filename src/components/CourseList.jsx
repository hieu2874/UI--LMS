import React, { useCallback, useEffect, useState } from "react";
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
        const res = await fetch("http://localhost:3001/courses");
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

  const search = String(query || "").toLowerCase();

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

  const handleSelect = useCallback(
    (course) => setSelectedItem(course),
    [setSelectedItem]
  );

  const handleToggleFavorite = useCallback(
    (id) => toggleFavorite(id, "course"),
    [toggleFavorite]
  );

  if (loading) return <p>⏳ Đang tải khóa học...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  // 👉 Giới hạn 24 khóa học để có đúng 4 slide
  const displayedCourses = filteredCourses.slice(0, 24);

  // 👉 Chia thành 4 nhóm, mỗi nhóm 6 khóa học
  const chunkSize = 6;
  const groupedCourses = [];
  for (let i = 0; i < displayedCourses.length; i += chunkSize) {
    groupedCourses.push(displayedCourses.slice(i, i + chunkSize));
  }

  return (
    <section className="course">
      <div className="course-block">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
        >
          {groupedCourses.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="course-box">
                <h1 className="course-title">新着のライブ講義 </h1>
                <div className="course-slide">
                  {group.map((course, idx) => (
                    <CourseCard
                      key={`course-${course.id}-${idx}`}
                      {...course}
                      onClick={() => handleSelect(course)}
                      isFavorite={favorites?.[`course-${course.id}`] || false}
                      toggleFavorite={() =>
                      handleToggleFavorite(course.id, "course")
                      }
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </section>
  );
}

export default CourseList;
