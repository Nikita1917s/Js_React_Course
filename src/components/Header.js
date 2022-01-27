import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    {/* <li><NavLink to="/products/1/2">Error</NavLink></li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;