import React, { useState } from "react";
import "./featured-item.styles.css";

const FeaturedItems = ({ policies, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerPage = 4;

  const handleNext = () => {
    if (data && data.products) {
      setActiveIndex((prevIndex) =>
        Math.min(
          prevIndex + 1,
          Math.ceil(data.products.length / productsPerPage) - 1
        )
      );
    }
  };

  const handlePrev = () => {
    if (data && data.products) {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const startIndex = activeIndex * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts =
    data && data.products ? data.products.slice(startIndex, endIndex) : [];

  return (
    <div className="feature-container">
      <div className="left-options">
        {policies.map((item, index) => (
          <div key={index} className="policy">
            <div className="policy-icon-container">
              <img
                className="policy-img"
                src={`../../../images/${item.imgUrl}`}
                alt="policy"
              />
            </div>
            <div className="desc-container">
              <h3 className="pol-head">{item.heading}</h3>
              <span className="desc-span">{item.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="right-features">
        <div className="feature-heading">
          <h3>Featured Item</h3>
          <div className="next-img">
            <i className="arrowx left" onClick={handlePrev}></i>
            <i className="arrowx right" onClick={handleNext}></i>
          </div>
        </div>
        <div className="product-container">
          {visibleProducts.map((item, index) => {
            const presentPrice =
              item.price - item.price * (item.discountPercentage / 100);
            return (
              <div key={index} className="each-product">
                <div className="img-cont">
                  <span
                    className="show-disc"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    -{item.discountPercentage}%
                  </span>
                  <div className="hover-icons">
                    <img
                      className="icon-pic"
                      src="../../../images/bag.png"
                      alt="icon"
                    />
                    <img
                      className="icon-pic"
                      src="../../../images/like.png"
                      alt="icon"
                    />
                    <img
                      className="icon-pic"
                      src="../../../images/add-to-cart.png"
                      alt="icon"
                    />
                    <img
                      className="icon-pic"
                      src="../../../images/chat-box.png"
                      alt="icon"
                    />
                  </div>
                  <img className="prod-img" src={item.thumbnail} alt="prod" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                </div>
                <div className="rating-stock">
                  <div className="rating">
                    <div className={`stars rating-${Math.round(item.rating)}`}>
                      {item.rating}
                    </div>
                  </div>
                  <div
                    className="stock"
                    style={{ color: item.stock > 0 ? "#5FB568" : "red" }}
                  >
                    {item.stock > 0 ? "Stock available" : "Out of stock"}
                  </div>
                </div>
                <div className="price-container">
                  <span className="prev-price"> ${presentPrice.toFixed(2)}</span>
                  <span className="pres-price">
                   ${item.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
