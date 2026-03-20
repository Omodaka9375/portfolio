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
const ogTiksi = "https://tiksi.io/graph.png";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Things I've Built</h1>

        {/* ── Web Apps & Tools ── */}
        <h3 className="category-label">Web Apps & Tools</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://clustr.run" target="_blank" rel="noreferrer"><h2>Clustr</h2></a>
                <p>Paste any text and watch it turn into an interactive knowledge graph. Great for spotting connections you'd miss reading linearly.</p>
                <a href="https://clustr.run" target="_blank" rel="noreferrer"><img src={ogClustr} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://snapsecret.lol" target="_blank" rel="noreferrer"><h2>SnapSecret</h2></a>
                <p>Send secrets that self-destruct. Set a timer, limit who can read it, add a password. Gone after reading.</p>
                <a href="https://snapsecret.lol" target="_blank" rel="noreferrer"><img src={ogSnapsecret} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://omodaka9375.github.io/pressboard/" target="_blank" rel="noreferrer"><h2>PressBoard</h2></a>
                <p>Design circuit boards you can 3D-print at home. Drag components, route traces, check your design, export to STL.</p>
                <a href="https://omodaka9375.github.io/pressboard/" target="_blank" rel="noreferrer"><img src={imgPressboard} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://app.gitlike.dev/monoframe/" target="_blank" rel="noreferrer"><h2>MonoFrame</h2></a>
                <p>Sketch wireframes using Unicode box-drawing characters. Looks great in any monospace font, exports as text or PNG.</p>
                <a href="https://app.gitlike.dev/monoframe/" target="_blank" rel="noreferrer"><img src={imgMonoframe} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://gifnail.com" target="_blank" rel="noreferrer"><h2>GifNail</h2></a>
                <p>Make your shared links show animated GIFs instead of static previews. Just paste a URL and grab the meta tag.</p>
                <a href="https://gifnail.com" target="_blank" rel="noreferrer"><img src={ogGifnail} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://unshittyfy.com" target="_blank" rel="noreferrer"><h2>Unshittyfy</h2></a>
                <p>A productivity app that doesn't sugarcoat it. Tracks your tasks, your excuses, and your shame. Has a leaderboard.</p>
                <a href="https://unshittyfy.com" target="_blank" rel="noreferrer"><img src={ogUnshittyfy} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://codeprompt.me/" target="_blank" rel="noreferrer"><h2>CodePrompt</h2></a>
                <p>Paste your codebase and get a clean, token-efficient prompt ready for any LLM.</p>
                <a href="https://github.com/Omodaka9375/code-prompt" target="_blank" rel="noreferrer"><img src={mock17} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://popscore.app/" target="_blank" rel="noreferrer"><h2>PopScore AI</h2></a>
                <p>Upload a photo and find out how likely it is to go viral. Powered by an image popularity model.</p>
                <a href="https://github.com/Omodaka9375/Intrinsic-Image-Popularity" target="_blank" rel="noreferrer"><img src={mock18} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://velocity-js.info" target="_blank" rel="noreferrer"><h2>Velocity.js</h2></a>
                <p>A JS library that watches what users do and prefetches the next resource before they click.</p>
                <a href="https://velocity-js.info" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>

        {/* ── Audio & Creative ── */}
        <h3 className="category-label">Audio & Creative</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://omodaka9375.github.io/808ify" target="_blank" rel="noreferrer"><h2>808ify</h2></a>
                <p>A drum machine in your browser. Step sequencer, pattern chaining, EQ, and MIDI — no install needed.</p>
                <a href="https://omodaka9375.github.io/808ify" target="_blank" rel="noreferrer"><img src={img808} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://omodaka9375.github.io/brutus" target="_blank" rel="noreferrer"><h2>Brutus</h2></a>
                <p>A raw, brutalist synth for the browser. Hooks up to your MIDI controller, sequences patterns, mangles sound.</p>
                <a href="https://omodaka9375.github.io/brutus" target="_blank" rel="noreferrer"><img src={imgBrutus} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://dilber.io" target="_blank" rel="noreferrer"><h2>Dilber</h2></a>
                <p>Write JavaScript, hear sound, see visuals — all at once, live in the browser.</p>
                <a href="https://dilber.io" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/MIDIfren" target="_blank" rel="noreferrer"><h2>MIDIFren</h2></a>
                <p>Drop in a song, pull out vocals, drums, bass as separate stems, then convert them to MIDI.</p>
                <a href="https://github.com/Omodaka9375/MIDIfren" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/soundterminal" target="_blank" rel="noreferrer"><h2>SoundTerminal</h2></a>
                <p>Type ASCII patterns in a terminal and hear them play back as beats. Surprisingly fun.</p>
                <a href="https://github.com/Omodaka9375/soundterminal" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>

        {/* ── Blockchain & P2P ── */}
        <h3 className="category-label">Blockchain & P2P</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://tiksi.io" target="_blank" rel="noreferrer"><h2>Tiksi</h2></a>
                <p>Buy and sell event tickets right inside Telegram. NFT-based, crypto payments, no scalping, no fakes.</p>
                <a href="https://tiksi.io" target="_blank" rel="noreferrer"><img src={ogTiksi} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://gitlike.dev" target="_blank" rel="noreferrer"><h2>GitLike</h2></a>
                <p>Like Git, but decentralized. Your repos live on IPFS, you sign in with Ethereum, and it federates.</p>
                <a href="https://gitlike.dev" target="_blank" rel="noreferrer"><img src={ogGitlike} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://chainwise.me/" target="_blank" rel="noreferrer"><h2>ChainWise</h2></a>
                <p>One JS library, 17+ blockchains. Generate wallets, sign transactions, manage keys — unified API.</p>
                <a href="https://github.com/Omodaka9375/ChainWise" target="_blank" rel="noreferrer"><img src={mock16} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://peerweb.lol" target="_blank" rel="noreferrer"><h2>PeerWeb</h2></a>
                <p>Host a website that nobody can take down. Peer-to-peer, no servers, censorship-resistant.</p>
                <a href="https://peerweb.lol" target="_blank" rel="noreferrer"><img src={mock15} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://www.npmjs.com/package/aurora-db" target="_blank" rel="noreferrer"><h2>AuroraDB</h2></a>
                <p>A smarter IndexedDB wrapper that makes browser storage feel like a real database. Powers several of my other projects.</p>
                <a href="https://www.npmjs.com/package/aurora-db" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://gramcast.xyz/" target="_blank" rel="noreferrer"><h2>GramCast</h2></a>
                <p>A podcast app that runs inside Telegram. Decentralized storage via IPFS, built on AuroraDB.</p>
                <a href="https://gramcast.xyz/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/heres-how-i-built-an-eth-wallet-on-a-cheap-nfc-sticker-er1j3wyd" target="_blank" rel="noreferrer"><h2>NFC ETH Wallet</h2></a>
                <p>Turned a cheap NFC sticker into an Ethereum cold wallet. 888 bytes was all it took.</p>
                <a href="https://hackernoon.com/heres-how-i-built-an-eth-wallet-on-a-cheap-nfc-sticker-er1j3wyd" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>

        {/* ── Security & AI ── */}
        <h3 className="category-label">Security & AI</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Omodaka9375/Raccine" target="_blank" rel="noreferrer"><h2>Raccine</h2></a>
                <p>Award-winning open-source tool that catches ransomware before it encrypts your files.</p>
                <a href="https://github.com/Omodaka9375/Raccine" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/DeepPhish" target="_blank" rel="noreferrer"><h2>DeepPhish</h2></a>
                <p>A browser extension that uses ML to tell you if a website is trying to steal your credentials.</p>
                <a href="https://github.com/Omodaka9375/DeepPhish" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/using-javascript-to-identify-unique-typing-styles-k61b35bi" target="_blank" rel="noreferrer"><h2>StylePass</h2></a>
                <p>Identifies you by how you type. Everyone has a unique rhythm — this tool learns yours.</p>
                <a href="https://hackernoon.com/using-javascript-to-identify-unique-typing-styles-k61b35bi" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/how-i-made-my-first-ai-youtuber" target="_blank" rel="noreferrer"><h2>Artificial Youtuber</h2></a>
                <p>An AI that writes scripts, generates voiceovers, edits video, and uploads to YouTube. Fully automated.</p>
                <a href="https://hackernoon.com/how-i-made-my-first-ai-youtuber" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>

    </div>
    );
}

export default Project;
