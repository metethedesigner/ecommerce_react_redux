//CSS
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// React-Router-Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// React Toastify
import { ToastContainer } from "react-toastify";

//Components
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer autoClose={1800} />
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
