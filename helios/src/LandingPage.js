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
            <Carsoul />
        </div>
    )
};
// ⠄⣠⣤⣤⣄⠄⢀⣤⣤⣤⡓⠦⢤⣤⣤⣤⣔⠦⢤⣀⣀⣤⣤⢤⣀⣤⣤⣤⡀⠄
// ⡿⠿⠗⣽⣿⠊⢸⣿⡇⣿⣿⠄⢸⣿⡇⢸⣿⠄⠄⠄⠄⣿⣿⠈⣾⣿⠁⣿⣿⠄
// ⠄⠄⣱⣿⡟⠄⢸⣿⡇⣿⣿⠄⢸⣿⡇⢸⣿⠄⠄⠄⠄⣿⣿⠄⣿⣿⠄⣿⣿⠄
// ⠄⣼⣿⠋⠈⠄⢸⣿⡇⣿⣿⢠⢸⣿⡇⢸⣿⠄⢠⠄⠄⣿⣿⢰⢸⣿⠄⣿⣿⠄
// ⠞⢿⡿⠿⠿⠄⠘⠻⠷⠿⣋⣚⣌⡻⠷⠿⢟⣘⡆⢚⡄⠿⠟⢸⣬⡛⢷⣿⣋⠄
// ⠄⠄⡇⠄⠄⠄⢀⣿⣿⣿⣿⣿⠟⡋⠉⢐⣒⣒⡒⠎⠻⡿⣛⣩⠭⠭⢤⣀⣀⠄
// ⢸⡍⠄⠄⢠⣾⣿⣿⣿⣿⣿⡓⠕⣊⣭⠥⠄⠄⢩⣍⢿⡏⣴⣶⠡⠄⠐⣮⣝⠳
// ⠸⢲⠄⢰⣿⣿⣿⣿⣿⣿⣿⣦⣉⡻⠿⠆⠄⠄⠜⣋⣼⣷⣉⠿⠦⠤⣂⣡⡶⠂
// ⠄⠸⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢟⣫⣿⣿⣟⠻⠿⠿⢟⣛⠋⠄⠄
// ⠄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄
// ⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⢉⣉⠉⣠⣄⠄⣠⣤⡀⣠⣤⣀⣤⣀⠄⠄⠄
// ⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠘⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠄⠄⠄
// ⠄⢀⣀⡁⠭⣛⠿⠿⣿⣿⣿⣿⣿⣿⣦⣤⣀⣉⠄⠉⠙⠉⠋⠉⠉⠄⠄⠄⠄⠄
// ⣤⣿⣿⣿⣷⣤⣝⣛⡒⠤⠭⠉⢩⣭⠍⣿⢛⣛⣛⡛⢛⣃⠄⠄⠄⠄⠄⠄⠄⠄
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡜⢿⠌⣵⣶⣶⣿⣿⣿⣦⠄⠄⠄⠄⠄⠄