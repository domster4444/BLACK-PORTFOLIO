import { FC, ReactElement } from 'react';
import SecondaryBtn from 'components/Button';
const Toolbar: FC = (): ReactElement => {
  return (
    <>
      <main>
        <div id="blurblank"></div>
        <nav id="toolbar">
          <ul id="toolbar-ul">
            <li
              id="name-logo"
              className="montserrat_300  animate__animated animate__fadeInLeft"
            >
              KSHITIZ <span>SHAH</span>
            </li>
            <li>
              <a href="../../img/bigCastBg.jpg" download>
                <a href="https://drive.google.com/uc?export=download&id=1ETyMYIS2YVU5wI6YqnO1gtx-vGzVFqPp">
                  <SecondaryBtn name="Download Resume" sm />
                </a>
              </a>
            </li>
            {/* <li id="hamburger-container">
              <div id="hamburger">
                <div className="line" id="line-one"></div>
                <div className="line" id="line-two"></div>
                <div className="line" id="line-three"></div>
              </div>

              <aside id="sideBar">
                <div id="exit-aside">
                  <div id="upper-cross"></div>
                  <div id="lower-cross"></div>
                </div>
                <ul className="playfair_300">
                  <li>
                    <a href="#heroSection">HOME</a>
                  </li>
                  <li>
                    <a href="#BiographySection">ABOUT</a>
                  </li>
                  <li>
                    <a href="#projectsDivision">WORKS</a>
                  </li>
                  <li>
                    <a href="#projectSection">PROJECTS</a>
                  </li>
                  <li>
                    <a href="#interestBlock">INTERESTS</a>
                  </li>
                  <li>
                    <a href="#contactMeSectionContainer">CONTACT</a>
                  </li>
                </ul>
              </aside>
            </li> */}
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Toolbar;

