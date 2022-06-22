import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Content = ({ children, className = '' }) => (
  <div className={classNames('w-full grid grid-cols-12', className)}>
    <div className="col-span-0  md:col-span-1  lg:col-span-2"></div>
    <div className="col-span-12 md:col-span-10 lg:col-span-8">{children}</div>
    <div className="col-span-0  md:col-span-1  lg:col-span-2"></div>
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
