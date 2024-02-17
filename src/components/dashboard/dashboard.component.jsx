import "./dashboard.styles.css";

const Dashboard = ({ cat }) => {
  return (
    <div className="parent">
      <div className="left-side">
        {cat.map((item, index) => (
          <div key={index} className="cat-item">
            {item.title}
            <div className="arrow-icon"></div>
          </div>
        ))}
        <div className="cat-item">View All Categories</div>
      </div>
      <div className="right-side">
        <div className="right-text">
          <p className="disc">Upto <span className="highlight">70%</span> off on Black Friday</p>
          <h1 className="tf">
            TRENDY <span className="highlight">FASHION</span>
          </h1>
          <h1 className="cl">COLLECTION</h1>
          <button className="buy">Buy Now</button>
        </div>
        <div className="right-image">
          <img className="girl" src="../../../picture.png" alt="girl"></img>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
