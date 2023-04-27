import React from "react";
import Mountain from "./Photos/Mountain.jpg"

export default function Landing() {
    return(
        <div>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={Mountain} alt="Hero" className="img-fluid" />
                    <div className="hero-text">
                        <h1>Modular structures for multi-mission aircraft</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};