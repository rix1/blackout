import React from 'react';

const InfoBox = ({ left, children }) => {
  if (left) {
    return (
      <div className="w-50-ns ph3 pt3 fl-ns cf">
        <div className="mw6 fr">{children}</div>
      </div>
    );
  }
  return (
    <div className="w-50-ns ph3 pt3 fr-ns cf">
      <div className="mw6">{children}</div>
    </div>
  );
};

export default InfoBox;
