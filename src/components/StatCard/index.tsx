import React, { FC, ReactElement } from 'react';

interface IProps {
  title: string;
  value: number;
  icon: string;
}

const StatsCard: FC<IProps> = ({ title, value, icon }): ReactElement => {
  return (
    <>
      <div className="statistics-card">
        <p className="number">{value}</p>
        <div className="blueVerticleLineContainer">
          <div className="blueVerticleLine"></div>
        </div>
        <div className="logoContainer">
          <img src={icon} alt="icon potrait"></img>
        </div>
        <h2 className="poppins_300">{title}</h2>
      </div>
    </>
  );
};

export default StatsCard;
