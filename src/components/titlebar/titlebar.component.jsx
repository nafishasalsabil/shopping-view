import "./titlebar.styles.css";

const Titlebar = () => {
  return (
    <nav className="navbar">
      <div className="left-section-title">
        <div className="logo">
          <img
            className="logoimg"
            src="../../../images/logo.png"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="middle-section">
        <input
          type="text"
          placeholder="Search for products"
          className="search-bar"
        />
        <div className="dropdown1">
          All Categories
          <div className="dropdown-arrow1"></div>
        </div>
        <div className="button-container-search">
          <button className="search-button">
            <img
              className="searchImg"
              src="../../../images/search.png"
              alt="logo"
            ></img>
          </button>
        </div>
      </div>
      <div className="right-section">
        <div className="item">
          <img
            className="rightImg"
            src="../../../images/repeat-button.png"
            alt="logo"
          ></img>
        </div>
        <div className="item">
          <img
            className="rightImg"
            src="../../../images/heart.png"
            alt="logo"
          ></img>
        </div>
        <div className="item">
          <img
            className="rightImg"
            src="../../../images/shopping-cart.png"
            alt="logo"
          ></img>
          <div className="badge">0</div>
        </div>
        <div className="item">Account</div>
        <div className="item">
          <img
            className="rightImg"
            src="../../../images/user.png"
            alt="logo"
          ></img>
        </div>
        <div className="item">$20.00</div>
      </div>
    </nav>
  );
};

export default Titlebar;
