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
          <Link to="/" className="header-logo">
            <img src="/image/Logo.png" alt="Logo" className="header-logo-image" />
          </Link>
          <div className="header-name">
            <span>UT</span> <span>LMS</span>
          </div>
        </div>

        <div className={`header-menu ${isOpen ? "is-open" : ""}`}>
          <a href="#" className="button button--categories">ホーム</a>
          <ul className="header-menu-item">
            <li className="menu-item-list">
              <Link to="/" className="menu-link">コース検索</Link>
            </li>
            <li className="menu-item-list">
              <Link to="/courses" className="menu-link">講師検索</Link>
            </li>
            <li className="menu-item-list">
              <a href="#" className="menu-link">フォーラム</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-auth">
        <a href="#" className="button button--ourline">ログイン</a>
        <a href="#" className="button button--primary">登録</a>
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
