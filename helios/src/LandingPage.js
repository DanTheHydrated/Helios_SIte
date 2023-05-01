import React, { useEffect, useState } from "react";
import Mountain from "./Photos/Mountain.jpg"
import  one from "./Photos/helios1.jpeg"
import two from "./Photos/helios2.jpeg"
import three from "./Photos/helios3.jpeg"
import four from "./Photos/helios4.jpeg"
import five from "./Photos/helios5.jpeg"
import six from "./Photos/helios6.jpeg"
import seven from "./Photos/helios7.jpeg"
import eight from "./Photos/heliso8.jpeg"
import nine from "./Photos/helios9.jpeg"


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
            <div className="text-box">
                <div className="row">
                    <div className="justify-content-left col-sm-12 col-md-6">
                        <p className="text-left">
                            &nbsp;&nbsp;&nbsp;&nbsp;We build custom ISR interior modifications rapidly and efficiently, using blocks of pre-engineered and fabricated design. The modules shown below fit together to provide a custom solution with minimal schedule and cost. They can also be reconfigured as the mission evolves.
                            All modules are forward/backward compatible and can ship in off-the-shelf environmentally-hardened cases. This can facilitate fully-integrated spares, roll-on/roll-off capability, short-term flight test, and phased system expansion.
                            All modules are designed and substantiated to meet 14 CFR Regulations. Each customer's custom configuration can be shown to comply with applicable Part 23, 25, 27, or 29 regulations.
                        </p>
                    </div>
                    <div className="image-gallery">
                        <div className="col-sm-12 col-md-6">
                            <img className="image-1" src={one}></img>
                            <img className="image-2" src={two}></img>
                            <img className="image-3" src={three}></img>
                            <img className="image-4" src={four}></img>
                            <img className="image-5" src={five}></img>
                            <img className="image-6" src={six}></img>
                            <img className="image-7" src={seven}></img>
                            <img className="image-8" src={eight}></img>
                            <img className="image-9" src={nine}></img>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
};