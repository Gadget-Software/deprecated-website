/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ServicesSection from "./Sections/ServicesSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const { loading, businessInfo } = props;

  let main;
  let specs;

  if (loading === false && businessInfo != null) {
    main = businessInfo.main;
    specs = businessInfo.business_specs;
  } else {
    main = "";
    specs = "";
  }

  const classes = useStyles();
  let landingPage;

  if (loading === false) {
    landingPage = (
      <>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={main.company_name}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          // {...rest}
        />
        <Parallax filter image={require("assets/img/supercomp.jpg").default}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h2 className={classes.title}>{main.tag_line}</h2>
                <h4>{main.contact_message}</h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ServicesSection services={specs.services} />
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    landingPage = (
      <>
        <div className={classes.container}>
          Loading info from backend server...this can take up to 30 seconds...
        </div>
      </>
    );
  }

  return <div>{landingPage}</div>;
}
