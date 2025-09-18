function Header() {
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
     
      <div className="header-menu">
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
      <div className="header-auth">
        <a href="#" className="button button--ourline">Login</a>
        <a href="#" className="button button--primary">Register</a>
      </div>
    </header>
  );
}

export default Header;