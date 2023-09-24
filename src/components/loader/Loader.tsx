import React from 'react';

import './loader.css';

interface Loader {
  children?: React.ReactNode;
}

const Loader: React.FC<Loader> = ({ children }) => {
  return (
    <div className='loader-wrapper'>
      <div className='loader__container'>
        <div className='loader' />
        {children}
      </div>
    </div>
  )
}

export default Loader