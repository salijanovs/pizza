import { Link } from "react-router-dom";
import "./Succes.css";

const Succes = () => {
  return (
    <div className="succes">
      <div className="succes-wrapper">
        <div className="succes-header">
          <p className="succes-text">Заказ успешно оформлен</p>
          <Link to={"/pizza"} className="backToShop">
            Вернуться в магазин
          </Link>
        </div>
        <div className="succes-footer">
          <h2 className="succes-title">Спасибо!</h2>
        </div>
      </div>
    </div>
  );
};

export default Succes;
