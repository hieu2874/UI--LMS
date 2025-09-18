import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Course() {
  const courses = [
    { id: 1, author: "My Nguyen", desc: "サンプルカテゴリ内", title: "スポンジケーキを作る", time: "30分", date: "2025年7月18日", image: "/image/left6.png", status: "Finished", avatar: "/image/left7.png", progress: 30, },
    { id: 2, author: "Thanh Tu", desc: "サンプルカテゴリ内", title: "クッキーを作る", time: "30分", date: "2025年7月17日", image: "/image/left4.png", offer: "10% Offer", avatar: "/image/left7.png", progress: 20, },
    { id: 3, author: "Canh Loc", desc: "サンプルカテゴリ内", title: "模型を組み立てる", time: "20時間", date: "2025年7月16日", image: "/image/left5.png", status: "Finished", avatar: "/image/left7.png", progress: 10, },
    { id: 2, author: "Thanh Tu", desc: "サンプルカテゴリ内", title: "クッキーを作る", time: "30分", date: "2025年7月17日", image: "/image/left4.png", offer: "10% Offer", avatar: "/image/left7.png", progress: 30, },
    { id: 2, author: "Thanh Tu", desc: "サンプルカテゴリ内", title: "クッキーを作る", time: "30分", date: "2025年7月17日", image: "/image/left4.png", offer: "10% Offer", avatar: "/image/left7.png", progress: 0, },
    { id: 1, author: "My Nguyen", desc: "サンプルカテゴリ内", title: "スポンジケーキを作る", time: "30分", date: "2025年7月18日", image: "/image/left6.png", status: "Finished", avatar: "/image/left7.png", progress: 5, },
  ];

  return (
    <section className="course">
      <div className="course-block">
        <h2 className="course-heading"></h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3.5}
          pagination={{ clickable: true }}

        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  {course.status && (
                    <span className="course-badge finished">{course.status}</span>
                  )}
                  {course.offer && (
                    <span className="course-badge offer">{course.offer}</span>
                  )}
                </div>
                <div className="course-progress">
                  <div className="course-progress-bar">
                    <div
                      className="course-progress-dot"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                    <div className="course-avatar">
                      <img src={course.avatar} alt={course.author} className="author-avatar" />
                    </div>
                  </div>
                </div>

                <div className="course-info">
                  <div className="author-list">
                    <div className="author">
                      <span>{course.author}</span>
                    </div>
                    <h3>{course.title}</h3>
                    <p className="desc">サンプルカテゴリ内</p>
                  </div>
                  <div class="date-time">
                    <div class="time">
                      <img src="./image/icon1.png" alt="Clock Icon" />
                      <span>0時間30分</span>
                    </div>
                    <div class="date">
                      <img src="./image/icon2.png" alt="Calendar Icon" />
                      <span>2025年7月18日</span>
                    </div>
                  </div>

                </div>


              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    
      </div>
    </section>
  );
}
export default Course;