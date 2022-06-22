import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Parallax } from 'react-parallax';
import './style.scss';
import image from '../../assets/img/gadget_software.jpg';

export const Hero = ({ title, small = false }) => {
  const classes = classNames(
    {
      'h-screen': !small,
      'h-screen/2': small,
    },
    'bg-black flex items-center justify-center bg-center bg-no-repeat bg-image',
  );
  return (
    <div className="relative">
      <Parallax className={classes} bgImage={image} strength={400} />
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 text-white">
        <div className="absolute top-1/2 text-4xl w-full md:max-w-2xl text-center px-10 md:text-left md:pl-10">
          {title}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  small: PropTypes.bool,
};
