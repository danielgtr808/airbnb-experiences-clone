import './navbar.css';
import logo from "./../../assets/svg/logo.svg"

function Navbar() {
    return (
        <nav className="global-shadow navbar">
            <img src={logo} alt="Application logo" className="navbar__logo" />
        </nav>
    )
}

export default Navbar