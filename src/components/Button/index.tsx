import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

const StyledSecondaryBtn = styled.button`
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
  transition: all 400ms ease;
  &:hover {
    color: black;
    background-color: rgb(94, 199, 200);

    border: none;
  }
`;

interface IProps {
  name: string;
}

export const SecondaryBtn: FC<IProps> = ({ name }): ReactElement => {
  return (
    <>
      <StyledSecondaryBtn className="lato_400">{name}</StyledSecondaryBtn>
    </>
  );
};

export default SecondaryBtn;
