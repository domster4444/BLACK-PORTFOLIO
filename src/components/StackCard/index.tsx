import React, { FC, ReactElement } from 'react';
import { Tooltip, Button, Grid } from '@nextui-org/react';

interface IProps {
  iconName: string;
  iconURL: string;
}

const StackCard: FC<IProps> = ({ iconName, iconURL }): ReactElement => {
  return (
    <>
      <Tooltip
        placement="bottom"
        content={iconName}
        style={{ display: 'inline' }}
        color="invert"
      >
        <img src={iconURL} alt="github icon" />
      </Tooltip>
    </>
  );
};

export default StackCard;
