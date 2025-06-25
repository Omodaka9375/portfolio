import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHive } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

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
    "Bjorn",
    "FlipperZero"
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
                    <FontAwesomeIcon icon={faHive as IconProp} size="3x"/>
                    <h3>Blockchain</h3>
                    <p>I have built a diverse array of Web3 applications and smart contracts from scratch using technologies such as React, Solidity, IPFS etc. Built an award winning platform for ticket sales on Ethereum. Experience in building P2P decentralized technology with privacy in mind. Proficient in the Tact/FunC programming language on TON blockchain.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack & platforms:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUserSecret as IconProp} size="3x"/>
                    <h3>Cybersecurity</h3>
                    <p>Contributed to award winning software that fights agains ransomware. Worked on custom hardware and software tools for pentesting and API testing. Wrote a plugin for Pwnagotchi. Built various POCs for steganography. Published phishing detection browser extension. Maintained security for corporate datacenter. Wrote articles for Hackernoon and Hakin9 magazine.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack & tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCircleNodes as IconProp} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>Wrote tools for different ML algorithms and frameworks. Trained custom models with OpenCV for mask detection, drowsines while driving and sign language recognition. Worked on LLMs since GPT-2. Developed and trained custom video, audio and text generation models. Created POC for AI in radiology in colaboration with medical profesionals and institutions.</p>
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