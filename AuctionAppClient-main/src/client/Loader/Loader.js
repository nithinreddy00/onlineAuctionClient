import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="bounce-loader">
        <div className="bounce-ball"></div>
        <div className="bounce-ball"></div>
        <div className="bounce-ball"></div>
      </div>
    </div>
  );
};

export default Loader;
