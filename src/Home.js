import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M31PE/V259540125_IN_WLME_SamsungM31Prime_DesktopTallHero_3000x1200_1._CB416195537_.jpg"
          alt="HomePage default"
        ></img>
        <div className="home_row">
          <Product />
        </div>
        <div className="home_row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home_row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
