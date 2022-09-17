// React-Router-Dom
import { Routes as RouterRoutes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const Routes = ({children}) => {
    return(
        <RouterRoutes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            {children}
        </RouterRoutes>
    )
};

