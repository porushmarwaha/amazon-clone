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
          <Product
            id="3254354346"
            title="The lean startup: Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 144"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="3254354123"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/514RLGf4c%2BL._SX679_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71RS-pt9QTL._SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />{" "}
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi , 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX679_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="3254354347"
            title="Samsung LC435373RFTFERFT687678 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1024.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
