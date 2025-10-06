import React, { useEffect, useRef } from "react";
import { useLmsContext } from "./LmsContext";

const Modal = () => {
  const {
    selectedItem: course,
    setSelectedItem: setCourse,
    favoritesCount,
  } = useLmsContext();

  const isVisible = !!course;
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setCourse(null);
      }
    };

    if (isVisible) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible, setCourse]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setCourse(null);
    };

    if (isVisible) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isVisible, setCourse]);

  if (!isVisible || !course) return null;


  return (
    <div className="modal-backdrop">
      <div className="modal-content" ref={modalRef}>
        <button onClick={() => setCourse(null)}>x</button>
        <div className="modal-card">
          <h2>{course.title}</h2>
          <div className="modal-author">
            <img src="./image/left7.png" alt={course.title} />
          </div>
          <p><strong>Author:</strong>{course.author}</p>
          <p>{course.description}</p>
          <p><strong>Date:</strong> {course.date}</p>
          <p><strong>Time:</strong> {course.time}</p>
        </div>
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>
          ❤️ Tổng số lượt thích: {favoritesCount}
        </div>
      </div>
    </div>
  );
};
export default Modal;