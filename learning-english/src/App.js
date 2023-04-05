import "./styles/main.css";

import logo from "./img/icons/logo.png";
import sun from "./img/icons/sun.svg";
import moon from "./img/icons/moon.svg";
import telegram from "./img/icons/Vector.svg";
import instagram from "./img/icons/instagram.svg";
import gitHub from "./img/icons/gitHub.svg";
import linkedIn from "./img/icons/linkedIn.svg";

function App() {
  return (
    <div className="App">
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

      {/* <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Yuri</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
        </div>
      </header> */}

      <main className="section">
        <div className="container">
          <div className="content-list">
            <div className="content-list__item">
              <h2 className="title-2">Welcome to our app!</h2>
              <h2 className="title-2">Here you will find the necessary tools to help you master programming terminology in English.</h2>
              <p>
                We offer a wide range of flashcards that cover everything from
                basic programming concepts to advanced terms. Our flashcards are
                designed to help you learn quickly and efficiently, so you can
                start using your new knowledge in your coding projects right
                away.
              </p>
              <p>
                Our flashcards are perfect for both beginners and experienced
                programmers who want to improve their English skills. You can
                use them to study at your own pace, or as part of a group study
                session.
              </p>
              <h2 className="title-2">
                Improve your programming skills in English!
              </h2>
              <h2 className="title-2">
                Start mastering programming terminology like a pro!
              </h2>
            </div>
          </div>
          <a href="#!" className="btn">
            Open Cards
          </a>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="logo-footer">
              <a href="#!">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={telegram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 Created by Iuliia Bogdanova</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
