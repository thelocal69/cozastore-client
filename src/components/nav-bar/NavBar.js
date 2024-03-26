import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Header, Logo, Bar, ShopIcons } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "../../redux/actions/Actions";


const NavBar = () => {

  const [ToggleNav, setToggleNav] = React.useState(false);
  const [CheckScroll, setCheckScroll] = React.useState(false);
  const themetoggle = useSelector((state) => state.theme);
  const dispatchtheme = useDispatch();
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setCheckScroll(true);
    } else {
      setCheckScroll(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <Header className={CheckScroll ? "background" : ""}>
        <div className="container">
          <Logo>
            <Link to="/">
              <img
                src={`${themetoggle
                  ? "https://omarabualhija.github.io/CozaStore/images/icons/logo-02.png"
                  : "https://omarabualhija.github.io/CozaStore/images/icons/logo-01.png"
                  }`}
                alt="logo"
              />
            </Link>
          </Logo>

          <Bar className={!ToggleNav ? "toggle" : ""}>
            <NavLink onClick={() => setToggleNav(!ToggleNav)} to="/">
              Home
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(!ToggleNav)}
              to="/CozaStore/Shop"
            >
              Shop
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(!ToggleNav)}
              to="/CozaStore/About"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(!ToggleNav)}
              to="/CozaStore/Contact"
            >
              Contact
            </NavLink>
          </Bar>

          <ShopIcons>
            <div
              onClick={() => {
                  console.log(themeAction());
                  dispatchtheme(themeAction());
              }}
              className={themetoggle ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
            ></div>
            <Link
              to="/CozaStore/CheckOut"
              className="fas fa-shopping-cart"
            ></Link>
            <div className="far fa-heart"></div>
            <div
              onClick={() => setToggleNav(!ToggleNav)}
              className={!ToggleNav ? "fas fa-bars" : "fas fa-times fa-xl"}
            ></div>
          </ShopIcons>
        </div>
      </Header>
    </>
  )
}

export default NavBar