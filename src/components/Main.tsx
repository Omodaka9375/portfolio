import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import YTIcon from '@mui/icons-material/YouTube';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* CRT scanline overlay */}
        <div className="scanlines" />

        {/* Mac Finder window */}
        <div className="mac-window">
          <div className="mac-title-bar">
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
              <h1>Branislav Djalic</h1>
              <p>Entrepreneur, full-stack engineer, research analyst</p>
              <div className="social_icons">
                <a href="https://github.com/Omodaka9375" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/bdjalic/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                <a href="https://x.com/LordOfThePies4" target="_blank" rel="noreferrer"><TwitterIcon/></a>
                <a href="https://www.youtube.com/@interlooper" target="_blank" rel="noreferrer"><YTIcon/></a>
                <a href="mailto:branislav.djalic@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
              </div>
              <div className="mobile_social_icons">
                <a href="https://github.com/Omodaka9375" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/bdjalic/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                <a href="https://x.com/LordOfThePies4" target="_blank" rel="noreferrer"><TwitterIcon/></a>
                <a href="https://www.youtube.com/@interlooper" target="_blank" rel="noreferrer"><YTIcon/></a>
                <a href="mailto:branislav.djalic@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;