import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Parallax } from 'react-parallax';
import image from '../../assets/img/gadget_software.jpg';
import { Content } from '../Content/Content';

export const Hero = ({ title, small = false }) => {
  const classes = classNames(
    {
      'h-screen': !small,
      'h-screen/2': small,
    },
    'bg-black flex items-center justify-center',
  );
  return (
    <div className="relative">
      <Parallax
        className={classes}
        bgImage={image}
        bgImageStyle={{ maxHeight: '100vh', width: 'auto' }}
        strength={400}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 text-white flex flex-row justify-start items-center">
        <Content className="">
          <div className="text-4xl px-10 md:px-0 md:max-w-2xl">{title}</div>
        </Content>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  small: PropTypes.bool,
};
