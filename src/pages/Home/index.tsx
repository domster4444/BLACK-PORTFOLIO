import { FC, ReactElement, useState, useEffect } from 'react';
import StackCard from 'components/StackCard';

// todo :react icons

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';

//? libs
//@ts-ignore
import Fade from 'react-reveal/Fade';
import { useLoadingContext } from 'react-router-loading';

//? Import of images
import kshitiz from 'img/kshitiz.png';
import one from 'img/one.png';
import two from 'img/two.png';
import three from 'img/three.png';
import four from 'img/four.png';
import projectOne from 'img/projectOne.png';
import projectTwo from 'img/projectTwo.png';
import projectThree from 'img/projectThree.png';
import projectFour from 'img/projectFour.png';
import projectFive from 'img/projectFive.png';
import projectSix from 'img/projectSix.png';
import statisticsLogoOne from 'img/statistics-logo-one.png';
import statisticsLogoTwo from 'img/statistics-logo-two.png';
import statisticsLogoThree from 'img/statistics-logo-three.png';
import statisticsLogoFour from 'img/statistics-logo-four.png';
import bookPotrait from 'img/book-potrait.png';
import StatsCard from 'components/StatCard';
import ProjectCard from 'components/ProjectCard';
import ContactBanner from 'components/ContactBanner';
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

  const SocialHandleContainer = styled.div`
    @media (max-width: 770px) {
      display: none;
    }
    svg {
      border-radius: 1rem;
      cursor: pointer;
      /* background: red; */
      padding: 1rem;
      &:hover {
        box-shadow: 0px 0px 44px -6px black;
        background-color: #191919;

        color: #5ec7c8 !important;
      }
    }
  `;

  const SocialHandleLine = styled.hr`
    position: fixed;
    margin: 2rem 0rem;
    border: 1px solid #333333;
    height: 40vh;
    z-index: 100;
    bottom: 0;
    left: 5rem;
  `;

  return (
    <>
      <SocialHandleContainer>
        <SocialHandleLine></SocialHandleLine>

        <a href="https://www.github.com/domster4444" target="_blank">
          <FiGithub
            style={{
              position: 'fixed',
              zIndex: 100,
              color: 'white',
              fontSize: '4rem',
              left: '3rem',
              bottom: '53rem', // 48+5 = 53 which is been used here
            }}
          ></FiGithub>
        </a>

        <a href="https://www.linkedin.com/in/kshitizshah7/" target="_blank">
          <FiLinkedin
            style={{
              position: 'fixed',
              zIndex: 100,
              color: 'white',
              fontSize: '4rem',
              left: '3rem',
              bottom: '48rem', // 48 + 5 = 53 will be used for another's position increment by 5rem
            }}
          ></FiLinkedin>
        </a>

        <a href="mailto:kshitizshah79@gmail.com">
          <CgMail
            style={{
              position: 'fixed',
              zIndex: 100,
              color: 'white',
              fontSize: '4rem',
              left: '3rem',
              bottom: '43rem', // 43 + 5 = 48 will be used for another's position increment by 5rem
            }}
          ></CgMail>
        </a>
      </SocialHandleContainer>

      {/* ==========================hero section starts here =============== */}
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
              <h4 className="montserrat_300">MERN STACK Developer</h4>
            </div>
          </article>
        </section>
      </Fade>

      {/* ==========================hero section ends here =============== */}

      {/* ======================================== about me section  starts here */}
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
                  HOBBIES
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
                  INTEREST
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
                  BIOGRAPHY
                </a>
              </li>
            </ul>
          </div>
          <div id="biography--right-Division">
            {/* --------------------------------about me ------------------------- */}
            <ul>
              {showBioSection[1] && (
                <Fade>
                  <li id="aboutme">
                    <h4 className="montserrat_300">ABOUT </h4>
                    <h1 className="playfair_300">About Me</h1>
                    <hr></hr>
                    <div className="blue-line-box"></div>
                    <article>
                      <p className="lato_400">
                        Hello! My name is Kshitiz and I enjoy creating things
                        that live on the internet. My interest in web
                        development started back in 2016 when I decided to try
                        editing custom website themes — turns out hacking
                        together a custom button taught me a lot about HTML &
                        CSS!
                      </p>
                      <br />
                      <p className="lato_400">
                        Fast-forward to today, and I’ve had the privilege of
                        building awesome websites. My main focus these days is
                        building accessible, inclusive websites for a variety of
                        clients.
                      </p>
                    </article>
                  </li>
                </Fade>
              )}

              {/* -----------------------------------Hobbies-------------------------  */}
              {showBioSection[2] && (
                <Fade>
                  <li id="beginning">
                    <h4 className="montserrat_300">HOBBIES </h4>
                    <h1 className="playfair_300">My Hobbies</h1>
                    <hr></hr>
                    <div className="blue-line-box"></div>
                    <article>
                      <p className="lato_400">Comming soon ...</p>
                    </article>
                  </li>
                </Fade>
              )}
              {/* -------------------------------------------------INTERESTS-----------------  */}
              {showBioSection[3] && (
                <Fade>
                  <li id="thefirst">
                    <h4 className="montserrat_300">INTERESTS</h4>
                    <h1 className="playfair_300">My Interests</h1>
                    <hr></hr>
                    <div className="blue-line-box"></div>
                    <article>
                      <p className="lato_400">comming soon ...</p>
                    </article>
                  </li>
                </Fade>
              )}

              {/* ---------------------------------------------------My Biography-------------------   */}

              {showBioSection[4] && (
                <Fade>
                  <li id="career">
                    <h4 className="montserrat_300"> BIOGRAPHY</h4>
                    <h1 className="playfair_300">My Biography</h1>
                    <hr></hr>
                    <div className="blue-line-box"></div>
                    <article>
                      <p className="lato_400">comming soon ... </p>
                    </article>
                  </li>
                </Fade>
              )}
            </ul>
          </div>
        </section>
      </Fade>
      {/* ======================================== about me section ends here  */}

      {/* // ================================project section starts here  */}
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
              caseStudyUrl="0"
              // videoUrl="#"
              codeURL="https://github.com/domster4444/portfolio-client"
              tag="latest"
              title="hexgrade.com"
              comment="Online Platform To Generate Portfolio Website For Students & IT Professionals"
              websiteUrl="https://www.hexgrade.com"
              projectImg={projectOne}
            />
            <ProjectCard
              caseStudyUrl="1"
              // videoUrl="#"
              codeURL="https://github.com/domster4444/black-portfolio"
              tag="latest"
              title="portfolio website"
              comment="My Personal Portfolio Website to showcase my skills and work experience"
              websiteUrl="https://blackkshitiz.netlify.com"
              projectImg={projectTwo}
            />
            <ProjectCard
              caseStudyUrl="3"
              // videoUrl="#"
              codeURL="https://github.com/domster4444/elegant-landing-page"
              tag="latest"
              title="landing page"
              comment="Landing page for business website."
              websiteUrl="https://eleganttheme.netlify.app/"
              projectImg={projectThree}
            />
            <ProjectCard
              caseStudyUrl="4"
              // videoUrl="#"
              codeURL="https://github.com/domster4444/design-app-landing-page"
              tag="latest"
              title="landing page"
              comment="Landing page for app website."
              websiteUrl="https://kshitizdesign.netlify.app/"
              projectImg={projectFour}
            />
            <ProjectCard
              caseStudyUrl="5"
              // videoUrl="#"
              codeURL="https://github.com/domster4444/blogr-landing-page"
              tag="latest"
              title="landing page"
              comment="Programming Challenge that I took to convert given design into html/css."
              websiteUrl="https://kshitizblogr.netlify.app/"
              projectImg={projectFive}
            />
            <ProjectCard
              caseStudyUrl="6"
              // videoUrl="#"
              codeURL="https://github.com/Deerwalk-Developers-Community/Club-Management-Portal"
              tag="latest"
              title="opensource project"
              comment="Website for Deerwalk Developer Commnunity."
              websiteUrl="https://ddc.deerwalk.edu.np/"
              projectImg={projectSix}
            />
          </div>

          <div id="viewAllBtnDivision">
            <SecondaryBtn name="View More Projects" />
          </div>
        </section>
      </Fade>

      {/* ================================ projects section ends here  */}

      {/* ================================  career section section starts here  */}
      <Fade bottom>
        <section id="BiographySection">
          <div id="biography--left-Division">
            <img src={three} alt="number one potrait"></img>
          </div>
          <div id="biography--right-Division">
            <ul>
              <li id="aboutme">
                <h4 className="montserrat_300">CAREER</h4>
                <h1 className="playfair_300">Want to Hire Me ?</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">
                    I am always open to new opportunities, my inbox is always
                    open to help you . Whether you have a question or want me to
                    help you with your website , I’ll try my best to get back to
                    you!
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </Fade>

      {/* ================================  career section section ends here  */}
      {/* ================================  techstack section starts  here  */}

      <Fade bottom>
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
            <StackCard
              iconName=" github"
              iconURL=" https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            <StackCard
              iconName=" html5"
              iconURL="
            https://cdn-icons-png.flaticon.com/512/732/732212.png"
            />
            <StackCard
              iconName=" css3"
              iconURL="
            https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png     
          "
            />
            <StackCard
              iconName=" Javascript"
              iconURL="
            https://png.pngitem.com/pimgs/s/171-1718042_javascript-logo-png-transparent-png.png
          "
            />
            <StackCard
              iconName="NodeJS"
              iconURL="
            https://iconape.com/wp-content/png_logo_vector/node-js-2.png
          "
            />
            <StackCard
              iconName="ExpressJS"
              iconURL="
          data:image/png;base64,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
            "
            />
            <StackCard
              iconName="MONGODB"
              iconURL="
            https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png
            "
            />
            <StackCard
              iconName="Styled Components"
              iconURL="
            https://avatars.githubusercontent.com/u/20658825?s=200&v=4
            "
            />

            <StackCard
              iconName="Typescript"
              iconURL="
            https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png
            "
            />
            <StackCard
              iconName="SCSS"
              iconURL="
            https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png
            "
            />
            <StackCard
              iconName="NextJs"
              iconURL="
            https://cdn.aglty.io/agility-cms-docs/logos/next-js-logo-8FCFF51DD2-seeklogo.com.png
            "
            />
            <StackCard
              iconName="PostMan"
              iconURL="
            https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png
            "
            />
            <StackCard
              iconName="ReactJs"
              iconURL="
            https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png
            "
            />
            <StackCard
              iconName="ReduxJS"
              iconURL="
            https://miro.medium.com/max/500/1*tOI6UC5EaS2fPItCesI-AQ.png
            "
            />
            <StackCard
              iconName="NPM"
              iconURL="
            https://cdn.iconscout.com/icon/free/png-256/npm-3-1175132.png
            "
            />
            <StackCard
              iconName="Jest"
              iconURL="
            https://miro.medium.com/max/600/1*i37IyHf6vnhqWIA9osxU3w.png
            "
            />
            <StackCard
              iconName="VS Code"
              iconURL="
            https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png
            "
            />
            <StackCard
              iconName="Auth0"
              iconURL="
            
data:image/png;base64,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


            "
            />
            <StackCard
              iconName="Gsap"
              iconURL="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg           "
            />
          </div>
        </TechStackIconContianer>
      </Fade>
      {/* ================================  techstack section ends here  */}

      <Fade bottom>
        <section id="statistics-section">
          <StatsCard
            title="TOTAL WEBSITE"
            value={86}
            icon={statisticsLogoOne}
          />

          <StatsCard title="CLIENTS" value={12} icon={statisticsLogoTwo} />

          <StatsCard
            title="WORKING HOUR"
            value={256}
            icon={statisticsLogoThree}
          />
          <StatsCard title="COFFEE" value={140} icon={statisticsLogoFour} />
        </section>
      </Fade>

      {/* ==========================contact section starts here   */}

      <ContactBanner />

      {/* ==========================contact section ends here   */}
      {/* ==========================interest  quote section  */}
      <Fade bottom>
        <section id="interestContainer">
          <div id="interestBlock">
            <div id="leftContainer">
              <img src={bookPotrait} alt="book hold by single hand"></img>
            </div>
            <div id="rightContainer">
              <h1 className="playfair_300">
                <span
                  style={{
                    fontSize: '6rem',
                  }}
                >
                  ❛ &nbsp;
                </span>
                DO WHAT YOU LOVE
                <br />
                LOVE WHAT YOU DO
                <span
                  style={{
                    fontSize: '6rem',
                  }}
                >
                  &nbsp; ❜
                </span>
              </h1>
            </div>
          </div>
        </section>
      </Fade>

      {/* ======================================================== interest quote section ends here   */}
    </>
  );
};

export default Home;
