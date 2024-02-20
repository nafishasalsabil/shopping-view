import React, { useState } from "react";
import "./category-items.styles.css";
import { useParams, Link} from "react-router-dom";

const CategoryItems = ({data}) => {
    const { products } = useParams();
    const filteredProducts = data?.products?.filter(product => product.category === JSON.parse(decodeURIComponent(products)));
    return(
   
        <div className="product-container-cat">
        {filteredProducts?.map((item, index) => {
          const presentPrice =
            item.price - item.price * (item.discountPercentage / 100);
          return (
            <Link className="link-to-anything-cat" to={`/products/${encodeURIComponent(JSON.stringify(item))}`}>
            <div key={index} className="each-product-cat">
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
            </Link>
          );
        })}
      </div>
    )
}
export default CategoryItems;