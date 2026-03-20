import React from "react";
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
import imgPressboard from '../assets/images/prsb.png';
import imgMonoframe from '../assets/images/monof.png';
import img808 from '../assets/images/808.png';
import imgBrutus from '../assets/images/brutus.png';
import '../assets/styles/Project.scss';

/* ── New project OG images ── */
const ogClustr = "https://clustr.run/og.png";
const ogGitlike = "https://gitlike.dev/og.png";
const ogSnapsecret = "https://snapsecret.lol/meta.png";
const ogGifnail = "https://gifnail.com/i.imgur.com/pJyICf0.gif";
const ogUnshittyfy = "https://unshittyfy.com/og-image.png";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects and Contributions</h1>

        {/* ── Web Apps & Tools ── */}
        <h3 className="category-label">Web Apps & Tools</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://clustr.run" target="_blank" rel="noreferrer"><h2>Clustr</h2></a>
                <p>Turns any text into a visual knowledge graph. Paste an article, notes, or any text and discover patterns you missed.</p>
                <a href="https://clustr.run" target="_blank" rel="noreferrer"><img src={ogClustr} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://snapsecret.lol" target="_blank" rel="noreferrer"><h2>SnapSecret</h2></a>
                <p>Self-destructing encrypted messages. Set expiry, max reads, and password protection. Burn after reading.</p>
                <a href="https://snapsecret.lol" target="_blank" rel="noreferrer"><img src={ogSnapsecret} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://omodaka9375.github.io/pressboard/" target="_blank" rel="noreferrer"><h2>PressBoard</h2></a>
                <p>3D-printable PCB designer. Drag-and-drop components, trace routing, design rule checks, and STL export.</p>
                <a href="https://omodaka9375.github.io/pressboard/" target="_blank" rel="noreferrer"><img src={imgPressboard} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://app.gitlike.dev/monoframe/" target="_blank" rel="noreferrer"><h2>MonoFrame</h2></a>
                <p>Design wireframes with Unicode box-drawing characters. Draw layouts, drop in components, export as text or PNG.</p>
                <a href="https://app.gitlike.dev/monoframe/" target="_blank" rel="noreferrer"><img src={imgMonoframe} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://gifnail.com" target="_blank" rel="noreferrer"><h2>GifNail</h2></a>
                <p>Use animated GIFs as OpenGraph preview images. Generate the right meta tags so your links come alive when shared.</p>
                <a href="https://gifnail.com" target="_blank" rel="noreferrer"><img src={ogGifnail} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://unshittyfy.com" target="_blank" rel="noreferrer"><h2>Unshittyfy</h2></a>
                <p>The brutally honest productivity app. Task management with a pomodoro timer, excuse tracker, and a shame leaderboard.</p>
                <a href="https://unshittyfy.com" target="_blank" rel="noreferrer"><img src={ogUnshittyfy} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://codeprompt.me/" target="_blank" rel="noreferrer"><h2>CodePrompt</h2></a>
                <p>Token-efficient AI prompt generator for developers</p>
                <a href="https://github.com/Omodaka9375/code-prompt" target="_blank" rel="noreferrer"><img src={mock17} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://popscore.app/" target="_blank" rel="noreferrer"><h2>PopScore AI</h2></a>
                <p>Discover your image's viral potential with AI-powered analysis</p>
                <a href="https://github.com/Omodaka9375/Intrinsic-Image-Popularity" target="_blank" rel="noreferrer"><img src={mock18} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://velocity-js.info" target="_blank" rel="noreferrer"><h2>Velocity.js</h2></a>
                <p>Intelligent performance library that predicts and prefetches resources before users need them.</p>
                <a href="https://velocity-js.info" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>

        {/* ── Audio & Creative ── */}
        <h3 className="category-label">Audio & Creative</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://omodaka9375.github.io/808ify" target="_blank" rel="noreferrer"><h2>808ify</h2></a>
                <p>Browser-based drum machine with step sequencer, pattern chaining, parametric EQ, and MIDI support.</p>
                <a href="https://omodaka9375.github.io/808ify" target="_blank" rel="noreferrer"><img src={img808} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://omodaka9375.github.io/brutus" target="_blank" rel="noreferrer"><h2>Brutus</h2></a>
                <p>Brutalist web synthesizer with MIDI sync, pattern sequencer, real-time effects, and parametric equalizer.</p>
                <a href="https://omodaka9375.github.io/brutus" target="_blank" rel="noreferrer"><img src={imgBrutus} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://dilber.io" target="_blank" rel="noreferrer"><h2>Dilber</h2></a>
                <p>Live audio-visual coding environment in JavaScript for the browser</p>
                <a href="https://dilber.io" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/MIDIfren" target="_blank" rel="noreferrer"><h2>MIDIFren</h2></a>
                <p>Audio to stems to MIDI converter with customizable extraction settings</p>
                <a href="https://github.com/Omodaka9375/MIDIfren" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/soundterminal" target="_blank" rel="noreferrer"><h2>SoundTerminal</h2></a>
                <p>Make beats in the terminal using ASCII characters and samples</p>
                <a href="https://github.com/Omodaka9375/soundterminal" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>

        {/* ── Blockchain & P2P ── */}
        <h3 className="category-label">Blockchain & P2P</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://gitlike.dev" target="_blank" rel="noreferrer"><h2>GitLike</h2></a>
                <p>Decentralized version control powered by IPFS and Sign-In-With-Ethereum. Git-compatible CLI with federation support.</p>
                <a href="https://gitlike.dev" target="_blank" rel="noreferrer"><img src={ogGitlike} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://chainwise.me/" target="_blank" rel="noreferrer"><h2>ChainWise</h2></a>
                <p>Multi-blockchain HD wallet library. Seamless crypto operations across 17+ networks with a unified API.</p>
                <a href="https://github.com/Omodaka9375/ChainWise" target="_blank" rel="noreferrer"><img src={mock16} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://peerweb.lol" target="_blank" rel="noreferrer"><h2>PeerWeb</h2></a>
                <p>Decentralized, censorship-resistant website hosting through peer-to-peer networks.</p>
                <a href="https://peerweb.lol" target="_blank" rel="noreferrer"><img src={mock15} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://www.npmjs.com/package/aurora-db" target="_blank" rel="noreferrer"><h2>AuroraDB</h2></a>
                <p>Proxified async API for flexible, distributed IndexedDB. Powers <a href="https://gramcast.xyz" target="_blank" rel="noreferrer">GramCast</a>, <a href="https://omodaka9375.github.io/monopoly-on-the-web/" target="_blank" rel="noreferrer">Monopoly On The Web</a>, and <a href="https://github.com/Omodaka9375/teleprompter" target="_blank" rel="noreferrer">Teleprompter</a>.</p>
                <a href="https://www.npmjs.com/package/aurora-db" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://gramcast.xyz/" target="_blank" rel="noreferrer"><h2>GramCast</h2></a>
                <p>Decentralized audio/video podcast client and Telegram Mini app built with AuroraDB, IPFS and Telegram API</p>
                <a href="https://gramcast.xyz/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/heres-how-i-built-an-eth-wallet-on-a-cheap-nfc-sticker-er1j3wyd" target="_blank" rel="noreferrer"><h2>NFC ETH Wallet</h2></a>
                <p>Hacking an NFC NTAG216 chip to act as an Ethereum cold wallet</p>
                <a href="https://hackernoon.com/heres-how-i-built-an-eth-wallet-on-a-cheap-nfc-sticker-er1j3wyd" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>

        {/* ── Security & AI ── */}
        <h3 className="category-label">Security & AI</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Omodaka9375/Raccine" target="_blank" rel="noreferrer"><h2>Raccine</h2></a>
                <p>Ransomware protection and prevention tool for Windows using YARA rules</p>
                <a href="https://github.com/Omodaka9375/Raccine" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/DeepPhish" target="_blank" rel="noreferrer"><h2>DeepPhish</h2></a>
                <p>Phishing detection browser plugin using machine learning and recon tools</p>
                <a href="https://github.com/Omodaka9375/DeepPhish" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/using-javascript-to-identify-unique-typing-styles-k61b35bi" target="_blank" rel="noreferrer"><h2>StylePass</h2></a>
                <p>Keystroke dynamics verification in the browser using JavaScript and machine learning</p>
                <a href="https://hackernoon.com/using-javascript-to-identify-unique-typing-styles-k61b35bi" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/how-i-made-my-first-ai-youtuber" target="_blank" rel="noreferrer"><h2>Artificial Youtuber</h2></a>
                <p>AI content creator powered by GPT-3, Spacy and FFMPEG</p>
                <a href="https://hackernoon.com/how-i-made-my-first-ai-youtuber" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>

    </div>
    );
}

export default Project;
