import { useState } from "react";
import { features } from "../data/features";
import { courses } from "../data/courses";
function Header({ query, setQuery }) {
  const [isOpen, setIsOpen] = useState(false);

  const filteredFeatures = features.filter((item) =>
    item.subtitle.toLowerCase().includes(query.toLowerCase())
  );
  const filteredCourses = courses.filter((course) =>
    course.author.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <header className="header">
      <div className="header-box">
        <div className="header-block">
          <a href="/" className="header-logo">
            <img src="/image/Logo.png" alt="Logo" className="header-logo-image" />
          </a>
          <h1 className="header-name">
            <span>UT</span> <span>LMS</span>
          </h1>
        </div>

        <div className={`header-menu ${isOpen ? "is-open" : ""}`}>
          <a href="#" className="button button--categories">Categories</a>
          <ul className="header-menu-item">
            <li className="menu-item-list"><a href="#" className="menu-link">Home</a></li>
            <li className="menu-item-list"><a href="#" className="menu-link">Courses</a></li>
            <li className="menu-item-list"><a href="#" className="menu-link">Instructors</a></li>
            <li className="menu-item-list"><a href="#" className="menu-link">Store</a></li>
            <li className="menu-item-list"><a href="#" className="menu-link">Forums</a></li>
          </ul>
        </div>
      </div>
      <div className="header-search-box">
        <input
          type="text"
          placeholder="Search feature/course..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <div className="search-dropdown">
            {/* <h4>Features</h4> */}
            <ul>
              {filteredFeatures.map((f) => (
                 <li key={f.id}>{f.subtitle}</li>
              ))}
              {/* {filteredFeatures.length === 0 && <li>No features found</li>} */}
            </ul>
            {/* <h4>Courses</h4> */}
            <ul>
              {filteredCourses.map((c) =>(
                <li key={c.id}>{c.author}</li>
              ))}
              {/* {filteredCourses.length === 0 && <li>No courses found</li>} */}
            </ul>
          </div>
        )
      }
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