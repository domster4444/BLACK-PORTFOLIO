import React, { useEffect, FC, ReactElement } from 'react';
//@ts-ignore
import Fade from 'react-reveal/Fade';

const Footer: FC = (): ReactElement => {
  return (
    <>
      <Fade bottom>
        <footer>
          <h3>GET IN TOUCH</h3>
          <h2 className="playfair_300">CONTACT ME</h2>
          <hr></hr>
          <div className="footer_rect"></div>
          <input></input>
          <div id="buttonContainer">
            <a href="https://www.facebook.com/ks.hitiz.735/">
              <button id="fbBtn" className="socialBtn"></button>
            </a>

            <a href="https://www.instagram.com/kshitiz77777777/">
              <button id="instaBtn" className="socialBtn"></button>
            </a>
            {/* <h4>2021 Powered by:Crocoblock</h4>
            <h5>
              Inspired By @&nbsp;
              <a href="https://demo.crocoblock.com/rg/">demo.crocoblock.com</a>
            </h5>
            <h1>BUILT BY KSHTIZ</h1> */}
          </div>
        </footer>
      </Fade>
    </>
  );
};

export default Footer;
