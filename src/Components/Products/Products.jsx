import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { databases } from "../../appWrite";
import { useEffect, useState } from "react";
import { toCart } from "../../Redux/Auth-slice";
import { Query } from "appwrite";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inSign = useSelector((state) => state.auth.inSign);
  const category = useSelector((state) => state.auth.category);

  const [alert, setAlert] = useState("");
  const [view, setView] = useState(false);

  useEffect(() => {
    databases
      .listDocuments("64ca101702b869bb8021", "64ca10309def14b94a70", [
        Query.equal("category", [category]),
      ])
      .then(
        (response) => {
          setProducts(response.documents);
        },
        (error) => {}
      );
  }, [category]);

  const sendToCart = (product) => {
    inSign ? dispatch(toCart(product)) : navigate("/register");
    setAlert(product.name);
    setTimeout(() => {
      setView(true);
    }, 50);
    setTimeout(() => {
      setView(false);
      setAlert("");
    }, 2000);
  };

  return (
    <div className="products">
      <div className="container">
        <div className="products-wrapper">
          <h2 className="products-title">Паста</h2>
          <div className="products-items">
            {products
              ? products.map((product, index) => {
                  return (
                    <div key={index} className="products-item">
                      <img className="product-img" src={product.img} alt="" />
                      <p className="products-item_title">{product.name}</p>
                      <p className="products-item_text">{product.text}</p>
                      <div className="products-item_footer">
                        <p className="price">{product.price} ₽</p>
                        <button
                          onClick={() => {
                            sendToCart(product);
                          }}
                          className="products-ite_btn"
                        >
                          В корзину
                        </button>
                      </div>
                    </div>
                  );
                })
              : "  Loadig..."}
          </div>
        </div>
      </div>

      <div className={`alert ${view ? "view" : "unview"}`}>
        {alert} добавлен в корзину
      </div>
    </div>
  );
};

export default Products;
