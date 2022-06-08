import { FC, ReactElement } from 'react';
import mom from 'img/mom.png';

//@ts-ignore
import Fade from 'react-reveal/Fade';

const ContactBanner: FC = (): ReactElement => {
  return (
    <>
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
              <h2 className="montserrat_300">kshitizshah79@gmail.com</h2>
              <h4>7am - 11pm</h4>
            </div>
            <div id="rightSection">
              <img src={mom} alt="stylish person potrait"></img>
            </div>
          </section>
        </div>
      </Fade>
    </>
  );
};

export default ContactBanner;
