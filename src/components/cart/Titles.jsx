export const Titles = ({children}) => (
    <div className="titles">
        <h3 className="product-title">Product</h3>
        <h3 className="price">Price</h3>
        <h3 className="quantity">Quantity</h3>
        <h3 className="total">Total</h3>
        {children}
    </div>
)