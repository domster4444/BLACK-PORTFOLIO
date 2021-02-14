import React, { useEffect } from 'react';
import kshitiz from '../img/kshitiz.png';
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';
import four from '../img/four.png';
import projectOne from '../img/projectOne.png';
import mom from '../img/mom.png';
import statisticsLogoOne from '../img/statistics-logo-one.png';
import statisticsLogoTwo from '../img/statistics-logo-two.png';
import statisticsLogoThree from '../img/statistics-logo-three.png';
import statisticsLogoFour from '../img/statistics-logo-four.png';
import bookPotrait from '../img/book-potrait.png';

export default function Navbar() {
  useEffect(() => {
    //?---------------------------- SIDEBAR+HAMBURGER+BLURSCREEN
    let blurblank = document.getElementById('blurblank');
    let cross = document.getElementById('exit-aside');
    let hamburger = document.getElementById('hamburger');
    let aside = document.getElementById('sideBar');
    hamburger.addEventListener('click', () => {
      aside.style.visibility = `visible`;
      aside.style.height = `100vh`;
      blurblank.style.display = 'block';
    });
    blurblank.addEventListener('click', () => {
      aside.style.visibility = `hidden`;
      aside.style.height = `40vh`;
      blurblank.style.display = 'none';
    });

    cross.addEventListener('click', () => {
      aside.style.visibility = `hidden`;
      aside.style.height = `40vh`;
      blurblank.style.display = 'none';
    });

    //?---------------------------- SIDEBAR+HAMBURGER+BLURSCREEN

    // -----------------------------------------SECTION2 SWITCHING IN BIOGRAPHY SECTION

    // menus  to add event listeners
    let aboutmeMenu = document.getElementById('aboutmeMenu');
    let beginningMenu = document.getElementById('beginningMenu');
    let thefirstMenu = document.getElementById('thefirstMenu');
    let careerMenu = document.getElementById('careerMenu');

    // -----------------------INFORMATIONS-----------------
    let aboutme = document.getElementById('aboutme');
    let beginning = document.getElementById('beginning');
    let thefirst = document.getElementById('thefirst');
    let career = document.getElementById('career');

    beginning.style.display = 'none';
    thefirst.style.display = 'none';
    career.style.display = 'none';
    aboutmeMenu.addEventListener('click', () => {
      // ?---added--
      aboutme.style.display = 'block';
      //?removed

      thefirst.style.display = 'none';
      career.style.display = 'none';
      beginning.style.display = 'none';
    });

    beginningMenu.addEventListener('click', () => {
      // ?---added--
      beginning.style.display = 'block';
      //?removed
      aboutme.style.display = 'none';
      thefirst.style.display = 'none';
      career.style.display = 'none';
    });

    thefirstMenu.addEventListener('click', () => {
      // ?---added--
      thefirst.style.display = 'block';
      //?removed
      aboutme.style.display = 'none';
      beginning.style.display = 'none';
      career.style.display = 'none';
    });

    careerMenu.addEventListener('click', () => {
      // ?---added--
      career.style.display = 'block';
      career.style.marginTop = '1rem';
      //?removed
      aboutme.style.display = 'none';
      beginning.style.display = 'none';
      thefirst.style.display = 'none';
    });
  });

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
            <li id="hamburger-container">
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
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#">ABOUT</a>
                  </li>
                  <li>
                    <a href="#">EVENTS</a>
                  </li>
                  <li>
                    <a href="#">PROJECTS</a>
                  </li>
                  <li>
                    <a href="#">BLOCK</a>
                  </li>
                  <li>
                    <a href="#">WORKS</a>
                  </li>
                </ul>
              </aside>
            </li>
          </ul>
        </nav>
        <section id="heroSection">
          <img src={kshitiz} alt="kshitiz potrait" id="myPotrait"></img>
          <article>
            <div
              id="my-introduction-heading"
              j
              className="animate__animated animate__fadeInDown"
            >
              <h2 className="playfair_italic_500">
                <i>Kshitiz</i>
              </h2>
              <h1 className="playfair_300">SHAH</h1>
              <h4 className="montserrat_300">WEBSITE OF THE Developer</h4>
            </div>
          </article>
        </section>

        <section id="BiographySection">
          <div id="biography--left-Division">
            <img src={one} alt="number one potrait"></img>
            <ul className="montserrat_300">
              <li className="active">
                <a id="aboutmeMenu">ABOUT ME</a>
              </li>
              <li>
                <a id="beginningMenu">BEGINNING</a>
              </li>
              <li>
                <a id="thefirstMenu">THE FIRST BOOK</a>
              </li>
              <li>
                <a id="careerMenu">MY CAREER</a>
              </li>
            </ul>
          </div>
          <div id="biography--right-Division">
            <ul>
              <li id="aboutme">
                <h4 className="montserrat_300">ABOUT ME</h4>
                <h1 className="playfair_300">My biography</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">
                    Hey! My name is Kshitiz and I'm front-end Webdeveloper. I
                    develop high quality websites,webapp.I am expert in
                    HTML,CSS,SCSS,React,Javascript.I express
                    feelings,expressions,and quality through my websites.I find
                    my inspiration in diving into people's eyes,souls,during our
                    communication with each other.My works are full of
                    breathtaking quality and strongly near to perfection.
                  </p>
                  <br></br>
                  <p className="lato_400">
                    I was born in Kathmandu,Nepal and have been living here for
                    18 years.I studied Computer Science (Physics Major) in
                    Little Angel's College,Hattiban. From the age of 15 I
                    decided to be the FRONT END DEVELOPER.I managed to land my
                    job at the age of 16 for an Educational Organization with a
                    website for a secondary school of my home town.From that
                    time I have worked for 3 clients for their startups and
                    working on other projects.
                  </p>
                </article>
              </li>

              {/* -----------------------------------BEGINING-------------------------  */}
              <li id="beginning">
                <h4 className="montserrat_300">BEGINNING</h4>
                <h1 className="playfair_300">My biography</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">this is the beginnning</p>
                  <br></br>
                  <p className="lato_400">
                    I was born in Kathmandu,Nepal and have been living here for
                    18 years.I studied Computer Science (Physics Major) in
                    Little Angel's College,Hattiban. From the age of 15 I
                    decided to be the FRONT END DEVELOPER.I managed to land my
                    job at the age of 16 for an Educational Organization with a
                    website for a secondary school of my home town.From that
                    time I have worked for 3 clients for their startups and
                    working on other projects.
                  </p>
                </article>
              </li>
              {/* -------------------------------------------------First Project-----------------  */}

              <li id="thefirst">
                <h4 className="montserrat_300">FIRST PROJECT</h4>
                <h1 className="playfair_300">My biography</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">
                    Hey! My name is Kshitiz and I'm front-end Webdeveloper. I
                    THIS IS FIRST
                  </p>
                  <br></br>
                  <p className="lato_400">
                    I was born in Kathmandu,Nepal and have been living here for
                    18 years.I studied Computer Science (Physics Major) in
                    Little Angel's College,Hattiban. From the age of 15 I
                    decided to be the FRONT END DEVELOPER.I managed to land my
                    job at the age of 16 for an Educational Organization with a
                    website for a secondary school of my home town.From that
                    time I have worked for 3 clients for their startups and
                    working on other projects.
                  </p>
                </article>
              </li>
              {/* ---------------------------------------------------My Career-------------------   */}
              <li id="career">
                <h4 className="montserrat_300">MY CAREER</h4>
                <h1 className="playfair_300">My biography</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">THIS IS CAREER</p>
                  <br></br>
                  <p className="lato_400">
                    I was born in Kathmandu,Nepal and have been living here for
                    18 years.I studied Computer Science (Physics Major) in
                    Little Angel's College,Hattiban. From the age of 15 I
                    decided to be the FRONT END DEVELOPER.I managed to land my
                    job at the age of 16 for an Educational Organization with a
                    website for a secondary school of my home town.From that
                    time I have worked for 3 clients for their startups and
                    working on other projects.
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </section>
        {/* ------------------------------------------------------  */}
        <section id="bestWorkSection">
          <div id="leftSection">
            <article>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">MY BESTWORKS</h1>
              <hr></hr>
              <div id="blueRectForTwo"></div>
            </article>
          </div>
          <div id="rightSection">
            <img src={two} alt=" number two potrait"></img>
          </div>
        </section>
        {/* -----------------------------------------------------------------  */}
        <section id="projectSection">
          <div id="projectsDivision">
            <div className="card">
              <img src={projectOne} alt="first project potrait"></img>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">MY BESTWORKS</h1>
              <hr></hr>
              <h3 className="montserrat_300">LATEST WORKS</h3>
            </div>
            <div className="card">
              <img src={projectOne} alt="first project potrait"></img>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">MY BESTWORKS</h1>
              <hr></hr>
              <h3 className="montserrat_300">LATEST WORKS</h3>
            </div>
            <div className="card">
              <img src={projectOne} alt="first project potrait"></img>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">MY BESTWORKS</h1>
              <hr></hr>
              <h3 className="montserrat_300">LATEST WORKS</h3>
            </div>
          </div>
          <div id="viewAllBtnDivision">
            <button>VIEW ALL</button>
          </div>
        </section>

        {/* ----------------------------------------------------------------  */}
        <div id="contactMeSectionContainer">
          <section id="contactMeSection">
            <div id="leftSection">
              <h3 className="playfair_italic_500">
                <i>Reach me out</i>
              </h3>
              <h1 className="playfair_400">
                <b>Contact me</b>
              </h1>
              <h2 className="montserrat_300">kshitiz.stha11@gmail.com</h2>
              <h4>7am - 11pm</h4>
            </div>
            <div id="rightSection">
              <img src={mom} alt="stylish person potrait"></img>
            </div>
          </section>
        </div>
        {/* -----------------------------------------------------------------------------------  */}

        <section id="BiographySection">
          <div id="biography--left-Division">
            <img src={three} alt="number one potrait"></img>
          </div>
          <div id="biography--right-Division">
            <ul>
              <li id="aboutme">
                <h4 className="montserrat_300">WORK SECTION</h4>
                <h1 className="playfair_300">REAL LIFE PROJECTS</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">
                    Hey! My name is Kshitiz and I'm front-end Webdeveloper. I
                    develop high quality websites,webapp.I am expert in
                    HTML,CSS,SCSS,React,Javascript.I express
                    feelings,expressions,and quality through my websites.I find
                    my inspiration in diving into people's eyes,souls,during our
                    communication with each other.My works are full of
                    breathtaking quality and strongly near to perfection.
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </section>

        <section id="statistics-section">
          <div className="statistics-card">
            <p className="number">35</p>
            <div className="blueVerticleLineContainer">
              <div className="blueVerticleLine"></div>
            </div>
            <div className="logoContainer">
              <img src={statisticsLogoOne} alt="icon potrait"></img>
            </div>
            <h2 class="poppins_300">TOTAL WEBSITES</h2>
          </div>
          <div className="statistics-card">
            <p className="number">4</p>
            <div className="blueVerticleLineContainer">
              <div className="blueVerticleLine"></div>
            </div>
            <div className="logoContainer">
              <img src={statisticsLogoTwo} alt="icon potrait"></img>
            </div>
            <h2 class="poppins_300">CLIENTS</h2>
          </div>
          <div className="statistics-card">
            <p className="number">153</p>
            <div className="blueVerticleLineContainer">
              <div className="blueVerticleLine"></div>
            </div>
            <div className="logoContainer">
              <img src={statisticsLogoThree} alt="icon potrait"></img>
            </div>
            <h2 class="poppins_300">WORKING HOURS</h2>
          </div>
          <div className="statistics-card">
            <p className="number">356</p>
            <div className="blueVerticleLineContainer">
              <div className="blueVerticleLine"></div>
            </div>
            <div className="logoContainer">
              <img src={statisticsLogoFour} alt="icon potrait"></img>
            </div>
            <h2 class="poppins_300">COFFEE</h2>
          </div>
        </section>

        <section id="bestWorkSection">
          <div id="leftSection">
            <article>
              <h4 className="montserrat_300">ABOUT ME</h4>
              <h1 className="playfair_300">INTERESTS</h1>
              <hr></hr>
              <div id="blueRectForTwo"></div>
            </article>
          </div>
          <div id="rightSection">
            <img src={four} alt=" number two potrait"></img>
          </div>
        </section>
        <section id="interestContainer">
          <div id="interestBlock">
            <div id="leftContainer">
              <img src={bookPotrait} alt="book hold by single hand"></img>
            </div>
            <div id="rightContainer">
              <h1 className="playfair_300">
                FROM TROUBLED DREAMS.
                <br />I FOUND MYSELF TRANSFORMED <br />
                IN MY PASSION INTO
              </h1>
            </div>
          </div>
        </section>
        <footer>
          <h3>GET IN TOUCH</h3>
          <h2 className="playfair_300">CONTACT ME</h2>
          <hr></hr>
          <input></input>
          <div id="buttonContainer">
            <button className="socialBtn">FB</button>
            <button className="socialBtn">INSTAGRAM</button>
            <h4>2021 Powered by:Crocoblock</h4>
            <h5>
              Inspired By
              <a href="https://demo.crocoblock.com/rg/">demo.crocoblock.com</a>
            </h5>
            <h1>BUILT BY KSHTIZ</h1>
          </div>
        </footer>
      </main>
    </>
  );
}
