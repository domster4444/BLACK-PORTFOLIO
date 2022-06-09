/**
 * @typography_resource https://text.imageonline.co/
 * @mockup_resource https://shotsnapp.com/
 * @mockup_resource https://mockuphone.com/device?type=ios#iphone13
 * https://mockupbro.com/mockup/standing-blu-ray-disk-with-cover-mockup
 */

import { FC, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import projectTwoMock from 'img/projectTwoMock.png';
import typography from 'img/portfolioProject/typography.png';
import SecondaryBtn from 'components/Button';

import { useParams } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';

//! react rotating text-lib for typting animation
//@ts-ignore
import ReactRotatingText from 'react-rotating-text';

import jsonData from './data.json';

import {
  DownloadLink,
  CaseStudyHeroContainer,
  CaseStudyTitle,
  MockImgContainer,
  MockImg,
  Container,
  TagContainer,
  Block,
  Tag,
  ColorPalletContainer,
  ColorPallet,
  AnimatedText,
} from './CaseStudy.style';

interface IData {
  mockUrl: string;
  name: string;
  description: string[];
  role: string;
  context: string;
  period: string;
  colors: string[];
  typography: {
    firstImgUrl: string;
    secondImgUrl: string;
  };
  downloadLink: string;
}

type idParam = {
  id: string;
};

const CaseStudy: FC = (): ReactElement => {
  const { id } = useParams<idParam>();
  const loadingContext = useLoadingContext();
  loadingContext.done();

  const [data, setData] = useState<null | IData>(null);
  console.log('before====== useEffect, data: ', data);
  useEffect(() => {
    window.scrollTo(0, 0);
    //@ts-ignore
    setData(jsonData[id]);
    console.log('after====== useEffect, data: ', data);
  }, []);

  if (data === null) {
    return (
      <h1
        style={{
          fontSize: '11rem',
          color: 'blue',
        }}
      >
        Loading...
      </h1>
    );
  }
  return (
    <>
      <span className="Sphere"></span>
      <main>
        <Container>
          <Block>
            <CaseStudyHeroContainer>
              <div>
                <CaseStudyTitle className="playfair_400">
                  <strong>{data.name}</strong> <br />
                  <AnimatedText className="libre_italic">
                    <ReactRotatingText items={data.description} />
                  </AnimatedText>
                </CaseStudyTitle>
              </div>

              <MockImgContainer>
                <MockImg src={data.mockUrl} alt="" />
              </MockImgContainer>
            </CaseStudyHeroContainer>

            <TagContainer>
              <Tag>
                <span>ROLE</span> {data.role}
              </Tag>
              <Tag>
                <span>CONTEXT</span> {data.context}
              </Tag>
              <Tag>
                <span>PERIOD</span> {data.period}
              </Tag>
            </TagContainer>

            <ColorPalletContainer>
              {data.colors &&
                data.colors.map((color: string, index: number) => (
                  <ColorPallet key={index} color={color}>
                    <h4 className="poppins_300">{color}</h4>
                  </ColorPallet>
                ))}
            </ColorPalletContainer>

            <section
              style={{
                margin: '10rem 0rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h2
                className="playfair_400"
                style={{
                  margin: '5rem 0rem',
                  fontSize: '3rem',
                  color: '#5ec7c8',
                }}
              >
                Typography
              </h2>
              <div
                className="typo_container"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <img src={typography} alt="" height={180} />
                </div>
                <div>
                  <img src={typography} alt="" height={180} />
                </div>
              </div>
            </section>
            <a
              href="./CaseStudy.tsx
            "
              download
            >
              <SecondaryBtn name="Download Documents" />
            </a>
          </Block>
        </Container>
      </main>
    </>
  );
};

export default CaseStudy;
