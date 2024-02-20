import { useState } from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar = ({ cats, data }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="left-section">
          <div className="hamburger-menu" onClick={toggleMenu}></div>
          <div className="title">Browse Categories</div>
        </div>

        <ul className={`list ${menuOpen ? "open" : ""}`}>
          <li className="items">Home</li>
          <li className="items dropdown">
            Products
            <div className="dropdown-arrow"></div>
            <ul className="dropdown-content">
              {data.products?.map((item, index) => (
                <li key={index} onClick={toggleMenu}>
                <Link className="link-to-anything" to={`/products/${encodeURIComponent(JSON.stringify(item))}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="items dropdown">
            Categories
            <div className="dropdown-arrow"></div>
            <ul className="dropdown-content">
              {data.products
                ?.reduce((uniqueCategories, item) => {
                  if (!uniqueCategories.includes(item.category)) {
                    uniqueCategories.push(item.category);
                  }
                  return uniqueCategories;
                }, [])
                .map((category, index) => (
                  <li key={index} onClick={toggleMenu}>
                  <Link className="link-to-anything" to={`/categories/${encodeURIComponent(JSON.stringify(category))}`}>{category}</Link></li>
                ))}
            </ul>
          </li>
          <li className="items dropdown">
            Pages
            <div className="dropdown-arrow"></div>
          </li>
          <li className="items">Campaign</li>
          <li className="items">Offer</li>
          <li className="items">Blog</li>
          <li className="items">Review</li>
          <li className="items">Flash Sale</li>
          <li className="items">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
