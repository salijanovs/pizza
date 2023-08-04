import InfoItem from "./Info-item";
import "./Info.css";
import img from "../../imgs/Info/info-img1svg.svg";
import img2 from "../../imgs/Info/info-img2.svg";
import img3 from "../../imgs/Info/info-img3.svg";
import img4 from "../../imgs/Info/info-img4svg.svg";

const Info = () => {
  return (
    <div className="info">
      <div className="container">
        <div className="info-wrapper">
          <div className="info-title">Оплата и доставка</div>
          <div className="info-items">
            <InfoItem img={img} />
            <InfoItem img={img2} />
            <InfoItem img={img3} />
            <InfoItem img={img4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
