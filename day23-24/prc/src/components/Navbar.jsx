import { Link } from "react-router-dom";
import '../app.css';
function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/">Crud</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
