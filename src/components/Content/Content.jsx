import React from 'react';
import PropTypes from 'prop-types';

export const Content = ({ children, className = '' }) => (
  <div className="w-full grid grid-cols-12">
    <div className="col-span-0  md:col-span-1  lg:col-span-2"></div>
    <div className="col-span-12 md:col-span-10 lg:col-span-8">{children}</div>
    <div className="col-span-0  md:col-span-1  lg:col-span-2"></div>
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
};
