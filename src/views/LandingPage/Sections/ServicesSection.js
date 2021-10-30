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

// import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ServicesSection(props) {
  const { services, email } = props;
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
          <h2 className={classes.title}>Services</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>{gridItems}</GridContainer>
      </div>
      <GridContainer justify="center" key={uuidv4()}>
        <GridItem xs={12} sm={12} md={8} key={uuidv4()}>
          <h2 className={classes.title}>Contact</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} key={uuidv4()}>
          <h3 className={classes.title}>{email}</h3>
        </GridItem>
      </GridContainer>
    </div>
  );
}
