import { Link } from "react-router-dom";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeCategory } from "../../Redux/Auth-slice";

export const Filter = () => {
  const cart = useSelector((state) => state.auth.products);
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();

  const handleChangeCategory = (category) => {
    dispatch(changeCategory(category));
    setFilter(category);
  };

  return (
    <div className="filter">
      <div className="container">
        <div className="filter-wrapper">
          <ul className="filter-list">
            <li
              onClick={() => {
                handleChangeCategory("pizza");
              }}
              className={`filter-item ${
                filter == "pizza" && "active-category"
              } `}
            >
              Пицца
            </li>
            <li
              onClick={() => {
                handleChangeCategory("pasta");
              }}
              className={`filter-item ${
                filter == "pasta" && "active-category"
              } `}
            >
              Паста
            </li>
            <li
              onClick={() => {
                handleChangeCategory("soup");
              }}
              className={`filter-item ${
                filter == "soup" && "active-category"
              } `}
            >
              Супы
            </li>
            <li
              onClick={() => {
                handleChangeCategory("salad");
              }}
              className={`filter-item ${
                filter == "salad" && "active-category"
              } `}
            >
              Салаты
            </li>
            <li
              onClick={() => {
                handleChangeCategory("drink");
              }}
              className={`filter-item ${
                filter == "drink" && "active-category"
              } `}
            >
              Напитки
            </li>
            <li
              onClick={() => {
                handleChangeCategory();
              }}
              className="filter-item"
            >
              Десерты
            </li>
            <li
              onClick={() => {
                handleChangeCategory();
              }}
              className="filter-item"
            >
              Бакалея
            </li>
            <li
              onClick={() => {
                handleChangeCategory();
              }}
              className="filter-item"
            >
              Антипасти
            </li>
            <li
              onClick={() => {
                handleChangeCategory();
              }}
              className="filter-item"
            >
              Комбо
            </li>
            <li
              onClick={() => {
                handleChangeCategory();
              }}
              className="filter-item"
            >
              Акции
            </li>
          </ul>
          <Link to={"/cart"} className="filter-btn btn">
            Корзина | {cart.length}
          </Link>
        </div>
      </div>
    </div>
  );
};
