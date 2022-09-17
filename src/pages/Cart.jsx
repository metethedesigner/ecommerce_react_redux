import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {getTotals} from "../features/cartSlice";

import {CartProduct} from "../components/cart/CartProduct";
import {CartSummary} from "../components/cart/CartSummary";
import {Titles} from "../components/cart/Titles";
import {StartShopping} from "../components/cart/StartShopping";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length <= 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <StartShopping/>
        </div>
      ) : (
        <div>
          <Titles/>
          <div className="cart-items">
            <CartProduct products={cart.cartItems}/>
          </div>

          <CartSummary cart={cart}/>
        </div>
      )}
    </div>
  );
};

export default Cart;
