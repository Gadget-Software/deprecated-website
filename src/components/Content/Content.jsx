import React from 'react';
import PropTypes from 'prop-types';

export const Content = ({ children }) => (
  <main className="mx-auto max-w-screen-md lg:max-w-screen-lg">{children}</main>
);

Content.propTypes = {
  children: PropTypes.node,
};
