import React from 'react';

const PersonBox = ({ children, imgSrc }) => (
  <div className="w-33-ns w-100 tc fl-ns ph5-l ph3 mv4 mv0-ns">
    <div className="pa2">
      <img
        src={imgSrc}
        className="br-100 pa1 ba b--black-10 h4 w4"
        alt="avatar"
      />
    </div>
    {children}
  </div>
);

export default PersonBox;
