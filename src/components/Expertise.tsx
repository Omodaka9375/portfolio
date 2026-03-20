import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHive } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faUserSecret, faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsSwe = [
    "TypeScript",
    "Python",
    "C++",
    "C#",
    "Rust",
    "Node.js",
    "React",
    "Svelte",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
];

const labelsFirst = [
    "Solidity",
    "Vyper",
    "FunC",
    "Tact",
    "IPFS",
    "React",
    "Svelte",
    "MongoDB",
    "AWS",
    "DigitalOcean",
    "PostgreSQL",
    "Web3 SDKs"
];

const labelsSecond = [
    "Web Security",
    "Application Security",
    "Network Security",
    "WiFi Security",
    "SIEM",
    "IAM",
    "ESP32",
    "M5Stack",
    "Pentesting",
    "Wifi Pineapple",
    "Pwnagotchi",
    "Bjorn"
];

const labelsThird = [
    "Scikit",
    "OpenCV",
    "GPT",
    "Claude",
    "DeepSeek",
    "DALL-E",
    "StableDiffusion",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-header"><FontAwesomeIcon icon={faCode as IconProp} /><h3>Software Engineering</h3></div>
                    <p>10+ years building software people actually use — from game engines to web apps to developer tools.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Languages & tools:</span>
                        {labelsSwe.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header"><FontAwesomeIcon icon={faHive as IconProp} /><h3>Blockchain</h3></div>
                    <p>Smart contracts, dApps, and peer-to-peer systems. Built an award-winning ticketing platform on Ethereum and ship on TON.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack & platforms:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header"><FontAwesomeIcon icon={faUserSecret as IconProp} /><h3>Cybersecurity</h3></div>
                    <p>From fighting ransomware to building pentesting hardware. Published in Hackernoon and Hakin9 magazine.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack & tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header"><FontAwesomeIcon icon={faCircleNodes as IconProp} /><h3>Machine Learning</h3></div>
                    <p>Training models since GPT-2. Computer vision, generative AI, and a radiology AI proof-of-concept with doctors.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack & frameworks:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;