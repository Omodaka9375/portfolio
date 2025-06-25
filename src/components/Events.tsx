import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Events.scss';


function Events() {
    return (
    <div className="container" id="events">
        <div className="events-container">
            <h1>Events and writings</h1>
            <div className="events-grid">

                <div className="event">
                    <a href="https://ain.rs"><img src="https://ain.rs/wp-content/uploads/2021/12/mix_logo_blue_white.png" height={100} alt="logo"></img></a>
                    <p>Founder & CTO</p>
                </div>

                {/* <div className="event">
                    <a href="https://web3.ain.rs/"><img src="https://web3.ain.rs/black_pictograph.svg" height={100} alt="logo"></img></a>
                    <p>Founder & Lecturer</p>
                </div> */}

                <div className="event">
                    <a href="https://footballerista.com/"><img src="https://footballerista.com/wp-content/themes/footballerista/assets/images/fottballerista-logo-full.svg" height={100} alt="logo"></img></a>
                    <p>CTO</p>
                </div>

                <div className="event">
                    <a href="https://www.zepter.rs/"><img src="https://www.zepter.rs/content/images/siteheaderv4/zepter-logo-black.svg" height={100} alt="logo"></img></a>
                    <p>Head of Development</p>
                </div>

                <div className="event">
                    <a href="https://outfit7.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Outfit7_Logo_2021.svg/640px-Outfit7_Logo_2021.svg.png" height={100} alt="logo"></img></a>
                    <p>Engine Developer</p>
                </div>

                <div className="event">
                    <a href="https://www.madheadgames.com/"><img src="https://www.madheadgames.com/wp-content/themes/mhg/img/logo-small.png" height={100} alt="logo"></img></a>
                    <p>Game Developer</p>
                </div>

            </div>
            </div>
        </div>
 
    );
}

export default Events;