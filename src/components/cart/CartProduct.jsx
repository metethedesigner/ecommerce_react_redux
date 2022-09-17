import {useDispatch} from "react-redux";
import {
    addToCart,
    decreaseCart,
    removeFromCart,
} from "../../features/cartSlice";

export const CartProduct = ({products}) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };

    const handleIncreaseCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            {products?.map((product) => (
                <div className="cart-item" key={product.id}>
                    <div className="cart-product">
                        <img src={product.image} alt={product.name}/>
                        <div>
                            <h3> {product.title} </h3>
                            <button onClick={() => handleRemoveFromCart(product)}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="cart-price">$ {product.price} </div>
                    <div className="cart-quantity">
                        <button onClick={() => handleDecreaseCart(product)}>
                            -
                        </button>
                        <div className="count"> {product.cartQuantity} </div>
                        <button onClick={() => handleIncreaseCart(product)}>
                            +
                        </button>
                    </div>
                    <div className="cart-total">
                        ${product.price * product.cartQuantity}
                    </div>
                </div>
            ))}

        </>
    );
};