import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ text }) => (
  <div className="text-bold italic text-2xl lg:text-3xl">{text}</div>
);

Quote.propTypes = {
  text: PropTypes.node,
};
