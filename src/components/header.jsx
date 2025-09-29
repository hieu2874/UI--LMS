import { Link } from "react-router-dom";
import { useState } from "react";
import { features } from "../data/features";
import { courses } from "../data/courses";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-box">
        <div className="header-block">
          {/* Logo → Link về Home */}
          <Link to="/" className="header-logo">
            <img src="/image/Logo.png" alt="Logo" className="header-logo-image" />
          </Link>
          <h1 className="header-name">
            <span>UT</span> <span>LMS</span>
          </h1>
        </div>

        <div className={`header-menu ${isOpen ? "is-open" : ""}`}>
          <a href="#" className="button button--categories">Categories</a>
          <ul className="header-menu-item">
            <li className="menu-item-list">
              <Link to="/" className="menu-link">Home</Link>
            </li>
            <li className="menu-item-list">
              <Link to="/courses" className="menu-link">Courses</Link>
            </li>
            <li className="menu-item-list"><a href="#" className="menu-link">Instructors</a></li>
            <li className="menu-item-list"><a href="#" className="menu-link">Store</a></li>
            <li className="menu-item-list"><a href="#" className="menu-link">Forums</a></li>
          </ul>
        </div>
      </div>
      <div className="header-auth">
        <a href="#" className="button button--ourline">Login</a>
        <a href="#" className="button button--primary">Register</a>
      </div>

      <div className="header-hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
