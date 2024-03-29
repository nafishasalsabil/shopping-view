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
    setCurrentImageIndex((prevIndex) =>
      prevIndex === decodedProductData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? decodedProductData.images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="prod-detail-parent">
      <div className="left-cont-prod">
        <div className="image-container-prod-det">
          <img
            className="prod-detail-img"
            src={decodedProductData.images[currentImageIndex]}
            alt="product"
          />
        </div>
        <button className="prev-arrow" onClick={prevImage}>
          &lt;
        </button>
        <button className="next-arrow" onClick={nextImage}>
          &gt;
        </button>
      </div>

      <div className="right-cont-prod">
        <div className="right-cont-details">
          <h1>{decodedProductData.title}</h1>
          <h3>{decodedProductData.description}</h3>

          <div className="price-container-qt">
            <span className="prev-price-txt">Price: </span>
            <span className="prev-price"> ${presentPrice.toFixed(2)}</span>
            <span className="pres-price">${decodedProductData.price}</span>
          </div>

          <div className="rating-stock-qt">
            <div className="rating">
              <div
                className={`stars rating-${Math.round(
                  decodedProductData.rating
                )}`}
              >
                {decodedProductData.rating}
              </div>
            </div>
          </div>
          <div className="qs-text-cont">
            <h5 className="h5-qt">Add Quantity</h5>
            <div
              className="stock-qt"
              style={{
                color: decodedProductData.stock > 0 ? "#5FB568" : "red",
              }}
            >
              {decodedProductData.stock > 0
                ? "Stock available"
                : "Out of stock"}
            </div>
          </div>

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
    </div>
  );
};
export default ProductDetail;
