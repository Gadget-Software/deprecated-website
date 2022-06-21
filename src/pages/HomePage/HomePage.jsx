import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faChartColumn,
  faCity,
} from '@fortawesome/free-solid-svg-icons';
import { Hero } from '../../components/Hero/Hero';
import { Content } from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';

export const HomePage = ({ businessInfo }) => {
  if (!businessInfo) {
    return null;
  }

  const services = businessInfo.business_specs.services;

  const points = [
    {
      icon: faRobot,
      name: services[0].service_name,
      description: services[0].description,
    },
    {
      icon: faChartColumn,
      name: services[1].service_name,
      description: services[1].description,
    },
    {
      icon: faCity,
      name: services[2].service_name,
      description: services[2].description,
    },
  ];

  return (
    <div>
      <Hero title={businessInfo.main.tag_line} />

      <div className="bg-gray-50">
        <Content>
          <div className="flex flex-col md:flex-row justify-between items-start">
            {points.map((point, i) => (
              <div key={i} className="py-5 px-10 md:p-10 text-center flex-1">
                <div className="text-cyan-500 text-5xl mb-5 md:mb-10">
                  <FontAwesomeIcon icon={point.icon} />
                </div>
                <div className="font-bold mb-3 md:mb-6">{point.name}</div>
                <div className="text-gray-700 text-justify md:text-center">
                  {point.description}
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 flex flex-row justify-center">
            <a
              className="cta-btn text-2xl"
              href={businessInfo.main.calendly_link}
              target="_blank"
              rel="noreferrer"
            >
              Schedule a call
            </a>
          </div>
        </Content>

        <Footer />
      </div>
    </div>
  );
};

HomePage.propTypes = {
  businessInfo: PropTypes.object,
};
