import React from "react";
import circles from "../assets/circles.svg"
import respCircle from "../assets/respCircle.svg"

const FrontSide = ({ name, number, month, year }) => {
  return (
    <div className="frontCard">
      <div className="circle">
        <img src={circles} alt="" className="circles"/>
        <img src={respCircle} alt=""className="respcircle" />
      </div>

      <div className="cardNumber">{number}</div>

      <div className="cardFooter">
        <div className="cardName">{name}</div>

        <div className="cardExp">
          <div className="month">{month} /</div>
          <div className="year">{year}</div>
        </div>
      </div>
    </div>
  );
};

export default FrontSide;
