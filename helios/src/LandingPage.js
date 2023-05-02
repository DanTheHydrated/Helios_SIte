import React, { useEffect, useState } from "react";
import Mountain from "./Photos/Mountain.jpg"
import Carsoul from "./Carsoul";



export default function Landing() {
    // State variable to hold the typed text
    const [typedText, setTypedText] = useState("");
    const textContent = "Modular Structures for Multi-Mission Aircraft.";

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < 45) { // Adjust the character limit here
                setTypedText((prevText) => prevText + textContent[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    }, [textContent]);
    return(
        <div>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={Mountain} alt="Hero" className="img-fluid" />
                    <div>
                        <h1 className="hero-text">{typedText}</h1>
                    </div>
                </div>
            </div>
            {/* <div className="text-box">
                <div className="row">
                    <div className="justify-content-left col-sm-12 col-md-6">
                        <p className="text-left">
                            &nbsp;&nbsp;&nbsp;&nbsp;We build custom ISR interior modifications rapidly and efficiently, using blocks of pre-engineered and fabricated design. The modules shown below fit together to provide a custom solution with minimal schedule and cost. They can also be reconfigured as the mission evolves.
                            All modules are forward/backward compatible and can ship in off-the-shelf environmentally-hardened cases. This can facilitate fully-integrated spares, roll-on/roll-off capability, short-term flight test, and phased system expansion.
                            All modules are designed and substantiated to meet 14 CFR Regulations. Each customer's custom configuration can be shown to comply with applicable Part 23, 25, 27, or 29 regulations.
                        </p>
                    </div>
                    <div className="image-gallery">
                        <div className="justify-content-right col-sm-12 col-md-6">
                            <img className="image-1" alt="gallery" src={one} />
                            <img className="image-2" alt="gallery" src={two}></img>
                            <img className="image-3" alt="gallery" src={three}></img>
                            <img className="image-4" alt="gallery" src={four}></img>
                            <img className="image-5" alt="gallery" src={five}></img>
                            <img className="image-6" alt="gallery" src={six}></img>
                            <img className="image-7" alt="gallery" src={seven}></img>
                            <img className="image-8" alt="gallery" src={eight}></img>
                            <img className="image-9" alt="gallery" src={nine}></img>
                        </div>
                    </div> 
                </div>
            </div> */}
            <Carsoul />
        </div>
    )
};