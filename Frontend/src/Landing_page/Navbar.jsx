import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="logo" style={{ width: "25%", minWidth: "100px" }} />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent" 
                    aria-controls="navbarContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;