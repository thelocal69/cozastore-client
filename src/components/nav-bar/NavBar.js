import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Header, Logo, Bar, ShopIcons, LoginButton, ModalStyle } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "../../redux/actions/Actions";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Login from '../account/Login';

const NavBar = () => {

  const [ToggleNav, setToggleNav] = React.useState(false);
  const [CheckScroll, setCheckScroll] = React.useState(false);
  const [open, setOpen] = React.useState(false);
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

  const handleOpen = () => {
    setOpen(true);
  }


  const handleClose = () => {
    setOpen(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
              to="/Shop"
            >
              Shop
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(!ToggleNav)}
              to="/About"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(!ToggleNav)}
              to="/Blog"
            >
              Blog
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(!ToggleNav)}
              to="/Contact"
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
            className='fa-solid fa-user'
            onClick={handleOpen}
            >
            </div>
            <div
              onClick={() => setToggleNav(!ToggleNav)}
              className={!ToggleNav ? "fas fa-bars" : "fas fa-times fa-xl"}
            ></div>
          </ShopIcons>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box component={ModalStyle}>
                <Login />
              </Box>
            </Modal>
        </div>
      </Header>

    </>
  )
}

export default NavBar