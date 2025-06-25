import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects and Contributions</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.npmjs.com/package/aurora-db" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.npmjs.com/package/aurora-db" target="_blank" rel="noreferrer"><h2>AuroraDB</h2></a>
                <p>Proxified asynchronous API for more flexible and distributed IndexedDB. Used in my games and P2P applications like GramCast, Monopoly On The Web and Teleprompter.</p>
            </div>

            <div className="project">
                <a href="https://gramcast.xyz/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://gramcast.xyz/" target="_blank" rel="noreferrer"><h2>GramCast</h2></a>
                <p>Decentralized audio/video podcast web client and Telegram Mini app built with javascript, IPFS and Telegram API.</p>
            </div>

            <div className="project">
                <a href="https://github.com/Omodaka9375/Raccine" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Omodaka9375/Raccine" target="_blank" rel="noreferrer"><h2>Raccine</h2></a>
                <p>Ransomware protection and prevention tool for Windows environment using YARA rules.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/DeepPhish" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Omodaka9375/DeepPhish" target="_blank" rel="noreferrer"><h2>DeepPhish</h2></a>
                <p>Website inspection and detection browser plugin that uses machine learning and a set of recon tools to scrutinize any website for unsafe content. It is built with privacy in mind.</p>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/using-javascript-to-identify-unique-typing-styles-k61b35bi" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hackernoon.com/using-javascript-to-identify-unique-typing-styles-k61b35bi" target="_blank" rel="noreferrer"><h2>StylePass</h2></a>
                <p>Keystroke dynamics verification in a browser using javascript and machine learning</p>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/how-i-made-my-first-ai-youtuber" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hackernoon.com/how-i-made-my-first-ai-youtuber" target="_blank" rel="noreferrer"><h2>Artificial Youtuber Project</h2></a>
                <p>AI content creator powerd by GPT-3, Spacy and FFMPEG</p>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/MIDIfren" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Omodaka9375/MIDIfren" target="_blank" rel="noreferrer"><h2>MIDIFren</h2></a>
                <p>Python app for converting audio to stems, to extract vocals, melody, bass, drums to midi with customizable settings</p>
            </div>


            <div className="project">
                <a href="https://github.com/Omodaka9375/soundterminal" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Omodaka9375/soundterminal" target="_blank" rel="noreferrer"><h2>SoundTerminal</h2></a>
                <p>Python application that allows you to create some beats in terminal using ASCII characters and some samples.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Omodaka9375/sendfiles.run" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Omodaka9375/sendfiles.run" target="_blank" rel="noreferrer"><h2>SendFilesNow</h2></a>
                <p>Unlimited Peer-To-Peer file sharing in the browser, written in vanilla javascript and powered by WebTorrent.</p>
            </div>
            <div className="project">
                <a href="https://hackernoon.com/heres-how-i-built-an-eth-wallet-on-a-cheap-nfc-sticker-er1j3wyd" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hackernoon.com/heres-how-i-built-an-eth-wallet-on-a-cheap-nfc-sticker-er1j3wyd" target="_blank" rel="noreferrer"><h2>NFC ETH wallet</h2></a>
                <p>Hacking a NFC NTAG216 (888 bytes) chip to act as a Ethereum cold wallet</p>
            </div>
        </div>
    </div>
    );
}

export default Project;