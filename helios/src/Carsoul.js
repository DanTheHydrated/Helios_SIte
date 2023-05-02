import React, { useState } from "react";
import one from './CarsoulPics/helios1.jpeg';
import two from './CarsoulPics/helios2.jpeg';
import three from './CarsoulPics/helios3.jpeg';
import four from './CarsoulPics/helios4.jpeg';
import five from './CarsoulPics/helios5.jpeg';
import six from './CarsoulPics/helios6.jpeg';
import seven from './CarsoulPics/helios8.jpeg';
import eight from './CarsoulPics/helios8.jpeg';
import nine from './CarsoulPics/helios9.jpeg';
import plane from './Photos/HeliosPlane.jpg';
import plane2 from './Photos/HeliosPlaneleft.png';


export default function Carsoul() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCarouselSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return(
        <div className="text-box">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <p className="text-left">
                        &nbsp;&nbsp;&nbsp;&nbsp;We build custom ISR interior modifications rapidly and efficiently, using blocks of pre-engineered and fabricated design. The modules shown below fit together to provide a custom solution with minimal schedule and cost. They can also be reconfigured as the mission evolves.
                        All modules are forward/backward compatible and can ship in off-the-shelf environmentally-hardened cases. This can facilitate fully-integrated spares, roll-on/roll-off capability, short-term flight test, and phased system expansion.
                        All modules are designed and substantiated to meet 14 CFR Regulations. Each customer's custom configuration can be shown to comply with applicable Part 23, 25, 27, or 29 regulations.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="image-gallery">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner justify-content-right">
                                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                                    <img className="c-image" src={one} alt="Slide 1" />
                                </div>
                                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                                    <img className="c-image" src={two} alt="Slide 2" />
                                </div>
                                <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                                    <img className="c-image" src={three} alt="Slide 3" />
                                </div>
                                <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
                                    <img className="c-image" src={four} alt="Slide 4" />
                                </div>
                                <div className={`carousel-item ${activeIndex === 4 ? "active" : ""}`}>
                                    <img className="c-image" src={five} alt="Slide 5" />
                                </div>
                                <div className={`carousel-item ${activeIndex === 5 ? "active" : ""}`}>
                                    <img className="c-image" src={six} alt="Slide 6" />
                                </div>
                                <div className={`carousel-item ${activeIndex === 6 ? "active" : ""}`}>
                                    <img className="c-image" src={seven} alt="Slide 7" />
                                </div>
                                <div className={`carousel-item ${activeIndex === 7 ? "active" : ""}`}>
                                    <img className="c-image" src={eight} alt="Slide 8" />
                                </div>
                                <div className={`carousel-item ${activeIndex === 8 ? "active" : ""}`}>
                                    <img className="c-image" src={nine} alt="Slide 9" />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev center-button"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                                onClick={() => handleCarouselSelect(activeIndex - 1)}
                                disabled={activeIndex === 0}
                            >
                                <img
                                    className="carousel-control-icon"
                                    width="30"
                                    height="30"
                                    src = {plane2}
                                    alt="carousel left"
                                />
                            </button>
                            <button
                                className="carousel-control-next center-button"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                                onClick={() => handleCarouselSelect(activeIndex + 1)}
                                disabled={activeIndex === 8} // Disable if last image
                            >
                                <img
                                    className="carousel-control-icon"
                                    width="30"
                                    height="30"
                                    src = {plane}
                                    alt="carousel right"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}