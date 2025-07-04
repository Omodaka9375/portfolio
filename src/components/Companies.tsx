import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Companies.scss';
import zepter from '../assets/images/zepter.png';
import fbl from '../assets/images/fbl.png';
import ain from '../assets/images/ain.png';
import out from '../assets/images/out.png';
import mad from '../assets/images/mad.png';
import tix from '../assets/images/tix.png';

function Companies() {
    return (
    <div className="container" id="companies">
        <div className="companies-container">
            <h1>Companies</h1>
            <div className="companies-grid">

                <div className="company">
                    <a href="https://ain.rs"><img src={ain} height={100} alt="logo"></img></a>
                    <p>Founder & Chief Technology Officer</p>
                </div>

                <div className="company">
                    <a href="https://nft-tix.com"><img src={tix} height={100} alt="logo"></img></a>
                    <p>Chief Technology Officer</p>
                </div>

                <div className="company">
                    <a href="https://footballerista.com/"><img src={fbl} height={100} alt="logo"></img></a>
                    <p>Chief Technology Officer</p>
                </div>

                <div className="company">
                    <a href="https://www.zepter.rs/"><img src={zepter} height={100} alt="logo"></img></a>
                    <p>Head of Development</p>
                </div>

                <div className="company">
                    <a href="https://outfit7.com/"><img src={out} height={100} alt="logo"></img></a>
                    <p>Game Engine Developer, My Talking Tom etc.</p>
                </div>

                <div className="company">
                    <a href="https://www.madheadgames.com/"><img src={mad} height={100} alt="logo"></img></a>
                    <p>Game Developer</p>
                </div>

            </div>
            </div>
        </div>
 
    );
}

export default Companies;