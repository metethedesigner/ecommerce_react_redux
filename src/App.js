// React-Router-Dom
import {BrowserRouter as Router} from "react-router-dom";
import {Routes} from "./router";

//CSS
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// React Toastify
import {ToastContainer} from "react-toastify";

//Components
import NavBar from "./layouts/NavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <ToastContainer autoClose={1800}/>
                <NavBar/>
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
