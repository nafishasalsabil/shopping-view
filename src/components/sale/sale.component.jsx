import "./sale.styles.css";

const Sale = ({ sale }) => {
  return (
    <div className="sale-parent">
      <div className="prod1">
        <div className="text">
          <span>Gadget Store</span>
          <h3 className="sale-percent">30% Sale</h3>
          <div className="buy-class">
            <img
              className="buy-img"
              src="../../../images/buy.png"
              alt="buy"
            ></img>
            <span className="buy-text">Buy Now</span>
          </div>
        </div>
        <div className="pic">
          <img
            className="prod-img-sale"
            src="../../../images/ap2.png"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="prod2">
        <div className="text">
          <span>Bundle Package</span>
          <h3 className="sale-percent">Save 30%</h3>
          <div className="buy-class">
            <span className="buy-text">See All</span>
          </div>
        </div>
        <div className="pic">
          <img
            className="prod-img-sale"
            src="../../../images/prod2.png"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="prod3">
        <div className="text">
          <span>Valentine's offer</span>
          <h3 className="sale-percent">30% Sale</h3>
          <div className="buy-class">
            <img
              className="buy-img"
              src="../../../images/buy.png"
              alt="buy"
            ></img>
            <span className="buy-text">Buy Now</span>
          </div>
        </div>
        <div className="pic">
          <img
            className="prod-img-sale"
            src="../../../images/prod3.png"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="prod4">
        <div className="text">
          <span>Relax Chair</span>
          <h3 className="sale-percent">New Arrival</h3>
          <div className="buy-class">
            <img
              className="buy-img"
              src="../../../images/buy.png"
              alt="buy"
            ></img>
            <span className="buy-text">Buy Now</span>
          </div>
        </div>
        <div className="pic">
          <img
            className="prod-img-sale"
            src="../../../images/prod4.png"
            alt="logo"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Sale;
