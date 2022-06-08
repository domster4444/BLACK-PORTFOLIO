import React, { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface StyledSecondaryBtnProps {
  sm?: boolean;
  lg?: boolean;
}

const StyledSecondaryBtn = styled.button<StyledSecondaryBtnProps>`
  background-color: #191919;
  color: white;
  border-left: 0.1rem solid rgb(94, 199, 200);
  border-top: 0.1rem solid rgb(94, 199, 200);
  border-right: 0.5rem solid rgb(94, 199, 200);
  border-bottom: 0.5rem solid rgb(94, 199, 200);
  border-radius: 0px;
  cursor: pointer;
  font-size: 1.8rem;
  height: 6.3rem;

  padding: 1rem 1.5rem;
  min-width: 18.5rem;
  ${(props: StyledSecondaryBtnProps) =>
    props.sm
      ? css`
          font-weight: bold;
          height: 4.3rem;
          min-width: 15.5rem;
          font-size: 1.4rem;
          padding: 0.5rem 0.5rem;
        `
      : ''}

  transition: all 400ms ease;
  &:active {
    color: black;
    background-color: rgb(94, 199, 200);
    border: none;
  }
`;

interface IProps {
  sm?: boolean;
  name: string;
}

export const SecondaryBtn: FC<IProps> = ({ name, sm }): ReactElement => {
  return (
    <>
      <StyledSecondaryBtn sm={sm} className="lato_400">
        {name}
      </StyledSecondaryBtn>
    </>
  );
};

export default SecondaryBtn;
