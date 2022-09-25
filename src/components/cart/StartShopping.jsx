import {Link} from "react-router-dom";

import {AiOutlineArrowLeft} from "react-icons/ai";

export const StartShopping = () => (
    <div className="start-shopping">
        <Link to="/">
            <AiOutlineArrowLeft size={20} />
            <span>Start Shopping</span>
        </Link>
    </div>
);