import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from '../assets/images/logo.png';
import logoText from '../assets/images/rranju.jpeg';


const Header: React.FC = () => {
    return (
        <>
        <header className="bg-white pb-4 pb-lg-0 bg-dark">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        {/* <img
                            src={logo}
                            alt="Logo"
                            height="40"
                            className='rounded'
                        /> */}
                        <img
                            src={logoText}
                            alt="Logo"
                            height="40"
                             className='rounded'
                        />

                    </a>

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
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Solutions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="btn btn-primary ms-lg-4 mt-2 mt-lg-0"
                            role="button"
                        >
                            Get started now
                        </a>
                    </div>
                </nav>
            </div>
        </header>
        </>
    );
};

export default Header;
