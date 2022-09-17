import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = ({products}) => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        Navigate("/cart");
    };

    return (
        <>
            {products?.map((product) => (
                <div key={product.id} className="product">
                    <h3>{product.title}</h3>
                    <div className="image">
                        <img src={product.image} alt={product.title} />
                    </div>

                    <div className="details">
                        <span> {product.description} </span>
                    </div>
                    <div className="price">
                        <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>
                        Add To Cart
                    </button>
                </div>
            ))}
        </>
    );
};

export default Home;
