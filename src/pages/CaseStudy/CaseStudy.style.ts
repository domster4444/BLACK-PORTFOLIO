import styled, { css } from 'styled-components';
import { ColorPalletProps } from './interface';

export const DownloadLink = styled.a`
  color: #5ec7c8;
  margin: 5rem 0rem;
  font-size: 3rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const CaseStudyHeroContainer = styled.div`
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
export const CaseStudyTitle = styled.h1`
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

export const MockImgContainer = styled.div`
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
export const MockImg = styled.img`
  width: 100%;
  margin-top: 4rem;
  object-fit: cover;
  object-position: center;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Block = styled.div`
  width: 66%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TagContainer = styled.div`
  padding: 1rem 0rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Tag = styled.div`
  font-weight: bold;
  span {
    color: #5ec7c8;
  }

  font-size: 1.5rem;
  color: white;
`;

export const ColorPalletContainer = styled.div`
  margin-top: 12rem;
  display: flex;
  justify-content: space-evenly;
`;

export const ColorPallet = styled.div<ColorPalletProps>`
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

export const AnimatedText = styled.span`
  width: 100%;
`;
