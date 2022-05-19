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

import styled from 'styled-components';

interface IProps {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
}

// interest section style interface
const TechStackIconContianer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-color: red; */
  margin: 4rem 0rem;
  justify-content: center;
  div {
    /* background-color: blue; */
    width: 55%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  img {
    position: relative;
    overflow: hidden;
    margin: 0.5rem;
    border-radius: 3px;
    width: 60px;
    height: 65px;
    padding: 1rem;
    /* background-color: #191919; */
    background-color: #ffffff;
  }
`;

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
      {/* interest section begins here */}
      <section id="bestWorkSection">
        <div id="leftSection">
          <article>
            <h4 className="montserrat_300">ABOUT ME</h4>
            <h1 className="playfair_300">MY TECHSTACK</h1>
            <hr></hr>
            <div id="blueRectForTwo"></div>
          </article>
        </div>
        <div id="rightSection">
          <img src={four} alt=" number two potrait"></img>
        </div>
      </section>

      <TechStackIconContianer className="tech__stack__container">
        <div>
          <img
            src="
            
            
            https://cdn-icons-png.flaticon.com/512/25/25231.png         

            "
            alt="github icon"
          />
          <img
            src="
          
            https://cdn-icons-png.flaticon.com/512/732/732212.png
            "
            alt="html icon"
          />
          <img
            src="
          https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png     
          "
            alt="css icon"
          />
          <img
            src="
          https://png.pngitem.com/pimgs/s/171-1718042_javascript-logo-png-transparent-png.png
          "
            alt="js icon"
          />
          <img
            src="
          https://iconape.com/wp-content/png_logo_vector/node-js-2.png
        
          "
            alt="nodejs icon"
          />
          <img
            src="
       data:image/png;base64,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
          "
            alt="expressjs icon"
          />
          <img
            src="
          https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png
          "
            alt="expressjs icon"
          />
          <img
            src="
          https://avatars.githubusercontent.com/u/20658825?s=200&v=4
          "
            alt="styled  icon"
          />
          <img
            src="
          https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png
          "
            alt="typescrip icon"
          />
          <img
            src="
          https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png
          "
            alt="sass  icon"
          />
          <img
            src="
          https://cdn.aglty.io/agility-cms-docs/logos/next-js-logo-8FCFF51DD2-seeklogo.com.png
          "
            alt="nextjs  icon"
          />
          <img
            src="
          https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png
          "
            alt="postman icon"
          />
          <img
            src="
            https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png
            "
            alt="react icon"
          />
        </div>
      </TechStackIconContianer>
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
    </>
  );
};

export default Home;
