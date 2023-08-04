import React from "react";

const InfoItem = ({ img }) => {
  return (
    <div className="info-item">
      <div className="info-img_wrapper">
        <img src={img} alt="" className="info-img" />
      </div>
      <p className="info-item_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  );
};

export default InfoItem;
