import React, { useState, useEffect, useRef, useCallback } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import YTIcon from '@mui/icons-material/YouTube';
import '../assets/styles/Main.scss';

const FarcasterIcon = () => (
  <svg viewBox="0 0 1000 1000" fill="currentColor" width="1em" height="1em" style={{verticalAlign: 'middle'}}>
    <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z"/>
    <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V351.111H331.111L360 253.333H128.889Z"/>
    <path d="M640 253.333L668.889 351.111H693.333V746.667C681.06 746.667 671.111 756.616 671.111 768.889V795.556H666.667C654.394 795.556 644.444 805.505 644.444 817.778V844.444H893.333V817.778C893.333 805.505 883.384 795.556 871.111 795.556H866.667V768.889C866.667 756.616 856.717 746.667 844.444 746.667H817.778V351.111H842.222L871.111 253.333H640Z"/>
  </svg>
);

const FULL_NAME = "Branislav Đalić";

function Main() {
  /* Typing animation */
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (typed.length < FULL_NAME.length) {
      const t = setTimeout(() => setTyped(FULL_NAME.slice(0, typed.length + 1)), 80 + Math.random() * 60);
      return () => clearTimeout(t);
    }
    // Blink cursor a few times then hide
    const t = setTimeout(() => setShowCursor(false), 2000);
    return () => clearTimeout(t);
  }, [typed]);

  /* Draggable window */
  const windowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  }, [offset]);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => {
      setOffset({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, [dragging]);

  return (
    <div className="container">
      <div className="about-section">
        {/* CRT scanline overlay */}
        <div className="scanlines" />

        {/* Mac Finder window — draggable */}
        <div
          className="mac-window"
          ref={windowRef}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <div
            className="mac-title-bar"
            onMouseDown={onMouseDown}
            style={{ cursor: dragging ? 'grabbing' : 'grab' }}
          >
            <span className="mac-btn close" />
            <span className="mac-btn minimize" />
            <span className="mac-btn maximize" />
            <span className="mac-title">About.txt</span>
          </div>
          <div className="mac-window-body">
            <div className="image-wrapper">
              <img src="https://i.imgur.com/FN5d2Pg.png" alt="Avatar" />
            </div>
            <div className="content">
              <h1>{typed}{showCursor && <span className="typing-cursor">|</span>}</h1>
              <p>I build things for the web, blockchain, and everything in between.</p>
              <div className="social_icons">
                <a href="https://github.com/Omodaka9375" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/bdjalic/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                <a href="https://x.com/LordOfThePies4" target="_blank" rel="noreferrer"><TwitterIcon/></a>
                <a href="https://www.youtube.com/@interlooper" target="_blank" rel="noreferrer"><YTIcon/></a>
                <a href="mailto:branislav.djalic@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
                <a href="https://farcaster.xyz/bane84" target="_blank" rel="noreferrer"><FarcasterIcon/></a>
              </div>
              <div className="mobile_social_icons">
                <a href="https://github.com/Omodaka9375" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/bdjalic/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                <a href="https://x.com/LordOfThePies4" target="_blank" rel="noreferrer"><TwitterIcon/></a>
                <a href="https://www.youtube.com/@interlooper" target="_blank" rel="noreferrer"><YTIcon/></a>
                <a href="mailto:branislav.djalic@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
                <a href="https://farcaster.xyz/bane84" target="_blank" rel="noreferrer"><FarcasterIcon/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;