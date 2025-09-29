  import React, { useEffect, useRef } from "react";
  const Modal = ({ isVisible, onClose, course, favoritesCount }) => {
    const modalRef = useRef(null); 
    const handleClickOutside = (Event) => {
      if (!modalRef.current) return;

      if (EventTarget instanceof Node && !modalRef.current.contains(EventTarget)) {
        onClose();
      }
    };
    useEffect(() => {      
      if (isVisible) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isVisible]);

    if (!isVisible || !course) return null;
    return (
      <div className="modal-backdrop">
        <div className="modal-content"  ref={modalRef}>
          <button onClick={onClose}>X</button>
          <div className="modal-card">
            <h2>{course.title}</h2>
            <div className="modal-author">
              <img src="./image/left7.png" alt="{course.title}" />
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
    )
  }
  export default Modal;