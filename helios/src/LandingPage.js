import React from "react";
import Mountain from "./Photos/Mountain.jpg"

export default function Landing() {
    return(
        <div>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={Mountain} alt="Hero" className="img-fluid" />
                    <div className="hero-text">
                        <h1>Your hero text goes here</h1>
                        <p>Your hero subtext goes here</p>
                        {/* Add any other text or components for the hero section */}
                    </div>
                </div>
            </div>
        </div>
    )
};