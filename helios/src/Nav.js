import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Logo from "./Photos/HellosLogo.jpg"


export default function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" className="navbar-logo" />
                </a>
                <div className="navbar-nav ml-auto">
                    <ul>
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