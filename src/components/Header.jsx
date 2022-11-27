import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import MenuButton from "./MenuButton";
import PropTypes from 'prop-types'


const Header = ({title, handleRegisterClick, handleLoginClick, handleCartClick, handleHomeClick}) => {

  return (
    <>
      <div className="navbar-container">
        <div className="wrapper">
          <div id="left-nav"></div>
          <div id="center-nav"><img className="logo" src="./logo.jpg" alt=""></img></div>      
          <div id="right-nav">
            <MenuButton />
            <span id="cart-icon">
              <IconButton aria-label="cart">
                <Badge id="badge" badgeContent={null} color="secondary">
                  <ShoppingCartOutlinedIcon id="cart-icon" onClick={handleCartClick}/>
                </Badge>
              </IconButton>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

//its important to documment the props
Header.propTypes = {
    title: PropTypes.string.isRequired,
    handleLoginClick: PropTypes.func.isRequired,
    handleRegisterClick: PropTypes.func.isRequired,
    handleCartClick: PropTypes.func.isRequired,
}

export default Header;
