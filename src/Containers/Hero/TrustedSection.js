import React from "react";
import "../../scss/trusted.scss";
import chanel from "../../images/TrustedSection/chanel.png";
import roche from "../../images/TrustedSection/roche.png";
import delong from "../../images/TrustedSection/delonghi.png";
import shon from "../../images/TrustedSection/shonfeld.png";
import momz from "../../images/TrustedSection/mumzworld.png";
import adq from "../../images/TrustedSection/adq.png";
import wilhe from "../../images/TrustedSection/wilhe.png";
import amap from "../../images/TrustedSection/a-map.png";
import med from "../../images/TrustedSection/med.png";
import alhal from "../../images/TrustedSection/alhandal.png";
import asfar from "../../images/TrustedSection/asfar.png";
import alfa from "../../images/TrustedSection/alfa.png";

const TrustedSection = () => {
  return (
    <>
      <div className="trusted-container">
        <div className="trusted-row">
          <h1 className="trusted-header">
            Trusted <br />
            Partners
          </h1>
          <p className="trusted-sub">
            X Our large network of UAE lenders includes established <br />
            and trusted brands includes government entities.
          </p>
        </div>
        <div className="trusted-row-2">
          <div className="trusted-col">
            <img src={chanel} alt="img" className="img1" />
            <img src={roche} alt="img" className="img1" />
            <img src={delong} alt="img" className="img1" />
            <img src={med} alt="img" className="img3" />
          </div>
          <div className="trusted-col">
            <img src={shon} alt="img" className="img2" />
            <img src={momz} alt="img" className="img1" />
            <img src={adq} alt="img" className="img1" />
            <img src={wilhe} alt="img" className="img1" />
          </div>
          <div className="trusted-col">
            <img src={amap} alt="img" className="img3" />
            <img src={alfa} alt="img" className="img1" />
            <img src={alhal} alt="img" className="img1" />
            <img src={asfar} alt="img" className="img2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedSection;
