/**
 * @mockup_resource https://shotsnapp.com/
 * @mockup_resource https://mockuphone.com/device?type=ios#iphone13
 * https://mockupbro.com/mockup/standing-blu-ray-disk-with-cover-mockup
 */

import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import projectTwoMock from 'img/projectTwoMock.png';

//! react rotating text-lib for typting animation
//@ts-ignore
import ReactRotatingText from 'react-rotating-text';

const CaseStudyHeroContainer = styled.div`
  margin: 18rem 0rem;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
  }
`;
const CaseStudyTitle = styled.h1`
  position: relative;
  color: white;
  font-size: 4vw;
  @media (max-width: 768px) {
    font-size: 8rem;
  }
  span {
    position: absolute;
    font-size: 2.2rem;
    color: #5ec7c8;
    left: 1rem;
    margin-top: 1rem;
  }
`;

const MockImgContainer = styled.div`
  /* background: red; */
  padding: 0rem 5rem;
  @media (max-width: 768px) {
    padding: 0rem 0rem;
    width: 80%;
  }
  width: 45%;
  @media (max-width: 1268px) {
    padding: 0rem 0rem;
    width: 55%;
  }
`;
const MockImg = styled.img`
  width: 100%;
  margin-top: 4rem;
  object-fit: cover;
  object-position: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Block = styled.div`
  width: 66%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TagContainer = styled.div`
  padding: 1rem 0rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Tag = styled.div`
  font-weight: bold;
  span {
    color: #5ec7c8;
  }

  font-size: 1.5rem;
  color: white;
`;

const ColorPalletContainer = styled.div`
  margin-top: 12rem;
  display: flex;
  justify-content: space-evenly;
`;

interface ColorPalletProps {
  color: string;
}
const ColorPallet = styled.div<ColorPalletProps>`
  border-radius: 50%;
  cursor: pointer;
  background: ${(props: ColorPalletProps) =>
    props.color ? props.color : 'transparent'};
  height: 9rem;
  width: 9rem;
  transition: box-shadow ease-in-out 300ms;
  /*  for black shadow--dark mode */
  box-shadow: 1px 2px 11px 0px
    ${(props: ColorPalletProps) => (props.color ? props.color : 'transparent')};
  &:hover {
    transition: box-shadow ease-in-out 300ms;
    box-shadow: 0px 6px 16px 0px
      ${(props: ColorPalletProps) =>
        props.color ? props.color : 'transparent'};
  }
  position: relative;

  h4 {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: -3.8rem;
    color: white;
    font-size: 1.7rem;
  }
`;

const AnimatedText = styled.span`
  width: 100%;
`;
const CaseStudy: FC = (): ReactElement => {
  return (
    <>
      <span className="Sphere"></span>
      <main>
        <Container>
          <Block>
            <CaseStudyHeroContainer>
              <div>
                <CaseStudyTitle className="playfair_400">
                  <strong>Portfoilio Site</strong> <br />
                  <AnimatedText className="libre_italic">
                    <ReactRotatingText
                      items={[
                        'Landing Page For App Website.',
                        'Built with love',
                      ]}
                    />
                  </AnimatedText>
                </CaseStudyTitle>
              </div>

              <MockImgContainer>
                <MockImg src={projectTwoMock} alt="" />
              </MockImgContainer>
            </CaseStudyHeroContainer>

            <TagContainer>
              <Tag>
                <span>ROLE</span> UI/UX DEVELOPER
              </Tag>
              <Tag>
                <span>CONTEXT</span> PERSONAL PROJECT
              </Tag>
              <Tag>
                <span>PERIOD</span> 2018
              </Tag>
            </TagContainer>

            <ColorPalletContainer>
              <ColorPallet color="#5ec7c8">
                <h4 className="poppins_300">#5ec7c8</h4>
              </ColorPallet>
              <ColorPallet color="#171717">
                <h4 className="poppins_300">#171717</h4>
              </ColorPallet>
              <ColorPallet color="#333333">
                <h4 className="poppins_300">#333333</h4>
              </ColorPallet>
              <ColorPallet color="black">
                <h4 className="poppins_300">black</h4>
              </ColorPallet>
              <ColorPallet color="white">
                <h4 className="poppins_300">white</h4>
              </ColorPallet>
            </ColorPalletContainer>
          </Block>
        </Container>
      </main>
    </>
  );
};

export default CaseStudy;
