import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import MenuButton from "../MenuButton";



const Navbar = ({title, handleRegisterClick, handleLoginClick, handleCartClick, handleHomeClick}) => {

  return (
    <>
      <div className="navbar-container">
        <div className="wrapper">
          <div id="left-nav"></div>
          <div id="center-nav"><h1 className="nav-title">{title}</h1></div>      
          <div id="right-nav">
            < MenuButton className="account-menu" />
            <span id="menu-item3">
              <IconButton aria-label="cart">
                <Badge badgeContent={null} color="secondary">
                  <ShoppingCartOutlinedIcon id="cart-icon" onClick={handleCartClick}/>
                </Badge>
              </IconButton>
            </span>
          </div>
        </div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="coluna col8">
                    <nav>
                        <ul className="menu inline sem-marcador">
                            <li>home</li>
                            <li>produtos</li>
                            <li>serviços</li>
                            <li>contacto</li>
                        </ul>
                    </nav>
                </div>
        </nav>
      </div>
    </>
  );
};

//its important to documment the props
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     handleLoginClick: PropTypes.func.isRequired,
//     handleRegisterClick: PropTypes.func.isRequired,
//     handleCartClick: PropTypes.func.isRequired,
// }

export default Navbar;
