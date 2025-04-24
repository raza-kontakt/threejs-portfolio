import { baseProfile } from '../constants/profile.js';

const Footer = () => {
  return (
    <footer className="c-space my-20">
      {/* <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="assets/logo.svg" alt="logo" />
            <p className="footer-text">
              {baseProfile.basics.name} - {baseProfile.basics.label}
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href={baseProfile.basics.profiles[0].url} target="_blank" rel="noopener noreferrer">
              <img src="assets/linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://github.com/ali-raza-munir" target="_blank" rel="noopener noreferrer">
              <img src="assets/github.svg" alt="github" />
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} {baseProfile.basics.name}. All rights reserved.</p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
