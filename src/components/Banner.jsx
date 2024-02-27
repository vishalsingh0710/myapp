import React from 'react';
import ban from "../asserts/ban.png";
import trofi from "../asserts/trofi.png";
import '../styles/Banner.css'; // Import the CSS file

const Banner = () => {
    return (
        <div className="banner-container">
            <img src={trofi} alt="" className="banner-image" />
            <div className="banner-content">
                <div className="text-container">
                    <h6 className="heading">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
                    <ul>
                        <li className="list-item">C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li className="list-item">C.R.L. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                </div>
                <img src={ban} alt="Banner" className="banner-image" />
                <span className="award-text">Government of India has awarded the <span className="bold-text">"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</span>
            </div>
        </div>
    );
}

export default Banner;
