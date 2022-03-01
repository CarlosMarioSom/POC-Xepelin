import React from 'react';
import { HeaderComponentProps } from './types/headerInterfaces';
import enLabels from '../../../../../constants/en-labels';
import './Header.scss';

const Header = (_props: HeaderComponentProps) => {
  const renderInformation = () => {
    return (
      <div className='header__information'>
        <div className='header__information__movieIcon'>
          <img
            src={require('./../../../../../assets/icons/MovieIcon.png')}
            alt='MovieIcon'
            className='header__information__movieIcon__icon'
          />
        </div>
        <span className='header__information__text header__information__text--title'>
          {enLabels.header.title}
        </span>
        <span className='header__information__text header__information__text--content'>
          {enLabels.header.content}
        </span>
      </div>
    );
  };

  return (
    <div className='header'>
      <img
        className='header__image'
        src={require('../../../../../assets/images/HeaderImage.png')}
        alt='HeaderImaage'
      ></img>
      {renderInformation()}
    </div>
  );
};

export default Header;
