import React from 'react';

import './Content.scss';
import { IContentComponentProps } from './type/contentInterfaces';

const Content = (_props: IContentComponentProps) => {
  return (
    <div className='Content'>
      <h1>Soy el contenido</h1>
    </div>
  );
};

export default Content;
