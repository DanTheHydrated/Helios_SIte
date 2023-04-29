import React from "react";
import Mountain from "./Photos/Mountain.jpg"

export default function Landing() {
    return(
        <div>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={Mountain} alt="Hero" className="img-fluid" />
                    <div>
                        <h1 className="hero-text">Modular Structures for Multi-Mission Aircraft</h1>
                    </div>
                </div>
            </div>
            <div className="image-gallery"></div>
        </div>
    )
};