import React from 'react';
import PropTypes from 'prop-types';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Hero } from '../../components/Hero/Hero';
import { Content } from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import './styles.scss';
import { Carousel } from './Carousel';
import { Quote } from './Quote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FruchtbotePage = ({ businessInfo }) => {
  if (!businessInfo) {
    return;
  }

  const caseStudy = businessInfo.caseStudies.fruchtbote;

  const images = caseStudy.images.map((image) =>
    require('../../assets/img/case-studies/' + image),
  );
  const video = caseStudy.videos[0];
  return (
    <div>
      <Hero title="Fruchtbote Case Study" small />

      <div className="bg-gray-50">
        <Content className="px-10 md:px-0  text-lg text-justify md:text-left md:text-2xl lg:text-3xl">
          <div className="section">{caseStudy.description}</div>

          <div className="section">
            <Carousel images={images} />
          </div>

          <div className="section">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
              <div className="w-full min-h-0 h-screen/2 lg:w-1/2">
                <iframe
                  width="100%"
                  height="100%"
                  src={'https://www.youtube-nocookie.com/embed/' + video.id}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {video.quote?.length > 0 && (
                <div className="w-full text-center lg:text-left lg:w-1/2 lg:pl-[5%]">
                  <Quote text={video.quote} />
                </div>
              )}
            </div>
          </div>

          <div className="section">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 lg:space-y-0">
              <div className="text-6xl md:text-8xl text-cyan-500">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div className="md:pl-[5%] md:text-2xl lg:text-3xl">
                {caseStudy.impact}
              </div>
            </div>
          </div>
        </Content>

        <Footer />
      </div>
    </div>
  );
};

FruchtbotePage.propTypes = {
  businessInfo: PropTypes.object,
};
