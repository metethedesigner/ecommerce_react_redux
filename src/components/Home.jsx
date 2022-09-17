import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

//COMPONENT
import HomeSlider from "./HomeSlider";
import Footer from "./Footer";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    Navigate("/cart");
  };
  return (
    <div className="home-container">
      <HomeSlider />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error has occured.</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
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
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
