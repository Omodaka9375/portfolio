import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import YTIcon from '@mui/icons-material/YouTube';
import '../assets/styles/Footer.scss'

const FarcasterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" style={{verticalAlign: 'middle'}}>
    <path d="M5.3 2h13.4l1.8 5.4h1.2v10.8c0 .6-.2 1-.5 1.4-.4.3-.8.5-1.4.5h-.7c-.5 0-1-.2-1.3-.5-.4-.4-.5-.8-.5-1.4v-5.4h-1.2L15 8.6l-1 3.7h-1.1v5.4c0 .6-.2 1-.5 1.4-.4.3-.8.5-1.4.5h-.7c-.5 0-1-.2-1.3-.5-.4-.4-.5-.8-.5-1.4v-5.4H7.2L6.1 8.6l-1 3.7H3.8V7.4h1.2L5.3 2z"/>
  </svg>
);

function Footer() {
  return (
    <footer>
      <div>
      <a href="https://github.com/Omodaka9375" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bdjalic/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/LordOfThePies4" target="_blank" rel="noreferrer"><TwitterIcon/></a>
            <a href="https://www.youtube.com/@interlooper" target="_blank" rel="noreferrer"><YTIcon/></a>
            <a href="mailto:branislav.djalic@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://farcaster.xyz/bane84" target="_blank" rel="noreferrer"><FarcasterIcon/></a>
      </div>
      <p></p>
    </footer>
  );
}

export default Footer;