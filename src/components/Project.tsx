import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock05 from '../assets/images/gramcast.gif';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/dilber.gif';
import mock13 from '../assets/images/midifren.gif';
import mock14 from '../assets/images/velocity.gif';
import mock15 from '../assets/images/peerweb.png';
import mock16 from '../assets/images/chainwise-logo.svg';
import mock17 from '../assets/images/codeprompt.png';
import mock18 from '../assets/images/popscore.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects and Contributions</h1>
        <div className="projects-grid">

        <div className="project">
            <a href="https://codeprompt.me/" target="_blank" rel="noreferrer"><h2>CodePrompt 🚀</h2></a>
            <p>Token-efficient AI prompt generator for developers</p>
            <a href="https://github.com/Omodaka9375/code-prompt" target="_blank" rel="noreferrer"><img src={mock17} className="zoom" alt="thumbnail" width="100%"/></a>
        </div>

        <div className="project">
            <a href="https://popscore.app/" target="_blank" rel="noreferrer"><h2>PopScore AI 🔥</h2></a>
            <p>Discover your image's viral potential with AI-powered image analysis</p>
            <a href="https://github.com/Omodaka9375/Intrinsic-Image-Popularity" target="_blank" rel="noreferrer"><img src={mock18} className="zoom" alt="thumbnail" width="100%"/></a>
        </div>

        <div className="project">
            <a href="https://chainwise.me/" target="_blank" rel="noreferrer"><h2>ChainWise 🔑</h2></a>
            <p>ChainWise.js is a powerful, fast, multi-blockchain HD wallet library that provides seamless cryptocurrency operations across 17+ blockchain networks. Built with a unified architecture, it eliminates the complexity of managing separate crypto libraries while providing enterprise-grade security and performance.</p>
            <a href="https://github.com/Omodaka9375/ChainWise" target="_blank" rel="noreferrer"><img src={mock16} className="zoom" alt="thumbnail" width="100%"/></a>
        </div>

        <div className="project">
            <a href="https://velocity-js.info" target="_blank" rel="noreferrer"><h2>Velocity.js ⚡</h2></a>
            <p>Velocity.js is an intelligent performance optimization library that dramatically speeds up your website by predicting and prefetching resources before users need them.</p>
            <a href="https://velocity-js.info" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
        </div>

        <div className="project">
            <a href="https://peerweb.lol" target="_blank" rel="noreferrer"><h2>PeerWeb 🪐</h2></a>
            <p>PeerWeb enables truly decentralized, censorship-resistant website hosting through peer-to-peer networks.</p>
            <a href="https://peerweb.lol" target="_blank" rel="noreferrer"><img src={mock15} className="zoom" alt="thumbnail" width="100%"/></a>
        </div>

        <div className="project">
            <a href="https://dilber.io" target="_blank" rel="noreferrer"><h2>Dilber</h2></a>
            <p>Live audio-visual coding environment in Javascript for the browser</p>
            <a href="https://dilber.io" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
        </div>

            <div className="project">
                
                <a href="https://www.npmjs.com/package/aurora-db" target="_blank" rel="noreferrer"><h2>AuroraDB</h2></a>
                <p>Proxified asynchronous API for more flexible and distributed IndexedDB. Used in my games and P2P applications like <a href="https://gramcast.xyz" target="_blank">GramCast</a>, <a href="https://omodaka9375.github.io/monopoly-on-the-web/" target="_blank">Monopoly On The Web</a> and <a href="https://github.com/Omodaka9375/teleprompter" target="_blank">Teleprompter</a>.</p>
                <a href="https://www.npmjs.com/package/aurora-db" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>

            <div className="project">
                
                <a href="https://gramcast.xyz/" target="_blank" rel="noreferrer"><h2>GramCast</h2></a>
                <p>Decentralized audio/video podcast web client and Telegram Mini app built with AuroraDB, IPFS and Telegram API</p>
                <a href="https://gramcast.xyz/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>

            <div className="project">
                
                <a href="https://github.com/Omodaka9375/Raccine" target="_blank" rel="noreferrer"><h2>Raccine</h2></a>
                <p>Ransomware protection and prevention tool for Windows environment using YARA rules</p>
                <a href="https://github.com/Omodaka9375/Raccine" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/DeepPhish" target="_blank" rel="noreferrer"><h2>DeepPhish</h2></a>
                <p>Website inspection and detection browser plugin that uses machine learning and a set of recon tools to scrutinize any website for unsafe content</p>
                <a href="https://github.com/Omodaka9375/DeepPhish" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/using-javascript-to-identify-unique-typing-styles-k61b35bi" target="_blank" rel="noreferrer"><h2>StylePass</h2></a>
                <p>Keystroke dynamics verification in a browser using JavaScript and machine learning.</p>
                <a href="https://hackernoon.com/using-javascript-to-identify-unique-typing-styles-k61b35bi" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>

            </div>
            <div className="project">
                <a href="https://hackernoon.com/how-i-made-my-first-ai-youtuber" target="_blank" rel="noreferrer"><h2>Artificial Youtuber Project</h2></a>
                <p>AI content creator powered by GPT-3, Spacy and FFMPEG</p>
                <a href="https://hackernoon.com/how-i-made-my-first-ai-youtuber" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>

            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/MIDIfren" target="_blank" rel="noreferrer"><h2>MIDIFren</h2></a>
                <p>Python app for converting audio to stems, to extract vocals, melody, bass, drums to MIDI with customizable settings</p>
                <a href="https://github.com/Omodaka9375/MIDIfren" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="100%"/></a>

            </div>


            <div className="project">
                <a href="https://github.com/Omodaka9375/soundterminal" target="_blank" rel="noreferrer"><h2>SoundTerminal</h2></a>
                <p>Python application that allows you to create some beats via command-line using ASCII characters and some samples</p>
                <a href="https://github.com/Omodaka9375/soundterminal" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>

            </div>
            <div className="project">
                <a href="https://hackernoon.com/heres-how-i-built-an-eth-wallet-on-a-cheap-nfc-sticker-er1j3wyd" target="_blank" rel="noreferrer"><h2>NFC ETH wallet</h2></a>
                <p>Hacking an NFC NTAG216 (888 bytes) chip to act as an Ethereum cold wallet</p>
                <a href="https://hackernoon.com/heres-how-i-built-an-eth-wallet-on-a-cheap-nfc-sticker-er1j3wyd" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>

            </div>
        </div>
    </div>
    );
}

export default Project;
