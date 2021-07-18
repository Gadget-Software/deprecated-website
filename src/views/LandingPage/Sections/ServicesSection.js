/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

// @material-ui/icons
import ApartmentIcon from "@material-ui/icons/Apartment";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import AssessmentIcon from "@material-ui/icons/Assessment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ServicesSection(props) {
  const { services } = props;
  const classes = useStyles();
  const icons = [DataUsageIcon, AssessmentIcon, ApartmentIcon];

  let gridItems;

  if (services != undefined) {
    gridItems = services.map((service, i) => {
      let iconName = icons[i];
      return (
        <GridItem xs={12} sm={12} md={4} key={uuidv4()}>
          <InfoArea
            title={service.service_name}
            description={service.description}
            icon={iconName}
            iconColor="info"
            vertical
          />
        </GridItem>
      );
    });
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center" key={uuidv4()}>
        <GridItem xs={12} sm={12} md={8} key={uuidv4()}>
          <h2 className={classes.title}>Let{"'"}s talk Services</h2>
          <h5 className={classes.description}>
            How does Gadget tunnel into servers like nobody before? Here are
            just a few of our state-of-the-art systems:
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>{gridItems}</GridContainer>
      </div>
    </div>
  );
}
