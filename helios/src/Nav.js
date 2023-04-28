import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Logo from "./Photos/HellosLogo.jpg"
import { useState } from 'react';


export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" className="navbar-logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavToggle}
                    aria-controls="navbarNav"
                    aria-expanded={isNavOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end${isNavOpen ? ' show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Fielded Components</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};