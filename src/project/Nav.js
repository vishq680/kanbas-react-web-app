import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="nav nav-tabs mb-2">
            <Link className="nav-link" to="#">
                Home</Link>
            <Link className="nav-link" to="./account">
                Account</Link>
            <Link className="nav-link" to="./signin">
                Signin</Link>
            <Link className="nav-link" to="#">
                Search</Link>
            <Link className="nav-link" to="./signup">
                Signup</Link>
        </nav>
    );
}


export default Nav;

