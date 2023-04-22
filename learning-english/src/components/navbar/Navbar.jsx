import "./style.css";

import logo from "./../../img/icons/logo.png";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

const Navbar = () => {
  return (
    
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <div className="logo">
              <a href="#!">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <button className="dark-mode-btn">
              <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
              <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button>

            <ul className="nav-list">
              <li className="nav-list__item">
                <a
                  href="./index.html"
                  className="nav-list__link nav-list__link--active"
                >
                  Home
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./projects.html" className="nav-list__link">
                  Words
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./contacts.html" className="nav-list__link">
                  Flashcards
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
  );
};

export default Navbar;
