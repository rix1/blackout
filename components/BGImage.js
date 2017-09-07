import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const BGImage = ({ filePath, children, className, ...rest }) => {
  return (
    <div className={className}>
      <div className="hero-wrapper relative pv5 vh-75-l">
        <div
          className="absolute absolute--fill hero-image h-100 cover bg-center"
          style={{ backgroundImage: `url(${filePath})` }}
        />
      <div className="relative h-100 w-100">{children}</div>
      </div>
    </div>
  );
};

export default styled(BGImage)`
  .hero-wrapper {
    background-color: #1f494d;
    background-color: hsla(0, 13%, 34%, 1);
  }
  .hero-image {
    mix-blend-mode: multiply;
    filter: grayscale(100%);
  }
`;
