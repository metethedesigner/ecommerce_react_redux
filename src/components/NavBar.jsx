//React Router Dom
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

//Material UI
import Badge from "@mui/material/Badge";
import { blueGrey } from "@mui/material/colors";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const grey = blueGrey[50];

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h1>BUYERZ.</h1>
      </Link>

      <Link to="/cart">
        <div className="nav-bag">
          <Badge badgeContent={cartTotalQuantity} color="success">
            <ShoppingBasketIcon color="grey" sx={{ fontSize: 35 }} />
          </Badge>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
