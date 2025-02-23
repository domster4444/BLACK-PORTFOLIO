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
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1shhz4CElSdpP5YmNwt9WiuhTts7qxudI/view?usp=sharing"
                >
                  <SecondaryBtn name="Download Resume" sm />
                </a>
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Toolbar;
