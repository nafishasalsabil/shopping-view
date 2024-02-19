import React, { useState } from "react";
import "./product-detail.styles.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productData } = useParams();
  const decodedProductData = JSON.parse(decodeURIComponent(productData));
  const presentPrice =
    decodedProductData.price -
    decodedProductData.price * (decodedProductData.discountPercentage / 100);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === decodedProductData.images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? decodedProductData.images.length - 1 : prevIndex - 1));
  };
  return (
    <div className="prod-detail-parent">
   <div className="left-cont-prod">

        <img
          className="prod-detail-img"
          src={decodedProductData.images[currentImageIndex]}
          alt="product"
        />
          <button className="prev-arrow" onClick={prevImage}>&lt;</button>
        <button className="next-arrow" onClick={nextImage}>&gt;</button>
      </div>

      <div className="right-cont-prod">
        <h1>{decodedProductData.title}</h1>
        <h3>{decodedProductData.description}</h3>

        <div className="price-container">
          <span className="prev-price">Price: </span>
          <span className="prev-price"> ${presentPrice.toFixed(2)}</span>
          <span className="pres-price">${decodedProductData.price}</span>
        </div>

        <div className="rating-stock">
          <div className="rating">
            <div
              className={`stars rating-${Math.round(
                decodedProductData.rating
              )}`}
            >
              {decodedProductData.rating}
            </div>
          </div>
          <div
            className="stock"
            style={{ color: decodedProductData.stock > 0 ? "#5FB568" : "red" }}
          >
            {decodedProductData.stock > 0 ? "Stock available" : "Out of stock"}
          </div>
        </div>
        <h5>Quantity</h5>
        <div className="quantity-count">
          <button className="quan-but" onClick={decrementQuantity}>
            -
          </button>
          <p className="quan-p">{quantity}</p>
          <button className="quan-but" onClick={incrementQuantity}>
            +
          </button>
        </div>
        <div className="purchase-buttons">
          <button className="cart-btn">Add to Cart</button>
          <button className="cart-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
