import React from 'react';
import { HeaderComponentProps } from './types/HeaderInterfaces';
import enLabels from '../../../../../constants/en-labels';
import './Header.scss';

const Header = (_props: HeaderComponentProps) => {
  const renderInformation = () => {
    return (
      <div className='Header__Information'>
        <div className='Header__Information__YellowIcon'>
          <img
            src={require('./../../../../../assets/icons/MovieIcon.png')}
            alt='MovieIcon'
            className='Header__Information__YellowIcon__Icon'
          />
        </div>
        <span className='Header__Information__Text Header__Information__Text--title'>
          {enLabels.header.title}
        </span>
        <span className='Header__Information__Text Header__Information__Text--content'>
          {enLabels.header.content}
        </span>
      </div>
    );
  };

  return (
    <div className='Header'>
      <img
        className='Header__Image'
        src={require('../../../../../assets/images/HeaderImage.png')}
        alt='HeaderImaage'
      ></img>
      {renderInformation()}
    </div>
  );
};

export default Header;
