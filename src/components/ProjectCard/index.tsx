import React, { FC, ReactElement, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { BiVideo } from 'react-icons/bi';
import styled, { css } from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  svg {
    padding: 0.75rem;
    &:hover {
      color: #5ec7c8;
    }
    font-size: 4.8rem;
    color: white;
  }
`;

interface CardWrapperProps {
  isHover: boolean;
}

const CardWrapper = styled.div<CardWrapperProps>`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: ${(props: CardWrapperProps) =>
    props.isHover ? 'transparent' : 'black'};
  ${(props: CardWrapperProps) =>
    props.isHover
      ? css`
          height: 0%;
          overflow: hidden;
          opacity: 0;
        `
      : css`
          overflow: hidden;
          height: 54.5%;
          opacity: 0.8;
        `};
  transition: all ease-in-out 350ms;
  width: 100%;
`;

const ProjectCardInnerBtnContainer = styled.button`
  width: 100%;
  background: transparent;
  display: flex;
  margin-bottom: 4rem;

  justify-content: space-evenly;
  a {
    &:hover {
      border-radius: 2rem;
      transition: all ease-in-out 300ms;
    }
    &:active {
      transform: scale(1.1);
      transition: scale ease-in-out 100ms;
    }
    cursor: pointer;
    width: 40%;
    color: black;
    background-color: white;
    border: 1px solid white;
    padding: 0.5rem 1rem;
    font-size: 2.4rem;
  }
`;

const ProjectCardInnerTitleContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  font-size: 3rem;
  padding-left: 3.4rem;
`;

interface IProps {
  projectImg: string;
  githubUrl?: string;
  videoUrl?: string;
  websiteUrl?: string;
  title: string;
  tag: string;
  comment: string;
}

const ProjectCard: FC<IProps> = ({
  tag,
  title,
  comment,
  projectImg,
  websiteUrl,
}): ReactElement => {
  const [isHover, setHover] = useState<boolean>(true);

  return (
    <>
      <div
        className="card"
        onMouseEnter={() => {
          setHover(!isHover);
        }}
        onMouseLeave={() => {
          setHover(!isHover);
        }}
      >
        <CardWrapper isHover={isHover} className="card__wrapper">
          <ProjectCardInnerTitleContainer>
            Projecct Title
          </ProjectCardInnerTitleContainer>
          <ProjectCardInnerBtnContainer>
            <a href="https://facebook.com" type="button">
              View
            </a>

            <a href="https://google.com" type="button">
              Code{' '}
            </a>
          </ProjectCardInnerBtnContainer>
        </CardWrapper>

        <a href={websiteUrl}>
          <img src={projectImg} alt="first project potrait"></img>
        </a>
        <h4 className="montserrat_300">{tag.toUpperCase()}</h4>
        <h1 className="playfair_300">{title.toUpperCase()}</h1>
        <IconContainer>
          <AiFillGithub />
          <HiOutlineExternalLink />
          <BiVideo />
        </IconContainer>
        <hr></hr>
        <h3 className="montserrat_300">{comment.toUpperCase()}</h3>
      </div>
    </>
  );
};

export default ProjectCard;
