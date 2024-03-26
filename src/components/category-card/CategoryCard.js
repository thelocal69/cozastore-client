import React from "react";
import { Card } from "./Style";
import { Link } from "react-router-dom";


const CategoryCard = () => {
  return (
    <>
      <Card>
        <div className="container">
          <Link to="/CozaStore/Shop">
            <img
              src="https://omarabualhija.github.io/CozaStore/images/banner-01.jpg"
              alt="banner-01"
            ></img>
            <div>
              <h4>Women</h4>
              <h5 style={{ fontSize: "0.8rem" }}>Spring 2021</h5>
            </div>
            <div>Shope Now</div>
          </Link>

          <Link to="/CozaStore/Shop">
            <img
              src="https://omarabualhija.github.io/CozaStore/images/banner-02.jpg"
              alt="banner-02"
            ></img>
            <div>
              {/*title*/}
              <h4>Men</h4>
              <h5>Spring 2021</h5>
            </div>
            <div>Shope Now</div>
          </Link>
          <Link to="/CozaStore/Shop">
            <img
              src="https://omarabualhija.github.io/CozaStore/images/banner-03.jpg"
              alt="banner-03"
            ></img>
            <div>
              <h4>Accessories</h4>
              <h5>Spring 2021</h5>
            </div>
            <div>Shope Now</div>
          </Link>
        </div>
      </Card>
    </>
  )
}

export default CategoryCard