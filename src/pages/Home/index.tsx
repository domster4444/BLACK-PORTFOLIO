import React, { useEffect, FC, ReactElement, useState } from 'react';

//? libs
//@ts-ignore
import Fade from 'react-reveal/Fade';

//? Import of images
import kshitiz from 'img/kshitiz.png';
import one from 'img/one.png';
import two from 'img/two.png';
import three from 'img/three.png';
import four from 'img/four.png';
import projectOne from 'img/projectOne.png';
import projectTwo from 'img/projectTwo.png';
import projectThree from 'img/projectThree.png';
import mom from 'img/mom.png';
import statisticsLogoOne from 'img/statistics-logo-one.png';
import statisticsLogoTwo from 'img/statistics-logo-two.png';
import statisticsLogoThree from 'img/statistics-logo-three.png';
import statisticsLogoFour from 'img/statistics-logo-four.png';
import bookPotrait from 'img/book-potrait.png';
import StatsCard from 'components/StatCard';
import ProjectCard from 'components/ProjectCard';
import { SecondaryBtn } from 'components/Button';

interface IProps {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
}

const Home: FC = (): ReactElement => {
  const [showBioSection, setShowBioSection] = useState<IProps>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  // useEffect(() => {
  //?---------------------------- SIDEBAR+HAMBURGER+BLURSCREEN
  // let blurblank = document.getElementById('blurblank') as HTMLDivElement;
  // let cross = document.getElementById('exit-aside') as HTMLDivElement;
  // let hamburger = document.getElementById('hamburger') as HTMLDivElement;
  // let aside = document.getElementById('sideBar') as HTMLElement;
  // hamburger.addEventListener('click', () => {
  //   aside.style.visibility = `visible`;
  //   aside.style.height = `100vh`;
  //   blurblank.style.display = 'block';
  // });
  // blurblank.addEventListener('click', () => {
  //   aside.style.visibility = `hidden`;
  //   aside.style.height = `40vh`;
  //   blurblank.style.display = 'none';
  // });

  // cross.addEventListener('click', () => {
  //   aside.style.visibility = `hidden`;
  //   aside.style.height = `40vh`;
  //   blurblank.style.display = 'none';
  // });

  //?---------------------------- SIDEBAR+HAMBURGER+BLURSCREEN

  // -----------------------------------------SECTION2 SWITCHING IN BIOGRAPHY SECTION

  //?  menus  to add event listeners
  // let aboutmeMenu = document.getElementById('aboutmeMenu') as HTMLElement;
  // let beginningMenu = document.getElementById('beginningMenu') as HTMLElement;
  // let thefirstMenu = document.getElementById('thefirstMenu') as HTMLElement;
  // let careerMenu = document.getElementById('careerMenu') as HTMLElement;

  //? -----------------------INFORMATIONS-----------------
  // let aboutme = document.getElementById('aboutme') as HTMLElement;
  // let beginning = document.getElementById('beginning') as HTMLElement;
  // let thefirst = document.getElementById('thefirst') as HTMLElement;
  // let career = document.getElementById('career') as HTMLElement;

  // beginning.style.display = 'none';
  // thefirst.style.display = 'none';
  // career.style.display = 'none';
  // aboutmeMenu.addEventListener('click', () => {
  // ?---added--
  // aboutme.style.display = 'block';
  //?removed

  //   thefirst.style.display = 'none';
  //   career.style.display = 'none';
  //   beginning.style.display = 'none';
  // });

  // beginningMenu.addEventListener('click', () => {
  // ?---added--
  // beginning.style.display = 'block';
  //?removed
  // aboutme.style.display = 'none';
  // thefirst.style.display = 'none';
  // career.style.display = 'none';
  // });

  // thefirstMenu.addEventListener('click', () => {
  // ?---added--
  // thefirst.style.display = 'block';
  //?removed
  //   aboutme.style.display = 'none';
  //   beginning.style.display = 'none';
  //   career.style.display = 'none';
  // });

  //   careerMenu.addEventListener('click', () => {
  // ?---added--
  //     career.style.display = 'block';
  //     career.style.marginTop = '1rem';
  //     //?removed
  //     aboutme.style.display = 'none';
  //     beginning.style.display = 'none';
  //     thefirst.style.display = 'none';
  //   });
  // }, []);

  return (
    <>
      <Fade bottom>
        <section id="heroSection">
          <img src={kshitiz} alt="kshitiz potrait" id="myPotrait"></img>
          <article>
            <div
              id="my-introduction-heading"
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
      </Fade>
      <Fade bottom>
        <section id="BiographySection">
          <div id="biography--left-Division">
            <img src={one} alt="number one potrait"></img>
            <ul className="montserrat_300">
              <li className="active">
                <a
                  id="aboutmeMenu"
                  className={showBioSection[1] ? 'active' : ''}
                  href="##biography--right-Division"
                  onClick={() => {
                    setShowBioSection({
                      1: true,
                      2: false,
                      3: false,
                      4: false,
                    });
                  }}
                >
                  ABOUT ME
                </a>
              </li>
              <li>
                <a
                  className={showBioSection[2] ? 'active' : ''}
                  id="beginningMenu"
                  href="##biography--right-Division"
                  onClick={() => {
                    setShowBioSection({
                      1: false,
                      2: true,
                      3: false,
                      4: false,
                    });
                  }}
                >
                  BEGINNING
                </a>
              </li>
              <li>
                <a
                  className={showBioSection[3] ? 'active' : ''}
                  id="thefirstMenu"
                  href="##biography--right-Division"
                  onClick={() => {
                    setShowBioSection({
                      1: false,
                      2: false,
                      3: true,
                      4: false,
                    });
                  }}
                >
                  THE FIRST BOOK
                </a>
              </li>
              <li>
                <a
                  className={showBioSection[4] ? 'active' : ''}
                  id="careerMenu"
                  href="##biography--right-Division"
                  onClick={() => {
                    setShowBioSection({
                      1: false,
                      2: false,
                      3: false,
                      4: true,
                    });
                  }}
                >
                  MY CAREER
                </a>
              </li>
            </ul>
          </div>
          <div id="biography--right-Division">
            <ul>
              {showBioSection[1] && (
                <Fade right>
                  <li id="aboutme">
                    <h4 className="montserrat_300">ABOUT ME -1st</h4>
                    <h1 className="playfair_300">My biography</h1>
                    <hr></hr>
                    <div className="blue-line-box"></div>
                    <article>
                      <p className="lato_400">
                        Hey! My name is Kshitiz and I'm front-end Webdeveloper.
                        I develop high quality websites,webapp.I am expert in
                        HTML,CSS,SCSS,React,Javascript.
                      </p>
                      <br></br>
                      <p className="lato_400">
                        From that time I have worked for 3 clients for their
                        startups and working on other projects.
                      </p>
                    </article>
                  </li>
                </Fade>
              )}

              {/* -----------------------------------BEGINING-------------------------  */}
              {showBioSection[2] && (
                <Fade right>
                  <li id="beginning">
                    <h4 className="montserrat_300">BEGINNING -2nd</h4>
                    <h1 className="playfair_300">My biography</h1>
                    <hr></hr>
                    <div className="blue-line-box"></div>
                    <article>
                      <p className="lato_400">this is the beginnning</p>
                      <br></br>
                      <p className="lato_400">
                        I was born in Kathmandu,Nepal and have been living here
                        for 18 years.I studied Computer Science (Physics Major)
                        in Little Angel's College,Hattiban.
                      </p>
                    </article>
                  </li>
                </Fade>
              )}
              {/* -------------------------------------------------First Project-----------------  */}
              {showBioSection[3] && (
                <Fade right>
                  <li id="thefirst">
                    <h4 className="montserrat_300">FIRST PROJECT -3rd</h4>
                    <h1 className="playfair_300">My biography</h1>
                    <hr></hr>
                    <div className="blue-line-box"></div>
                    <article>
                      <p className="lato_400">
                        Hey! My name is Kshitiz and I'm front-end Webdeveloper.
                        I THIS IS FIRST
                      </p>
                      <br></br>
                      <p className="lato_400">
                        I was born in Kathmandu,Nepal and have been living here
                        for 18 years.I studied Computer Science (Physics Major)
                        in Little Angel's College,Hattiban. From the age of 15 I
                        decided to be the FRONT END DEVELOPER.I managed to land
                        my job at the age of 16 for an Educational Organization
                        with a website for a secondary school of my home
                        town.From that time I have worked for 3 clients for
                        their startups and working on other projects.
                      </p>
                    </article>
                  </li>
                </Fade>
              )}

              {/* ---------------------------------------------------My Career-------------------   */}

              {showBioSection[4] && (
                <Fade right>
                  <li id="career">
                    <h4 className="montserrat_300">MY CAREER -4th</h4>
                    <h1 className="playfair_300">My biography</h1>
                    <hr></hr>
                    <div className="blue-line-box"></div>
                    <article>
                      <p className="lato_400">THIS IS CAREER</p>
                      <br></br>
                      <p className="lato_400">
                        I was born in Kathmandu,Nepal and have been living here
                        for 18 years.I studied Computer Science (Physics Major)
                        in Little Angel's College,Hattiban. From the age of 15 I
                        decided to be the FRONT END DEVELOPER.I managed to land
                        my job at the age of 16 for an Educational Organization
                        with a website for a secondary school of my home
                        town.From that time I have worked for 3 clients for
                        their startups and working on other projects.
                      </p>
                    </article>
                  </li>
                </Fade>
              )}
            </ul>
          </div>
        </section>
      </Fade>
      <Fade bottom>
        <section id="bestWorkSection">
          <div id="leftSection">
            <article>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">PROJECTS</h1>
              <hr></hr>
              <div id="blueRectForTwo"></div>
            </article>
          </div>
          <div id="rightSection">
            <img src={two} alt=" number two potrait"></img>
          </div>
        </section>
      </Fade>
      <Fade bottom>
        <section id="projectSection">
          <div id="projectsDivision">
            {/* width  1902  */}
            {/* height  2058 */}
            <ProjectCard
              tag="latest"
              title="Hexgrade.COM"
              comment="Online Platform To Generate Portfolio Website For Students & IT Professionals"
              websiteUrl="https://www.hexgrade.com"
              projectImg={projectOne}
            />
            <ProjectCard
              tag="latest"
              title="portfolio website"
              comment="Online Platform To Generate Portfolio Website For Students & IT Professionals"
              websiteUrl="https://blackkshitiz.netlify.com"
              projectImg={projectTwo}
            />
          </div>

          <div id="viewAllBtnDivision">
            <SecondaryBtn name="View More Projects" />
          </div>
        </section>
      </Fade>
      <Fade bottom>
        <div id="contactMeSectionContainer" className="container_contact_me">
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
      </Fade>
      <Fade bottom>
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
      </Fade>
      <Fade bottom>
        <section id="statistics-section">
          <StatsCard
            title="TOTAL WEBSITE"
            value={10}
            icon={statisticsLogoOne}
          />

          <StatsCard title="CLIENTS" value={0} icon={statisticsLogoTwo} />

          <StatsCard
            title="WORKING HOUR"
            value={0}
            icon={statisticsLogoThree}
          />
          <StatsCard title="COFFEE" value={0} icon={statisticsLogoFour} />
        </section>
      </Fade>
      <Fade bottom>
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
      </Fade>

      <Fade bottom>
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
      </Fade>
    </>
  );
};

export default Home;
