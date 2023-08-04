import "./Cart.css";
import closeImg from "../../imgs/cart/Close.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  clearProducts,
  minusProduct,
  plusProduct,
  productRemove,
} from "../../Redux/Auth-slice";
import Succes from "../Succes/Succes";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cardProducts = useSelector((state) => state.auth.products);
  const inSign = useSelector((state) => state.auth.inSign);

  const [paymentSucces, setPaymentSucces] = useState(false);

  useEffect(() => {
    inSign || navigate("/register");
  }, []);

  const handleRemove = (id) => {
    dispatch(productRemove(id));
  };

  const handleProductMinus = (id) => {
    dispatch(minusProduct(id));
  };
  const handleProductPlus = (id) => {
    dispatch(plusProduct(id));
  };

  const handlePayment = () => {
    if (cardProducts.length > 0) {
      setPaymentSucces(true);
      dispatch(clearProducts());
    }
  };

  let overall = 0;
  cardProducts.map((product) => {
    const prod = product.price * product.quantity;
    overall = overall + prod;
  });

  return (
    <div className="cart">
      <div className="container">
        {paymentSucces ? (
          <Succes />
        ) : (
          <div className="cart-wrapper">
            <h2 className="cart-title">Корзина</h2>
            <div className="cart-items">
              {cardProducts.length > 0 ? (
                cardProducts.map((product, index) => {
                  return (
                    <div key={index} className="cart-item">
                      <div className="cart-info">
                        <img className="cart-img" src={product.img} alt="" />
                        <div className="cart-text">
                          <h3 className="cart-name">{product.name}</h3>
                          <br />
                          <p className="cart-about">{product.text}</p>
                        </div>
                      </div>
                      <div className="card-send">
                        <p className="card-price">{product.price} ₽</p>
                        <div className="card-counter">
                          <button
                            onClick={() => {
                              handleProductMinus(product.id);
                            }}
                            className="card-counter_minus card-counter_btn"
                          >
                            -
                          </button>
                          <p className="card-counter_text">
                            {product.quantity}
                          </p>
                          <button
                            onClick={() => {
                              handleProductPlus(product.id);
                            }}
                            className="card-counter_plus card-counter_btn"
                          >
                            +
                          </button>
                        </div>
                        <button className="cart-delete_btn">
                          <img
                            onClick={() => {
                              handleRemove(product.id);
                            }}
                            className="card-delete_img"
                            src={closeImg}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1>Корзина пусто</h1>
              )}
            </div>
            <div className="cart-footer">
              <div className="cart-price_wrapper">
                <Link to={"/"} className="backToShop">
                  Вернуться в магазин
                </Link>
                <p className="cart-footer_price">
                  Сумма заказа: <em> {overall} ₽</em>
                </p>
              </div>
              <button onClick={handlePayment} className="cart-footer_btn">
                Оформить заказ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
