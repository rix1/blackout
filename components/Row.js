import React, { PropTypes } from 'react';

const Row = ({ className, ...rest }) => {
  return <div className="ph4 mv5 cf" {...rest} />;
};

export default Row;
