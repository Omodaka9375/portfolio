import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import Companies from "./components/Companies";
import FadeIn from './components/FadeIn';
import './index.scss';

/* Boot sequence phases */
const BOOT_FLICKER = 0;
const BOOT_HAPPY_MAC = 1;
const BOOT_DESKTOP = 2;
const BOOT_DONE = 3;

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [bootPhase, setBootPhase] = useState(BOOT_FLICKER);

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        // CRT flicker
        const t1 = setTimeout(() => setBootPhase(BOOT_HAPPY_MAC), 200);
        const t2 = setTimeout(() => setBootPhase(BOOT_DESKTOP), 1400);
        const t3 = setTimeout(() => setBootPhase(BOOT_DONE), 2200);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    if (bootPhase < BOOT_DONE) {
        return (
            <div className="boot-screen">
                {bootPhase === BOOT_FLICKER && <div className="crt-flicker" />}
                {bootPhase >= BOOT_HAPPY_MAC && bootPhase < BOOT_DESKTOP && (
                    <div className="happy-mac">
                        <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
                            <rect x="4" y="2" width="24" height="20" rx="2" fill="#e8e8e0" stroke="#333" strokeWidth="1.5"/>
                            <rect x="7" y="5" width="18" height="13" fill="#1a1a1e"/>
                            {/* Eyes */}
                            <rect x="11" y="9" width="3" height="3" fill="#e8e8e0"/>
                            <rect x="18" y="9" width="3" height="3" fill="#e8e8e0"/>
                            {/* Smile */}
                            <rect x="12" y="14" width="2" height="1" fill="#e8e8e0"/>
                            <rect x="14" y="15" width="4" height="1" fill="#e8e8e0"/>
                            <rect x="18" y="14" width="2" height="1" fill="#e8e8e0"/>
                            {/* Base */}
                            <rect x="10" y="23" width="12" height="2" fill="#e8e8e0" stroke="#333" strokeWidth="0.5"/>
                            <rect x="8" y="25" width="16" height="2" rx="1" fill="#e8e8e0" stroke="#333" strokeWidth="0.5"/>
                        </svg>
                    </div>
                )}
                {bootPhase === BOOT_DESKTOP && <div className="boot-checkerboard" />}
            </div>
        );
    }

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'} boot-ready`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Project/>
            <Companies/>
            <Timeline/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
