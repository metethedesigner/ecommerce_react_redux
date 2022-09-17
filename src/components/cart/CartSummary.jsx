import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {AiOutlineArrowLeft} from "react-icons/ai";
import {clearCart} from "../../features/cartSlice";

export const CartSummary = ({cart}) => {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>
                Clear Cart
            </button>
            <div className="cart-checkout">
                <div className="sub-total">
                    <span>Subtotal</span>
                    <span className="amount"> ${cart.cartTotalAmount} </span>
                </div>
                <p>Taxes and shipping calculated at checkout.</p>
                <button>Checkout</button>
                <div className="continue-shopping">
                    <Link to="/">
                        <AiOutlineArrowLeft size={20}/>
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};